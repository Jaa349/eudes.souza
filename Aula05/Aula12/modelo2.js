function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >1 && idade < 13){
                //Criança
                img.setAttribute('src', 'foto-crianca.jpg')
                img.style.height = '200px'
                img.style.borderRadius = '50%'
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-adolecente.jpg')
                img.style.height = '200px'
                img.style.width = '200px'
                img.style.borderRadius = '50%'
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-homem-adulto.jpg')
                img.style.width = '200px'
                img.style.height = '200px'
                img.style.borderRadius = '50%'
            }else{
                //Velho
                img.setAttribute('src', 'foto-crianca.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            img.setAttribute('src', 'foto-crianca.jpg')
            img.style.height = '200px'
            img.style.width = '200px'
            img.style.borderRadius = '50%'
            if(idade >1 && idade < 13){
                //Criança
            }else if(idade < 21){
                //Jovem
            }else if(idade < 50){
                //Adulto
            }else{
                //Velho
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} ano.`
        res.appendChild(img)
    }
}
