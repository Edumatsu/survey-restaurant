# RestSurvey 
## Enquete para os estudantes votarem nos restaurantes que querem almoçar

**Importante**
- Este projeto depende da API do repositório https://github.com/MagnumCortez/survey-restaurant-api

**Requisitos**
- Node 10.16.0 instalado
- API citada acima

**Para subir o client (front)**
Acessar o arquivo `src/main.js` e alterar as linhas abaixo: 

```
Vue.config.apiURL = ''; // colocar a URL da API
Vue.config.initialHour = 10; // colocar a hora inicial de votação
Vue.config.endHour = 12; // colocar a hora final de votação
```

- Acessar a pasta raiz.
- Executar o comando
`npm install;`
- Executar o comando
`npm run serve;`
