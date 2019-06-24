<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="RestSurvey"
      title="RestSurvey"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Votar',
            icon: 'ni ni-check-bold text-warning',
            path: '/vote'
          }"
        />

        <sidebar-item 
          :link="{
            name: 'Apuração do dia', 
            icon: 'ni ni-chart-pie-35 text-warning', 
            path: '/today-result'
          }"/>
        
        <sidebar-item 
          :link="{
            name: 'Apuração semanal', 
            icon: 'ni ni-chart-bar-32 text-warning', 
            path: '/week-result'
          }"/>

      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import router from '../router';
  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    },
    mounted() {
      if (!this.$store.state.user) {
        router.push("/");
      }
    }
  };
</script>
<style lang="scss">
</style>
