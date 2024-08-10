alert("Hoje é um dia muito especial, pois é dia de celebrar o seu CASAMENTO!");
var casamento = prompt(
  "Você está comemorando quantos anos de casamento:" +
    "\n" +
    "1. | 1 Ano de casamento" +
    "\n" +
    "2. | 2 Anos de casamento" +
    "\n" +
    "3. | 3 Anos de casamento" +
    "\n" +
    "4. | 4 Anos de casamento" +
    "\n" +
    "5. | 17 Anos de casamento"
)

switch (casamento) {
  case "1":
    alert("Bodas de Papel");
    break;
  case "2":
    alert("Bodas de Algodão");
    break;
  case "3":
    alert("Bodas de Trigo");
    break;
  case "4":
    alert("Bodas de Linho");
    break;
  case "5":
    alert("Bodas de Rosa");
    break;
  default:
    alert("Você selecionou uma opção ERRADA. Por gentileza, reinicie o programa!");
}
