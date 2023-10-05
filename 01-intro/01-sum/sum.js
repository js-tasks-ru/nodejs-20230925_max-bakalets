function sum(a, b) {
  if ([a, b].some((value) => typeof value !== 'number')) {
    throw new TypeError();
  }
  return a + b;
}
// косяки понял, учту их, спасибо
module.exports = sum;
