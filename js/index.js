const btn = document.querySelector(".btn-busca");
const inputValue = document.querySelector("#input-busca");
const cidade = document.querySelector("#cidade");
const tempo = document.querySelector("#icone-tempo");
const umidade = document.querySelector("#umidade");
const velocidadeVento = document.querySelector("#velocidade-do-vento");
const token = "8c686d618ec6407c855160016232311";


const fazerFetch = async () => {
    if (inputValue.value.trim() === "") {
        alert("Por favor, digite uma cidade!");
        return; 
    }

    const link = `https://api.weatherapi.com/v1/current.json?key=${token}&q=${inputValue.value}&aqi=no`;
    try {
        const fazerReq = await fetch(link);
        if (!fazerReq.ok) {
            throw new Error("Cidade não encontrada!");
        }
        const { current, location } = await fazerReq.json();
        return { current, location };
    } catch (error) {
        alert(error.message); 
    }
};


const renderizar = async () => {
    const resposta = await fazerFetch();
    if (!resposta) return; 

    const { current, location } = resposta;
    const imagem = current.condition.icon;

    
    tempo.setAttribute("src", imagem);
    cidade.innerText = `${location.name}, ${location.country}`;
    umidade.innerText = `${current.humidity} %`;
    velocidadeVento.innerText = `${current.wind_kph} km/h`;
    console.log(resposta); 
};


btn.addEventListener("click", renderizar);
