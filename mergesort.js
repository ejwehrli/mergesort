function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  const isEven = wholeArray.length % 2 === 0;
  const middle = Math.floor(wholeArray.length / 2) + (isEven ? 0 : 1);
  const firstHalf = wholeArray.slice(0, middle);
  const secondHalf = wholeArray.slice(middle);
  return [firstHalf, secondHalf];
}

function merge(array1, array2) {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex <= array1.length && rightIndex <= array2.length) {
    if (leftIndex === array1.length) {
      output.push(...array2.slice(rightIndex));
      break;
    }
    if (rightIndex === array2.length) {
      output.push(...array1.slice(leftIndex));
      break;
    }
    if (array1[leftIndex] < array2[rightIndex]) {
      output.push(array1[leftIndex]);
      leftIndex++;
    } else {
      output.push(array2[rightIndex]);
      rightIndex++;
    }
  }
  return output;
}
