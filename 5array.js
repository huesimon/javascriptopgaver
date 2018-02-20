let arrayTest = ["A", "B", "C"];
console.log("old array = " + arrayTest);
console.log("new array = " + reverseArray(arrayTest));

function reverseArray(array) {
    let newArray = [];
    for (i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}