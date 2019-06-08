<template>
    <div>
        <base-header type="gradient-danger" class="pb-6 pb-8 pt-5 pt-md-6">
            
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <week-result-table title="Apuração da semana"></week-result-table>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
  import WeekResultTable from './Tables/WeekResultTable'
  export default {
    name: 'tables',
    components: {
      WeekResultTable
    }
  };
</script>
<style></style>
