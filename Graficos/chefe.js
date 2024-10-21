const url1 = "https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json"


async function redesociais() {
    const res1 = await fetch(url1)
    const dados1 = await res1.json()

    const Facebook = (dados1.Facebook)
    const Youtube = (dados1.Youtube)
    const WhatsApp = (dados1.WhatsApp)
    const Instagram = (dados1.Instagram)
    const Tiktok = (dados1.Tiktok)
    const WeChat = (dados1.WeChat)

    

    const paragrafo1 = document.createElement('p')
    paragrafo1.classList.add('graficos-container__texto')

    paragrafo1.innerHTML = `
    Quantidade de pessoas no Face<span> ${Facebook} bilhões</span> 
    Quantidade de pessoas no Youtube<span> ${Youtube} bilhões</span> 
    Quantidade de pessoas no WhatsApp<span> ${WhatsApp} bilhões</span> 
    Quantidade de pessoas no Instagram<span> ${Instagram} bilhões</span> 
    Quantidade de pessoas no Tiktok<span> ${Tiktok} bilhões</span> 
    Quantidade de pessoas no WeChat<span> ${WeChat} bilhões</span> 
    .`
    console.log(paragrafo1)

    const container1 = document.getElementById("graficos-container")
    container1.appendChild(paragrafo1)
}

redesociais();