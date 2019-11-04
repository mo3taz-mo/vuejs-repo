<template>
    <div id="add-contract-list">
        <form  ref="myForm" v-kendo-validator @submit.prevent="onSubmit(formData)">
            <div class=" row">
                <div class="col-sm-6">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Contract Code</label>
                        <div class="col-sm-7">
                            <input disabled 
                                    type="text" 
                                    id="Code"
                                    name="Code"
                                    v-model="formData.Code"
                                    class="k-textbox form-control form-control-sm" 
                                    placeholder="Code">
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Contract Arabic Name</label>
                        <div class="col-sm-8">
                            <input type="text" id="ArabicName" name="ArabicName" v-model="formData.ArabicName"
                                    class="k-textbox form-control form-control-sm" placeholder="Arabic Name" 
                                    required validationMessage="Field is required">
                        </div>
                    </div>
                </div>
            </div>
            <div class=" row">
                <div class="col-sm-6">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Contract English Name</label>
                        <div class="col-sm-7">
                            <input type="text" 
                                    id="EnglishName"
                                    name="EnglishName"
                                    v-model="formData.EnglishName"
                                    class="k-textbox form-control form-control-sm" 
                                    placeholder="English Name" 
                                    required
                                    validationMessage="Field is required">
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Contract Type</label>
                        <div class="col-sm-8">
                            <kendo-dropdownlist 
                                    :data-source="formData.ContractType"
                                    :data-text-field="'text'"
                                    :data-value-field="'value'"
                                    :filter="'contains'"
                                    :options-label="'Contract Type'">
                        </kendo-dropdownlist>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" row">
                <div class="col-sm-6">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Contract Category</label>
                        <div class="col-sm-8">
                            <kendo-dropdownlist 
                                    :data-source="formData.ContractCategory"
                                    :data-text-field="'text'"
                                    :data-value-field="'value'"
                                    :filter="'contains'"
                                    :options-label="'Contract Category'">
                        </kendo-dropdownlist>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Item Price List</label>
                        <div class="col-sm-7">
                            <kendo-dropdownlist 
                                    :data-source="formData.ItemPriceList"
                                    :data-text-field="'text'"
                                    :data-value-field="'value'"
                                    :filter="'contains'"
                                    :options-label="'Item Price List'">
                        </kendo-dropdownlist>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" row">
                <div class="col-sm-6">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Service Price List</label>
                        <div class="col-sm-7">
                            <kendo-dropdownlist 
                                    :data-source="formData.ServicePriceList"
                                    :data-text-field="'text'"
                                    :data-value-field="'value'"
                                    :filter="'contains'"
                                    :options-label="'Service Price List'">
                        </kendo-dropdownlist>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Start Date</label>
                        <div class="col-sm-8">
                            <kendo-datepicker :value="formData.currentDate"
                                            :format="'dd/MM/yyyy'"></kendo-datepicker>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" row">                
                <div class="col-sm-6">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">End Date</label>
                        <div class="col-sm-8">
                            <kendo-datepicker :value="formData.currentDate"
                                            :format="'dd/MM/yyyy'"></kendo-datepicker>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Contractor</label>
                        <div class="col-sm-7">
                            <kendo-dropdowntree :data-source="formData.ContractorTree"
                                                :placeholder="'Select ...'"
                                                :filter="'contains'">
                            </kendo-dropdowntree>
                        </div>
                    </div>
                </div>
            </div>

            
            <div class=" row">
                <div class="col-sm-6">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Accommodation Class</label>
                        <div class="col-sm-7">
                            <kendo-dropdownlist 
                                    :data-source="formData.AccommodationClass"
                                    :data-text-field="'text'"
                                    :data-value-field="'value'"
                                    :filter="'contains'"
                                    :options-label="'Accommodation Class'">
                        </kendo-dropdownlist>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Beneficiary Types</label>
                        <div class="col-sm-8">
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Selected Types</label>
                        <div class="col-sm-8">
                            <kendo-dropdowntree :data-source="formData.SelectedTypes"
                                                :checkboxes="true"
                                                :check-all="true"
                                                :placeholder="'Select ...'"
                                                required
                                                validationMessage="Field is required">
                            </kendo-dropdowntree>
                        </div>
                    </div>
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