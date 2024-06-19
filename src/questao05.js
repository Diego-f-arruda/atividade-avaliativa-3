/*Escreva um algoritmo para fazer a verificação de triângulos. Você deve solicitar 3 
valores inteiros ao usuário e com essas informações, primeiramente você deve verificar 
se é possível montar um triângulo com esses valores (SE É UM TRIÂNGULO VÁLIDO). 
Para isso, cada um dos lados deve ser menor que a soma dos outros dois. Caso, não seja válido, 
o algoritmo deve simplesmente informar que os valores são inválidos. Caso contrário, você ainda 
deve classificar qual é o tipo de triângulo, se é: Equilátero, Isósceles ou Escaleno.

- Equilátero: todos os lados iguais;
- Isósceles: dois lados iguais;
- Escaleno: todos os lados diferentes;
*/
import leia from "readline-sync"
var L1 = leia.questionInt("informe o valor do lado 1 de seu triangulo: ")
var L2 = leia.questionInt("informe o valor do lado 2 de seu triangulo: ")
var L3 = leia.questionInt("informe o valor do lado 3 de seu triangulo: ")

if(L1 < (L2 + L3) && L2 < (L1 + L3) && L3 < (L1 + L2)){
    console.log("E um Triangulo Valido")
}else{
    console.log("Valores Invalidos")
}

if((L1 === L2 && != L3) || (L1 === L3 && != L2) || (L2 === L3 && != L1)){
    console.log("E um Isosceles.")
}else if()