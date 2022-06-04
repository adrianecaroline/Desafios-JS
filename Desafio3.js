
function fibonacci (){
    
    let anterior = 0;
     let atual = 1;
     let proximo = 1;
 
     for(let i = 0; i <100; i++){
       console.log(atual)
         proximo = atual + anterior
         anterior = atual
         atual = proximo
     }
 }
fibonacci();
