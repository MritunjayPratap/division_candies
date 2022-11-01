function divide_candy(num) {
    var factorArr = [];
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) { 
           factorArr.push(i-1);
        }
    }
    console.log(factorArr);
}
//calculating all the factors and then subsctracting one
divide_candy(30);