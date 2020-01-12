function bigestSumOfTwoElements(array) {
    let sum;
    array = array.sort();
    sum = array[array.length] + array[array.length - 1];
    console.log(sum);
    return sum;
}
console.log(bigestSumOfTwoElements([1, 2, 3, 4]));