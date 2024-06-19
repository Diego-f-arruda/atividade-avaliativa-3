/*Desenvolva um algoritmo que receba a nota final de um aluno (de 0.0 a 10.0) 
e apresente com base no formato de conceito, nova fórmula de avaliação na que 
está sendo implantada na educação. Segue abaixo a tabela. Além disso, você deve 
validar se a nota é inválida (menores que 0 e maiores que 10). Caso aconteça, você deve informar o usuário;

- Nota >= 90: A
- Nota >= 80: B
- Nota >= 70: C
- Nota >= 60: D
- Nota < 60: F

*/
import leia from "readline-sync"

var Nota = leia.questionFloat("Informe a nota final do aluno.\n")

if(Nota < 0.0 || Nota > 10.0){
        console.log("Valor de nota invalido")
    }else if(Nota >= 9.0){
        console.log("Voce tirou um A")
    }else if(Nota >= 8.0){
        console.log("Voce tirou um B")
    }else if(Nota >= 7.0){
        console.log("Voce tirou um C")
    }else if(Nota >= 6.0){
        console.log("Voce tirou um D")
    }else {
        console.log("Voce tirou um F")
}
