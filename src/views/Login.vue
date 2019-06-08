<template>
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-body px-lg-5 py-lg-5">
                        <div class="text-center text-muted mb-4">
                            <small>Entre com seu RA e sua senha</small>
                        </div>
                        <form role="form">
                            <base-input class="input-group-alternative mb-3"
                                        placeholder="RA"
                                        addon-left-icon="ni ni-circle-08"
                                        v-model="model.STD_RA">
                            </base-input>

                            <base-input class="input-group-alternative"
                                        placeholder="Senha"
                                        type="password"
                                        addon-left-icon="ni ni-lock-circle-open"
                                        v-model="model.STD_PASSWORD">
                            </base-input>

                            <base-checkbox class="custom-control-alternative">
                                <span class="text-muted">Manter conectado</span>
                            </base-checkbox>
                            <div class="text-center">
                                <base-button type="primary" class="my-4" @click="login()">Entrar</base-button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
  import router from '../router'
  export default {
    name: 'login',
    data() {
      return {
        model: {
          STD_RA: '',
          STD_PASSWORD: ''
        }
      }
    },
    methods: {
        login() {
            router.push("today-result")
        }
    }
  }
</script>
<style>
</style>
