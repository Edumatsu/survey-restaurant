<template>
    <div>
        <base-header type="gradient-danger" class="pb-6 pb-8 pt-5 pt-md-6">
            <!-- day winner -->
            <div class="row">
                <div class="col-xl-12 col-lg-12">
                    <stats-card title="Vencedor do dia"
                                type="gradient-info"
                                sub-title="Restaurante Club Sul Paulista"
                                icon="ni ni-like-2"
                                class="mb-4 mb-xl-0 bg-default text-white">
                    </stats-card>
                </div>
            </div>
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <canvas-table title="Apuração"></canvas-table>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
  import CanvasTable from './Tables/CanvasTable'
  import axios from 'axios'
  import Vue from 'vue'

  export default {
    name: 'tables',
    components: {
      CanvasTable
    },
    mounted() {
      this.showWinner = true;//(new Date().getHours() >= Vue.config.initialHour && new Date().getHours() < Vue.config.endHour);

      axios
        .get( Vue.config.apiURL + 'survey/day/result')
        .then((response) => {
          
          if (!response.data.Object) {
            axios
              .post( Vue.config.apiURL + 'survey/finish')
              .then((response) => {
                console.log('response finish', response)
            });
          }
      });
    }
  };
</script>
<style></style>
