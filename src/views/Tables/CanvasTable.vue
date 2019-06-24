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
          <th>Resultado</th>
        </template>

        <template slot-scope="{row}">
          <th class="col-xl-4 col-lg-4" style="width: 10%">
            <div class="media align-items-center">
              <div class="media-body">
                <span class="name mb-0 text-sm">{{row.RESTAURANT.RES_NAME}}</span>
              </div>
            </div>

            <small class="d-inline-block mb-0 text-sm text-muted">{{row.RESTAURANT.RES_MENU}}</small>
          </th>
          <td class="budget">
            {{row.RESTAURANT.RES_PRICE}}
          </td>
          <td class="budget">
            {{row.RESTAURANT.RES_OPENING_TIME}}-{{row.RESTAURANT.RES_CLOSING_TIME}}
          </td>
          <td>
            <div class="d-flex align-items-center">
              <div>
                <base-progress type="success"
                               :show-percentage="true"
                               class="pt-0"
                               :value="(row.VOTING.VOTES/row.VOTING.TOTAL*100) | percentage"/>
              </div>
            </div>
          </td>

        </template>

      </base-table>
    </div>
  </div>
</template>
<script>

  import Vue from 'vue'
  import axios from 'axios'

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
        tableData: null
      }
    },
    mounted () {
      axios
        .get( Vue.config.apiURL + 'survey/day/partial')
        .then((response) => {
          this.tableData = response.data.Object;
        });
    },
    filters: {
      percentage(value) {
        value = value || 0;
        return (Math.round(value * 100) / 100);
      }
    }
  }
</script>
<style>
</style>
