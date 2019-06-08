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
            RES_NAME: 'Club Sub Paulista',
            RES_MENU: 'Feijoada, Couve refogada, arroz, farofa, banana frita',
            PERCENTAGE: 60,
            RES_PRICE: 'R$ 14,90',
            RES_OPENING_TIME: '11:30',
            RES_CLOSING_TIME: '15:30'
          },
          {
            RES_NAME: 'Pimenta Rosa',
            RES_MENU: 'Frango, Frango, Frango, farofa, Frango',
            PERCENTAGE: 15,
            RES_PRICE: 'R$ 12,90',
            RES_OPENING_TIME: '11:30',
            RES_CLOSING_TIME: '15:30'
          },
          {
            RES_NAME: 'Madero',
            RES_MENU: 'Feijoada Gourmet, Couve refogada Gourmet, banana frita Gourmet',
            PERCENTAGE: 10,
            RES_PRICE: 'R$ 59,90',
            RES_OPENING_TIME: '11:30',
            RES_CLOSING_TIME: '15:30'
          },
          {
            RES_NAME: 'Le Gusta',
            RES_MENU: 'Muita Feijoada, Couve refogada, Muito arroz',
            PERCENTAGE: 15,
            RES_PRICE: 'R$ 17,90',
            RES_OPENING_TIME: '11:30',
            RES_CLOSING_TIME: '15:30'
          }
        ]
      }
    }
  }
</script>
<style>
</style>
