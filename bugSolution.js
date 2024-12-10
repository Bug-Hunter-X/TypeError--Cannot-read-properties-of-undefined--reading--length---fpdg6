function foo(x) {
  if (x === null || x === undefined) {
    return 0;
  }
  return x.length;
}