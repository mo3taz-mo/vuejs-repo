<template>
    <div id="contract-category">
        <!-- <kendo-datasource ref="contractCategoryDataSource"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Products'"
                      :transport-read-data-type="'jsonp'"
                      :transport-update-url="'https://demos.telerik.com/kendo-ui/service/Products/Update'"
                      :transport-update-data-type="'jsonp'"
                      :transport-destroy-url="'https://demos.telerik.com/kendo-ui/service/Products/Destroy'"
                      :transport-destroy-data-type="'jsonp'"
                      :transport-create-url="'https://demos.telerik.com/kendo-ui/service/Products/Create'"
                      :transport-create-data-type="'jsonp'"
                      :transport-parameter-map="parameterMap"
                      :schema-model-id="'ContractID'"
                      :schema-model-fields="schemaModelFields"
                      :batch='true'
                      :page-size='20'>
        </kendo-datasource> -->
        <kendo-grid :data-source="contractCategoryDataSource"
                    :pageable="true"
                    :editable="true"
                    :toolbar="['create', 'save', 'cancel']">
            <kendo-grid-column :field="'Code'"
                                :title="'Code'"
                                :width="100">
            </kendo-grid-column>
            <kendo-grid-column :field="'EnName'"
                                :title="'English Name'"
                                :width="200">
            </kendo-grid-column>
            <kendo-grid-column :field="'ArName'"
                                :title="'Arabic Name'"
                                :width="200">
            </kendo-grid-column>
            <kendo-grid-column :field="'Description'"
                                :title="'Description'"
                                :width="250">
            </kendo-grid-column>
            <kendo-grid-column :field="'ActivationStatus'" :width="120"></kendo-grid-column>
            <kendo-grid-column :command="['destroy']"
                                :title="'&nbsp;'"
                                :width="100">
            </kendo-grid-column>
        </kendo-grid>
    </div>
</template>

<script src="./ContractCategory.js"></script>