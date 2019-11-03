<template>
    <div id="contract-category">
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