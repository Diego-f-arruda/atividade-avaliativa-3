/*Um comerciante comprou um produto e quer vendê-lo com lucro de 45% se o valor da
compra for menor que R$20,00; caso contrário, o lucro será de 30%. Faça um algoritmo 
que receba o valor de compra do produto e ele retorne o valor de venda desse mesmo 
produto. (Opcional, utilizar o INTL para formatar saída).*/



/*var formatador = new Intl.NumberFormat("pt-BR",{
    style: "currency",
    currency:"BRL"
})

var exemploTernario = (ParcF > LParc) ? "Excede o Limite permitido:" : "O valor de seu emprestimo ficara em: " + formatador.format(ParcF) + " por mes."
console.log(exemploTernario)*/

import leia from "readline-sync"

var VC = leia.questionFloat("Qual o valor da compra?\n")

var form = new Intl.NumberFormat("pt-BR",{
    style: "currency",
    currency:"BRL"
})

if(VC < 20){
    var ValorCorrigido = VC + (VC * 0.45)
}else{
    var ValorCorrigido = VC + (VC * 0.30)
}
console.log("O valor de compra fica " + form.format(ValorCorrigido))