# Clima - Buscador de Clima

Este é um projeto simples de um buscador de clima que utiliza a [WeatherAPI](https://www.weatherapi.com/) para buscar informações sobre o clima de qualquer cidade fornecida pelo usuário. O sistema exibe a temperatura, umidade, velocidade do vento e uma imagem do ícone representando as condições climáticas atuais.

## Funcionalidades

- Buscar o clima de uma cidade inserida pelo usuário.
- Exibir informações sobre a temperatura, umidade, velocidade do vento e ícone com as condições do tempo.
- Exibir mensagens de erro caso a cidade não seja encontrada ou o campo de busca esteja vazio.

## Tecnologias Utilizadas

- **HTML5**: Para estruturar a página web.
- **CSS3**: Para estilizar a interface e deixar a aplicação mais agradável visualmente.
- **JavaScript**: Para a lógica de busca e exibição dos dados.
- **WeatherAPI**: API externa utilizada para obter as informações meteorológicas.

## Como Usar

1. Clone o repositório ou faça o download do código.
   ```bash
   git clone https://github.com/seu-usuario/clima-buscador.git
2. Abra o arquivo index.html no seu navegador ou execute-o em um servidor local.
3. Digite o nome de uma cidade no campo de busca e clique no botão de busca.
4. As informações sobre o clima da cidade serão exibidas na tela.

## Como Funciona
1. O usuário insere o nome de uma cidade no campo de busca e clica no botão de pesquisa.
2. O JavaScript faz uma requisição para a WeatherAPI usando a cidade fornecida.
3. As informações retornadas da API são processadas e exibidas na tela, incluindo:
4. Nome da cidade e país.
5. Temperatura atual.
6. Umidade do ar.
7. Velocidade do vento.
8. Ícone representando as condições climáticas atuais.
## Exemplo de Requisição
- A API é acessada por meio do seguinte link:
const link = `https://api.weatherapi.com/v1/current.json?key=SEU_TOKEN&q=${inputValue.value}&aqi=no`;
- Substitua SEU_TOKEN pelo seu token pessoal da WeatherAPI.
## Clone o repositório:
git clone https://github.com/seu-usuario/clima-buscador.git

## Contribuições
- Se você deseja contribuir para o projeto, sinta-se à vontade para fazer um fork e enviar um pull request com melhorias ou correções.

- Faça um fork deste repositório.
- Crie uma branch para sua modificação (git checkout -b minha-modificacao).
- Faça as modificações desejadas.
- Envie um pull request explicando as alterações realizadas.
  
## Licença
Este projeto está licenciado sob a Licença MIT
