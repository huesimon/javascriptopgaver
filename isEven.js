console.log(min(0,10));

function min(x,y) {
    if(x > y){
        return x;
    }
    else if(x < y){
        return y;
    }
}


// for (i = 0; i <100; i++){
//     console.log(isEven(i))
// }


function isEven(number) {
    if(number % 2 == 0){
        return true;
    }
    else {
        return false;
    }
}

countBs("BBCXDbbbB");
function countBs(string) {
    let counter = 0;
    for (i = 0; i <= string.length; i++)
        if (string.charAt(i) == "B"){
        counter++;
        }
    console.log(counter)
}
countChars("Mit navn er Jens", "e");

function countChars(string, char) {
    let counter = 0;
    for (i = 0; i <= string.length; i++)
        if (string.charAt(i) == char){
            counter++;
        }
    console.log(counter)
}