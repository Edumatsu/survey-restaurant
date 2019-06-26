# RestSurvey 
## Enquete para os estudantes votarem nos restaurantes que querem almoçar

**Requisitos**
- Node 10.16.0 instalado

**Para subir o client (front)**
- Acessar a pasta raiz.
- Executar o comando
`npm install;`
- Executar o comando
`npm run serve;`

**Para configurar o front**
Acessar o arquivo `src/main.js` e alterar as linhas abaixo: 

```
Vue.config.apiURL = ''; // colocar a URL da API
Vue.config.initialHour = 10; // colocar a hora inicial de votação
Vue.config.endHour = 12; // colocar a hora final de votação
```
