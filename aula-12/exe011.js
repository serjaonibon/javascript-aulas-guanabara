var idade = 22
if (idade < 16) {
  console.log("Você não possui idade suficiente para votar!")
} else if (idade >= 16 && idade <=17 || idade > 62) {
  console.log("Você está apto a votar, caso queira!")
} else if (idade >= 18) {
  console.log("Você deverá votar!")
} 




/*
if (condition1)
  statement1
else if (condition2)
  statement2
else if (condition3)
  statement3
// …
else
  statementN

*/



/**
 * 
 

var idade = 67
console.log(`Você tem ${idade} anos de idade`)
if (idade < 16) {
  console.log("Menor de idade. Não vota!")
} else if (idade >= 16 && idade < 18) {
    console.log("Voto é opçional!")
} else if (idade >= 67) {
    console.log('Voto opcional!')
}else {
    console.log('Maior de idade, voto obrigatório')
}


 */