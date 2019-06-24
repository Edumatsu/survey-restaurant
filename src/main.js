import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.config.productionTip = false
Vue.config.apiURL = 'https://dd846ddd.ngrok.io/api/';
Vue.config.initialHour = 10;
Vue.config.endHour = 12;

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: localStorage
})

const store = new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    user: null
  },
  mutations: {
    login (state, user) {
      state.user = user;
    },
    logout (state) {
      state.user = null;
    }
  }
});

Vue.use(ArgonDashboard)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
