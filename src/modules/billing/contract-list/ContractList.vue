<template>
    <div id="contract-list">
        <div class="mt-3 alert alert-secondary"></div>
        <kendo-grid :data-source="formData"
                    :pageable="true"
                    :editable="true">
        <div class="k-header k-grid-toolbar">
            <router-link :to="'/add-contract-list'" class="k-button k-button-icontext k-grid-add">
                <span class="k-icon k-i-plus"></span>Add new record
            </router-link>
        </div>
            <kendo-grid-column :field="'Code'"
                                :title="'Code'"
                                :width="100">
            </kendo-grid-column>
            <kendo-grid-column :field="'EnglishName'"
                                :title="'English Name'"
                                :width="200">
            </kendo-grid-column>
            <kendo-grid-column :field="'ArabicName'"
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

<script src="./ContractList.js"></script>