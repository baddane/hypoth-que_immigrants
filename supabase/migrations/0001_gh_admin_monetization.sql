-- ============================================================
-- guide-hypotheque.ca — Admin & monétisation
-- Projet Supabase PARTAGÉ avec guide-taechir (ref: yjxuutdnhsvrbbgcqltw)
-- => tout est préfixé « gh_ » pour éviter toute collision.
--
-- Modèle de sécurité :
--   - La clé publique (navigateur/serveur) ne peut QU'INSÉRER (RLS).
--   - La lecture/maj/suppression passe UNIQUEMENT par des fonctions
--     SECURITY DEFINER protégées par mot de passe.
--   - gh_admin_config n'a AUCUNE policy => invisible via la clé publique.
--   - L'oracle de mot de passe gh_admin_verify n'est JAMAIS exposé aux clients.
--
-- Note Supabase : pgcrypto vit dans le schéma « extensions », d'où
--   extensions.crypt / extensions.gen_salt et search_path = public, extensions.
-- ============================================================

-- ---------- Tables ----------
create table if not exists public.gh_contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text not null,
  subject text,
  message text,
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

-- Schéma enrichi : capture les leads riches du wizard de préapprobation.
create table if not exists public.gh_leads (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text not null,
  telephone text,
  province text,
  statut text,
  score int,
  quality text,
  source text not null default 'wizard',
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.gh_admin_config (
  id int primary key default 1,
  password_hash text not null,
  constraint gh_admin_config_single_row check (id = 1)
);

-- ---------- RLS ----------
alter table public.gh_contact_messages enable row level security;
alter table public.gh_leads            enable row level security;
alter table public.gh_admin_config     enable row level security;

drop policy if exists "gh_anon_insert_contact" on public.gh_contact_messages;
create policy "gh_anon_insert_contact" on public.gh_contact_messages
  for insert to anon, authenticated with check (true);

drop policy if exists "gh_anon_insert_leads" on public.gh_leads;
create policy "gh_anon_insert_leads" on public.gh_leads
  for insert to anon, authenticated with check (true);

-- gh_admin_config : AUCUNE policy => inaccessible via la clé publique.

-- ---------- Mot de passe admin (dédié à guide-hypotheque) ----------
-- Hash bcrypt (préfixe $2a$, vérifiable par pgcrypto). Le mot de passe en
-- clair n'est PAS stocké ici ; il est communiqué hors dépôt.
insert into public.gh_admin_config (id, password_hash)
values (1, '$2a$10$1g27p5u.z0lfS8hk7C9QN.8diidhYzfMEBSf7NBClUgftMqFBnit.')
on conflict (id) do nothing;

-- ---------- Fonctions SECURITY DEFINER ----------

-- Vérifie le mot de passe. NON exposée aux clients (oracle).
create or replace function public.gh_admin_verify(p_password text)
returns boolean
language sql
security definer
set search_path = public, extensions
as $$
  select exists (
    select 1
    from public.gh_admin_config
    where id = 1
      and password_hash = extensions.crypt(p_password, password_hash)
  );
$$;

-- Liste contacts + leads (triés du plus récent au plus ancien).
create or replace function public.gh_admin_list(p_password text)
returns json
language plpgsql
security definer
set search_path = public, extensions
as $$
begin
  if not public.gh_admin_verify(p_password) then
    raise exception 'unauthorized';
  end if;

  return json_build_object(
    'contacts', coalesce(
      (select json_agg(c order by c.created_at desc) from public.gh_contact_messages c),
      '[]'::json),
    'leads', coalesce(
      (select json_agg(l order by l.created_at desc) from public.gh_leads l),
      '[]'::json)
  );
end;
$$;

-- Marque un élément lu / non lu.
create or replace function public.gh_admin_set_read(
  p_password text, p_kind text, p_id uuid, p_read boolean)
returns void
language plpgsql
security definer
set search_path = public, extensions
as $$
begin
  if not public.gh_admin_verify(p_password) then
    raise exception 'unauthorized';
  end if;

  if p_kind = 'contact' then
    update public.gh_contact_messages set is_read = p_read where id = p_id;
  elsif p_kind = 'lead' then
    update public.gh_leads set is_read = p_read where id = p_id;
  else
    raise exception 'invalid kind';
  end if;
end;
$$;

-- Supprime un élément.
create or replace function public.gh_admin_delete(
  p_password text, p_kind text, p_id uuid)
returns void
language plpgsql
security definer
set search_path = public, extensions
as $$
begin
  if not public.gh_admin_verify(p_password) then
    raise exception 'unauthorized';
  end if;

  if p_kind = 'contact' then
    delete from public.gh_contact_messages where id = p_id;
  elsif p_kind = 'lead' then
    delete from public.gh_leads where id = p_id;
  else
    raise exception 'invalid kind';
  end if;
end;
$$;

-- Change le mot de passe admin.
create or replace function public.gh_admin_change_password(p_old text, p_new text)
returns void
language plpgsql
security definer
set search_path = public, extensions
as $$
begin
  if not public.gh_admin_verify(p_old) then
    raise exception 'unauthorized';
  end if;

  update public.gh_admin_config
  set password_hash = extensions.crypt(p_new, extensions.gen_salt('bf'))
  where id = 1;
end;
$$;

-- ---------- Permissions ----------
-- Par défaut Postgres accorde EXECUTE à PUBLIC : on révoque tout, puis on
-- ré-accorde uniquement les fonctions autorisées aux rôles clients.
revoke all on function public.gh_admin_verify(text)                       from public, anon, authenticated;
revoke all on function public.gh_admin_list(text)                         from public, anon, authenticated;
revoke all on function public.gh_admin_set_read(text, text, uuid, boolean) from public, anon, authenticated;
revoke all on function public.gh_admin_delete(text, text, uuid)           from public, anon, authenticated;
revoke all on function public.gh_admin_change_password(text, text)        from public, anon, authenticated;

-- gh_admin_verify : JAMAIS exposée (pas de grant).
grant execute on function public.gh_admin_list(text)                         to anon, authenticated;
grant execute on function public.gh_admin_set_read(text, text, uuid, boolean) to anon, authenticated;
grant execute on function public.gh_admin_delete(text, text, uuid)           to anon, authenticated;
grant execute on function public.gh_admin_change_password(text, text)        to anon, authenticated;
