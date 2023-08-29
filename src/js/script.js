
// Definindo uma constante "key" para armazenar a chave de API fornecida pelo OpenWeatherMap
const key = "f687600bf68d531856e715dfa9d35fa7";

// Definindo uma função chamada "dataScreen" que recebe dados climáticos como parâmetro
function dataScreen(dados) {
    // Atualizando o conteúdo do elemento HTML com a classe "city" para mostrar o nome da cidade
    document.querySelector('.city').innerHTML = `Tempo em <strong>${dados.name}</strong>`;
    
    // Atualizando o conteúdo do elemento HTML com a classe "temp" para mostrar a temperatura
    document.querySelector('.temp').innerHTML = `Temperatura: <strong>${Math.floor(dados.main.temp)}°C</strong>`;
    
    // Atualizando o conteúdo do elemento HTML com a classe "text-previsao" para mostrar a descrição do clima
    document.querySelector('.text-previsao').innerHTML = `<strong>${dados.weather[0].description}</strong>`;
    
    // Atualizando o conteúdo do elemento HTML com a classe "umidade" para mostrar a umidade
    document.querySelector('.umidade').innerHTML = `Umidade: <strong>${dados.main.humidity}%</strong>`;
    
    // Atualizando o atributo "src" do elemento de imagem com a classe "img-previsao" para mostrar o ícone do clima
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

// Definindo uma função assíncrona chamada "buscarCity" que recebe o nome da cidade como parâmetro
async function buscarCity(city) {
    // Realizando uma solicitação à API do OpenWeatherMap para obter dados climáticos da cidade
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());
    
    // Chamando a função "dataScreen" e passando os dados climáticos como argumento
    dataScreen(dados);
}

// Definindo uma função chamada "btn"
function btn() {
    // Obtendo o valor inserido no campo de entrada com a classe "input-city"
    const city = document.querySelector('.input-city').value;

    // Chamando a função "buscarCity" e passando o nome da cidade como argumento
    buscarCity(city);

    // Define o valor do input como uma string vazia para limpá-lo
    document.querySelector('.input-city').value = ""
}
