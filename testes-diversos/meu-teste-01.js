/*

let num = [9, 6, 3, 4, 7]
alert(`Os elementos do seu array, são: -> ${num} <-`)
alert("Vamos identificar o indice de um elemento de seu ARRAY?")
let vlr = prompt("Informe o elemento que você quer saber o índice?")
let posi = num.indexOf(vlr)
alert(`O elemento ${vlr} está alocado no índice ${posi}`)

*/

let num = [2, 1, 7 , 9, 3, 8]
alert(`O seu ARRAY possui os seguintes elementos: -> ${num}`)
let vlr = prompt("Informe o valor que deseja saber o índice: ")
alert(`O valor ${Number(vlr)} está na posição ${num.indexOf(Number(vlr))}`)
