function pegarCSS(variavel){
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const configuraEixo = {
    color: pegarCSS('--branco'),
    size: 12,
    family: pegarCSS('--fonte-texto')
}

export{pegarCSS, configuraEixo}

