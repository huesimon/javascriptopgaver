sum(range(1,10));
function range(start, end) {
    let rangeArray = [];
    for (start; start <= end; start++) {
        rangeArray.push(start)
    }

    return rangeArray;
}



function sum(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    console.log(sum);
}