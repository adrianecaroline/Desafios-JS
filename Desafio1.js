
function lerValores() {
    for (var num1 = 1; num1 <= 299; num1++) {
        if(num1 % 3 == 0 && num1 % 5 == 0) {
            console.log("O número " + num1 + " é múltiplo de 3 e 5");
        } else if (num1 % 3 == 0){
            console.log("O número " + num1 + " é múltiplo de 3");
        } else if (num1 % 5 == 0){
            console.log("O número " + num1 + " é múltiplo de 5");
        }
    }
}
console.log(lerValores());
