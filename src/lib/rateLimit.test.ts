import { describe, it, expect, vi, beforeEach } from "vitest";
import { isRateLimited } from "./rateLimit";

describe("isRateLimited", () => {
  beforeEach(() => {
    // Reset the internal Map by advancing time past the window
    vi.useFakeTimers();
    vi.setSystemTime(Date.now() + 120_000);
    // Trigger a reset by calling with a unique IP
    isRateLimited("__reset__" + Math.random());
    vi.useRealTimers();
  });

  it("allows the first request", () => {
    const ip = "192.168.1." + Math.random();
    expect(isRateLimited(ip)).toBe(false);
  });

  it("allows up to 5 requests in a window", () => {
    const ip = "10.0.0." + Math.random();
    for (let i = 0; i < 5; i++) {
      expect(isRateLimited(ip)).toBe(false);
    }
  });

  it("blocks the 6th request in the same window", () => {
    const ip = "172.16.0." + Math.random();
    for (let i = 0; i < 5; i++) {
      isRateLimited(ip);
    }
    expect(isRateLimited(ip)).toBe(true);
  });

  it("resets after the time window expires", () => {
    vi.useFakeTimers();
    const ip = "rate-limit-reset-test";

    // Exhaust the limit
    for (let i = 0; i < 6; i++) {
      isRateLimited(ip);
    }
    expect(isRateLimited(ip)).toBe(true);

    // Advance past the 1-minute window
    vi.advanceTimersByTime(61_000);

    expect(isRateLimited(ip)).toBe(false);
    vi.useRealTimers();
  });

  it("tracks different IPs independently", () => {
    const ip1 = "ip-independent-1-" + Math.random();
    const ip2 = "ip-independent-2-" + Math.random();

    // Exhaust ip1
    for (let i = 0; i < 6; i++) {
      isRateLimited(ip1);
    }

    expect(isRateLimited(ip1)).toBe(true);
    expect(isRateLimited(ip2)).toBe(false);
  });
});
