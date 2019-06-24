<template>
    <div>
        <base-header type="gradient-danger" class="pb-6 pb-8 pt-5 pt-md-6">
            
        </base-header>

        <div class="container-fluid mt--7" v-if="voteEnabled">
            <div class="row">
                <div class="col">
                    <vote-table title="Vote no restaurante de hoje"></vote-table>
                </div>
            </div>
        </div>

        <div class="container-fluid mt--7 pt-md-8 pb-md-8" v-if="!voteEnabled">
            <div class="row">
                <div class="col">
                    <span>Fora do horário de votação</span>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
  import VoteTable from './Tables/VoteTable'
  import Vue from 'vue';

  export default {
    data() {
        return {
            voteEnabled: false
        }
    },
    name: 'tables',
    components: {
      VoteTable
    },
    mounted() {
      this.voteEnabled = (new Date().getHours() >= Vue.config.initialHour && new Date().getHours() < Vue.config.endHour);
    }
  };
</script>
<style></style>
