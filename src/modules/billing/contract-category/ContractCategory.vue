<template>
    <div id="contract-category">
        <kendo-datasource ref="dataSourceRef"
                        :transport-read="contractCategoryDataSource"
                        :schema-model-id="'ContractID'"
                        :schema-model-fields="schemaModelFields"
                        :batch='true'
                        :page-size='20'>
        </kendo-datasource>

        <kendo-grid :data-source-ref="'dataSourceRef'"
                    :editable="'inline'"
                    :pageable="true"
                    :no-records="true"
                    :sortable="true"
                    :toolbar="['create']">
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
            <kendo-grid-column :command="['edit', { text: 'Delete', click: deleteHandler }]"
                                :title="'&nbsp;'"
                                :width="180">
            </kendo-grid-column>
        </kendo-grid>
    </div>
</template>

<script src="./ContractCategory.js"></script>
