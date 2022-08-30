function range(start, end) {
  function inner(end) {
    if (!end) {
      return [];
    }
    const length = end - start + 1;
    return Array.from({ length }, (v, k) => start + k);
  }
  if (end === undefined) {
    return inner;
  }
  return inner(end);
}

range(3,3); // [3]
range(3,8); // [3,4,5,6,7,8]
range(3,0); // []
var start3 = range(3);
var start4 = range(4);
start3(3); // [3]
start3(8); // [3,4,5,6,7,8]
start3(0); // []
start4(6); // [4,5,6]