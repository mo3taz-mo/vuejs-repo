<template>
  <div id="dashboard-id">
    <kendo-calendar :value="new Date()"></kendo-calendar>
  </div>
</template>

<script>
  export default {
    name: 'dashboard-id',
    data () {
      return {
        msg: 'Hello Kendo UI for Vue.js'
      }
    }
  }
</script>

<style scoped></style>