async function criarGraficoPizza(){
    const url = 'https://raw.githubusercontent.com/luiza120/2024-API-FDB-LUIZA3DS.JSON/refs/heads/main/graficobarra.json'
    const res = await fetch(url)
    const dados = await res.json()

    for( let i = 0; i<= dados.length; i++){
        let listaNome = []

        listaNome.push
    }
    console.log(dados[i].nome)
}
