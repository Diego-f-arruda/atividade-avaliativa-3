/*Desenvolva um algoritmo que solicite ao usuário três notas (de 0.0 a 10.0) de um estudante 
e os respectivos pesos de cada uma dessas notas. O algoritmo deve calcular e exibir a média ponderada das notas.

`Média Ponderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3)`

---

*/
import leia from "readline-sync"

var n1 = leia.questionFloat("Informe a primeira nota: ")
var p1 = leia.questionFloat("Qual o peso dessa Nota? ")
var n2 = leia.questionFloat("Informe a segunda nota: ")
var p2 = leia.questionFloat("Qual o peso dessa Nota? ")
var n3 = leia.questionFloat("Informe a terceira nota: ")
var p3 = leia.questionFloat("Qual o peso dessa Nota? ")

var MPon = (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3)

console.log("A media ponderada de sua nota é " + MPon)