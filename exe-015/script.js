function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade} anos(s) de idade.`
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade <10) {
                //criança
                img.setAttribute("src", "crianca-menino.png")
            } else if (idade <21) {
                //jovem
                img.setAttribute("src", "homem-jovem.png")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "homem.png")         
            } else{
                // idoso
                img.setAttribute("src", "sr-idoso.png") 
            }
        }else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade <10) {
                //criança
                img.setAttribute("src", "garotinha.png")
            } else if (idade <21) {
                //jovem
                img.setAttribute("src", "mulher-jovem.png")
            } else if (idade < 50) {
                //adulto   
                img.setAttribute("src", "mulher.png")       
            } else{
                // idoso
                img.setAttribute("src", "sra-idosa.png")
            }
        }
        res.style.textAlign = "center" 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    
        }        
}