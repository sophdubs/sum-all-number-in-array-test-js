function sumItems(array) {
  let sum = 0;
  for (let a of array) {
    if (Array.isArray(a)) {
      sum += sumItems(a);
    } else {
      sum += a;
    }
  }
  return sum;
}



module.exports = sumItems;