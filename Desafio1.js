/* DESAFIO 1 - Faça uma função que escreva no console uma palavra de acordo com a especificação abaixo:

- Utiliza os valores de 1 a 299.
- Para cada valor, se ele for múltiplo de 3, deverá exibir a palavra: VAMO.
- Para cada valor, se ele for múltiplo de 5, deverá exibir a palavra: BORA.
- Para cada valor, se ele for múltiplo de 3 e 5 ao mesmo tempo, deverá exibir a palavra: VAMBORA.*/

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