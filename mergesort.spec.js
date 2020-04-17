const testArray = [5, 2, 3, 1, 4];

describe('Split Array function', function () {
  it('is able to split an array into two halves', function () {
    // your code here
    //console.log(split(testArray));
    //expect(split(testArray)).length.toEqual(2);
    expect(split(testArray).length).toEqual(2);
    expect(split(testArray)[0].length).toEqual(3);
    expect(split(testArray)[1].length).toEqual(2);
  });
});

describe('Merge function', function () {
  it('is able to merge two sorted arrays into one sorted array', function () {
    // test the merging algorithm
    const arrays = split(testArray);
    const first = arrays[0];
    const second = arrays[1];
    expect(merge(first, second)).toEqual([1, 4, 5, 2, 3]);
  });
});

describe('MergeSort function', function () {
  it('is able to sort an array', function () {
    expect(mergeSort(testArray)).toEqual([1, 2, 3, 4, 5]);
  });
});

