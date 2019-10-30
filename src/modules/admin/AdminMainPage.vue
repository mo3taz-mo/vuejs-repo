<template>
  <div id="admin-id">
    <h1>sdf<span>rtgretg</span></h1>
    <kendo-grid :data-source="localDataSource"
                :selectable="'multiple cell'"
                :sortable="true"
                :filterable="true"
                :groupable="true"
                :pageable="true">
    </kendo-grid>
  </div>
</template>

<script src="./AdminMainPage.js"></script>

<style lang="scss" scoped>@import './theme/Admin.scss';</style>
