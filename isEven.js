for (i = 0; i <100; i++){
    isEven(i);
}


function isEven(number) {
    if(number % 2 == 0){
        console.log(number + "Is Even");
        return true;
    }
    else {
        console.log(number + "Is not Even")
    }
}