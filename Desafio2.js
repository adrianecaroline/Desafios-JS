/* Desafio 2 - Faça uma função que recebe um valor inteiro e positivo:

- Se o valor for menor que 350, a função deverá incrementar o valor recebido com o valor 5.
- Se o novo valor for múltiplo de 5, deverá exibir a mensagem: "MÚLTIPLO DE 5".
- Se o novo valor for múltiplo de 7, deverá exibir a mensagem: "MÚLTIPLO DE 7".*/

function recebeValor (){
    for(var valor = 1; valor < 350; valor+=5) {
        console.log(valor)
        if(valor % 5 == 0){
            console.log("O número " + valor + " é múltiplo de 5")
        }else if(valor % 7 == 0){
            console.log("O número " + valor + " é múltiplo de 7")
        }
    } 
}
recebeValor();