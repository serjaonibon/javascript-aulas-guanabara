var resultado = prompt(
  "Escolha uma alternativa: " +
    "\n" +
    "1. Domingo" +
    "\n" +
    "2. Segunda" +
    "\n" +
    "4. Quarta" +
    "\n" +
    "5. Quinta" +
    "\n" +
    "6. Sexta" +
    "\n" +
    "7. Sábado"
);

switch (resultado) {
  case "1":
    alert("O resultado é Domingo");
    break;
  case "2":
    alert("O resultado é Segunda");
    break;
  case "3":
    alert("O resultado é Terça");
    break;
  case "4":
    alert("O resultado é Quarta");
    break;
  case "6":
    alert("O resultado é Quinta");
    break;
  case "6":
    alert("O resultado é Sexta");
    break;
  case "7":
    alert("O resultado é Sábado");
    break;
  default:
    alert("Finalizando");
}

/**
 * 
 * console.log(
    '1. Domingo' +
    '2. Segunda' +
    '3. Terça' +
    '4. Quarta' +
    '5. Quinta' +
    '6. Sexta' + 
    '7. Sábado'
)

 */
