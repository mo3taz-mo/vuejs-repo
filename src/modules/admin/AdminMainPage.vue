<template>
  <div id="admin-id">
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

<style scoped></style>