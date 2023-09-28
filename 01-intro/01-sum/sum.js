function sum(a, b) {
  try {
    if (typeof(a||b) !== 'number') {
      throw new TypeError;
    }
    return a + b;
  } catch (err) {
    return err.name;
  }
}

module.exports = sum;
