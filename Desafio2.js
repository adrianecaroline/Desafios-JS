
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
