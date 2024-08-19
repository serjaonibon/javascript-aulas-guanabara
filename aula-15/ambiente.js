let num = [5, 8, 2, 9, 3]
num[5] = 6 // essa atribuição, fará o número 6 ser inclçusoi no array na posição(índice)  5
num.push(7) // o push inseri um elemento ao array, colocando-o na última posição
num.sort() // o sort ordena os elementos em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)


