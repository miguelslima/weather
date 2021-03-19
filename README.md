<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/miguelslima/weather?color=%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

</p>

# Índice

- [Sobre](#sobre)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)

<a id="sobre"></a>

## :bookmark: Sobre

O <strong>App Tempo</strong> é um aplicativo desenvolvido para mostrar previsão do tempo. O projeto utiliza a API [HG Brasil](https://hgbrasil.com/) para mostrar os dados. A API fornece dados para previsão dos próximos 10 dias.<br><br>
Na página inicial será necessário informar sua localização para que possa fornecer os dados da sua posição, na página inicial mostrará a previsão atual e a previsão para os próximos 5 dias.
<br><br>
Nesse projeto temos a possibilidade de pesquisar uma cidade, mostrando sua previsão de tempo atual. Há possibilidade em colocar algumas cidades como favoritas. No campo de cidades favoritdas, há possibilidade em verificar a previsão para os próximos 10 dias ou excluir das cidade favoritas. O armazenamento foi feito utilizando asyncstorage.

<h3>Imagens</h3>

<br>

<h3 align="center">
    <img alt="Logo" title="#logo" width="400px" src="./assets/Screenshot1">
    <br><br>
    <img alt="Logo" title="#logo" width="400px" src="./assets/Screenshot2">
    <br><br>
    <img alt="Logo" title="#logo" width="400px" src="./assets/Screenshot3">
    <br><br>
    <img alt="Logo" title="#logo" width="400px" src="./assets/Screenshot4">
    <br><br>
</h3>

<a id="tecnologias-utilizadas"></a>

## :rocket: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [React](https://reactjs.org/) <br>
  Foram utilizado aqui:

  - @react-native-async-storage/async-storage
  - @react-navigation/drawer
  - @react-navigation/native
  - axios
  - expo
  - expo-linear-gradient
  - expo-location
  - expo-status-bar
  - react
  - react-native
  - react-native-gesture-handler
  - react-native-safe-area-context
  - react-native-screens
  - react-native
  - react-native-web
  - styled-components

<a id="como-usar"></a>

## :fire: Como usar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado na máquina
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.

1. Executando a Aplicação:

```sh
  # Clone o repositório
  $ git@github.com:miguelslima/weather.git

  # Instale as dependências
  $ npm install ou yarn

  # Inicie a aplicação mobile
  $ cd weather
  $ npm start ou yarn start
```

## :memo: License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
