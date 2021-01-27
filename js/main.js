let number = 143;

function checkIsWithinRange(n){
    let result = ""; 
    if (n >= 100 && n <= 200){
        result = "Liczba znajduje się w przedziale";
    }
    else{
        result = "Liczba nie znajduje się w przedziale";
    }
    return result;
}

console.log(checkIsWithinRange(number));