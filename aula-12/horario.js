var hora = prompt("Por gentileza, informe que horas são")
if (hora >= 4 && hora < 12) {
    alert("Bom dia!" )
}else if (hora >= 12 && hora < 18) {
    alert("Boa tarde!")
} else if (hora >= 18 && hora < 24) {
    alert("Boa noite!")
} else if (hora >= 24 || hora < 4) {
    alert("Boa madrugada!")
}