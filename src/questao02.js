/*Escreva um algoritmo que calcule o salário de um funcionário que recebe por hora de
trabalho. Você deve solicitar ao usuário as seguintes informações: Quantidade de horas 
trabalhadas, Valor da hora trabalhada e percentual de desconto. Após solicitar essas 
informações, o algoritmo deve apresentar o valor do salário bruto,o valor do desconto e o 
valor do salário líquido. (Opcional, utilizar o INTL para formatar saída).
*/
import leia from "readline-sync"
console.log("----------------------------------------------")
var QH = leia.questionFloat("Quantas horas foram trabalhadas? ")
var VH = leia.questionFloat("Qual o valor da hora de trabalho? ")
var pd = leia.questionFloat("Qual o Percentual de desconto a ser aplicado? ")
console.log("----------------------------------------------")

var PD = pd/100
var TB = QH * VH  
var VD = TB * PD
var VL = TB - VD

var form = new Intl.NumberFormat("pt-BR",{
    style: "currency",
    currency:"BRL"
})

console.log("----------------------------------------------")
console.log("O Salario bruto é: " + form.format(TB))
console.log("O Desconto total fica: " + form.format(VD))
console.log("O Salario Liquido fica: " + form.format(VL))
