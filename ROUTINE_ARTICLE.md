Publish one new high-quality article to the website in full autonomy, then push to main. Discover and respect the site's conventions exactly.

1. Checkout main, pull latest, and install dependencies if needed (npm install if package.json exists and node_modules absent).
2. Identify the build command: check package.json for a "build" script, or detect the generator (Hugo, Jekyll, Astro, Gatsby, Next, etc.) and use its build command.
3. Locate the articles folder by finding the directory with the most .md/.mdx files (common paths: content/, src/content/, posts/, _posts/, blog/, src/pages/blog/).
4. Read 2–3 existing articles to learn the format: frontmatter structure, heading hierarchy, tone, length, and any metadata conventions.
5. Infer the site's niche and topic from existing content.
6. Write one new article following the discovered format exactly. Ensure it is high quality, well-structured, and on-topic.
7. Build the site to verify no errors.
8. Commit the new article with a clear message and push to main.

If the site structure is unclear or build fails, report the issue and stop.
Always push directly to the main branch.

── 4. VALIDATION (bloquant, économe en tokens) ──
- Vérifie le frontmatter et les liens internes.
- Lance le build SANS ingérer les logs :
    npm run build > /tmp/build.log 2>&1 && echo "BUILD_OK" || (echo "BUILD_FAIL"; tail -n 30 /tmp/build.log)
  Ne lis le log QUE si "BUILD_FAIL". Ne pousse jamais un build cassé.
