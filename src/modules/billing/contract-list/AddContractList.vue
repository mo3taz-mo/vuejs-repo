<template>
    <div id="add-contract-list">
        <form  ref="myForm" v-kendo-validator @submit.prevent="onSubmit(formData)">
            <div class="row">
                <div class="form-group col">
                    <kendo-dropdownlist :data-source="formData.dataSourceArray"
                        :data-text-field="'text'"
                        :data-value-field="'value'"
                        :filter="'contains'"
                        :options-label="'Contract Category'">
                    </kendo-dropdownlist>
                </div>
                <div class="form-group col">
                    <input type="text" 
                            id="Code"
                            name="Code"
                            v-model="formData.Code"
                            class="k-textbox form-control form-control-sm" 
                            placeholder="Code" 
                            required
                            validationMessage="Field is required">
                </div>
            </div>
            <div class="row">
                <div class="form-group col">
                    <input type="text" 
                            id="EnglishName"
                            name="EnglishName"
                            v-model="formData.EnglishName"
                            class="k-textbox form-control form-control-sm" 
                            placeholder="English Name" 
                            required
                            validationMessage="Field is required">
                </div>
                <div class="form-group col">
                    <input type="text" 
                            id="ArabicName"
                            name="ArabicName"
                            v-model="formData.ArabicName"
                            class="k-textbox form-control form-control-sm" 
                            placeholder="Arabic Name" 
                            required
                            validationMessage="Field is required">
                </div>
            </div>
            <div class="row">
                <div class="form-group col">
                    <input type="text" 
                            id="Description"
                            name="Description"
                            v-model="formData.Description"
                            class="k-textbox form-control form-control-sm" 
                            placeholder="Description" >
                </div>
            </div>
            <div class="row">
                <div class="form-group col">
                    <button class="btn btn-outline-primary btn-sm" type="submit">Add</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script src="./AddContractList.js"></script>