function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fAno.value)
        res.innerHTML = `Idade calculada: ${idade} anos(s) de idade.`
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade <10) {
                //criança
            } else if (idade <21) {
                //jovem
            } else if (idade < 50) {
                //adulto          
            } else{
                // idoso
            }
        }        
     
    }

}