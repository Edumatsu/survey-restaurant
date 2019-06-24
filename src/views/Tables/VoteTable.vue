<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}}
          </h3>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="tableData">
        <template slot="columns">
          <th>Restaurante</th>
          <th>Preço KG</th>
          <th>Horário</th>
          <th>Votar</th>
        </template>

        <template slot-scope="{row}">
          <th class="col-xl-4 col-lg-4" style="width: 10%">
            <div class="media align-items-center">
              <div class="media-body">
                <span class="name mb-0 text-sm">{{row.RES_NAME}}</span>
              </div>
            </div>

            <small class="d-inline-block mb-0 text-sm text-muted">{{row.RES_MENU}}</small>
          </th>
          <td class="budget">
            {{row.RES_PRICE}}
          </td>
          <td class="budget">
            {{row.RES_OPENING_TIME}}-{{row.RES_CLOSING_TIME}}
          </td>
          <td>
            <div class="d-flex align-items-center">
              <base-button type="default" :disabled="userRestaurantVoted == row.RES_IDENTI" class="col-12 my-4" @click="vote(row.RES_IDENTI)">
                <span v-if="userRestaurantVoted != row.RES_IDENTI">Votar neste</span>
                <span v-if="userRestaurantVoted == row.RES_IDENTI">Votado</span>
              </base-button>
            </div>
          </td>

        </template>

      </base-table>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import Vue from 'vue'

  export default {
    name: 'projects-table',
    props: {
      type: {
        type: String
      },
      title: String
    },
    data() {
      return {
        votedSuccess: false,
        tableData: this.tableData,
        userRestaurantVoted: null
      }
    },
    mounted () {
      axios
        .get( Vue.config.apiURL + 'restaurant')
        .then((response) => {
          this.tableData = response.data.Object;

          // pega o voto do estudante
          axios
            .get( Vue.config.apiURL + 'survey/' + this.$store.state.user.STD_IDENTI)
            .then((response) => {
              if (response.data && response.data.Object) {
                this.userRestaurantVoted = response.data.Object.SRV_RESTAURANT_ID;
              }
          });

        });
    },
    methods: {
      vote(RES_IDENTI) {
        if (this.userRestaurantVoted) {
          axios
            .put( Vue.config.apiURL + 'survey', {
              SRV_STUDENT_ID: this.$store.state.user.STD_IDENTI,
              SRV_RESTAURANT_ID: RES_IDENTI
            })
            .then((response) => {
              if (! response.data || ! response.data.Object) {
                this.$notify({
                  group: 'foo',
                  type: 'warning',
                  title: 'Ocorreu um erro ao computar seu voto!'
                });

                return;
              }

              this.userRestaurantVoted = RES_IDENTI;
              
              this.$notify({
                group: 'foo',
                type: 'success',
                title: 'Seu voto foi computado com sucesso!'
              });
          });
        } else {
          axios
            .post( Vue.config.apiURL + 'survey', {
              SRV_STUDENT_ID: this.$store.state.user.STD_IDENTI,
              SRV_RESTAURANT_ID: RES_IDENTI
            })
            .then((response) => {
              if (! response.data || ! response.data.Object) {
                this.$notify({
                  group: 'foo',
                  type: 'warning',
                  title: 'Ocorreu um erro ao computar seu voto!'
                });

                return;
              }

              this.userRestaurantVoted = RES_IDENTI;
              
              this.$notify({
                group: 'foo',
                type: 'success',
                title: 'Seu voto foi computado com sucesso!'
              });
          });
        }
      }
    }
  }
</script>
<style>
</style>
