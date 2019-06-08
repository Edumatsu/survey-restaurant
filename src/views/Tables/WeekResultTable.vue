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
          <th>Dia</th>
          <th>Restaurante</th>
          <th>Resultado</th>
        </template>

        <template slot-scope="{row}">
          
          <td class="budget">
            {{row.SVY_DAY}}
          </td>
          <th class="col-xl-4 col-lg-4">
            <div class="media align-items-center">
              <div class="media-body">
                <span class="name mb-0 text-sm">{{row.RES_NAME}}</span>
              </div>
            </div>
          </th>
          <td>
            <div class="d-flex align-items-center">
              <span class="completion mr-2">{{row.PERCENTAGE}}%</span>
              <div>
                <base-progress type="success"
                               :show-percentage="true"
                               class="pt-0"
                               :value="row.PERCENTAGE"/>
              </div>
            </div>
          </td>

        </template>

      </base-table>
    </div>
  </div>
</template>
<script>
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
        tableData: [
          {
            SVY_DAY: "Segunda-feira",
            RES_NAME: 'Club Sub Paulista',
            PERCENTAGE: 60
          },
          {
            SVY_DAY: "Terça-feira",
            RES_NAME: 'Madero',
            PERCENTAGE: 48
          },
          {
            SVY_DAY: "Quarta-feira",
            RES_NAME: 'Pimenta rosa',
            PERCENTAGE: 45
          }
        ]
      }
    }
  }
</script>
<style>
</style>
