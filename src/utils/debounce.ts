export function debounce<A = unknown, R = void>(
  callee: (...args: A[]) => R,
  timeoutMs: number
) {
  return function perform(...args: A[]) {
    const previousCall = this.lastCall;
    this.lastCall = Date.now();

    if (previousCall && this.lastCall - previousCall <= timeoutMs) {
      clearTimeout(this.lastCallTimer);
    }

    this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
  };
}
