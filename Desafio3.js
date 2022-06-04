/* DESAFIO 3- Faça uma função que exibe a sequência abaixo usando as especificações:

Exibir os 100 primeiros números da sequência da acima.
- O primeiro valor é 0.
- O segundo valor é 1.
- O terceiro valor em diante é o resultado da soma de valores, por exemplo:
1.Se somar o primeiro valor e o segundo, o resultado é 1.
2.Se somar o segundo valor e o resultado da soma anterior,  o novo resultado será 2, e assim por diante.
*/



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
