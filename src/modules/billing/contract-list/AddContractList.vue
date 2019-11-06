<template>
    <div id="add-contract-list">
        <form  ref="myForm" v-kendo-validator @submit.prevent="onSubmit(formData)">
            <div class=" row">
                <div class="col-sm-6">
                    <div class="form-group row mt0 mb0">
                        <label class="col-sm-4 col-form-label">Contract Code</label>
                        <div class="col-sm-7">
                            <input  v-allow-decimal="2" 
                                    type="text" 
                                    id="Code"
                                    name="Code"
                                    v-model="formData.Code"
                                    class="k-textbox form-control form-control-sm" 
                                    placeholder="Code">
                        </div>
                    </div>
                </div>                
            </div>
            <div class=" row">
                <div class="col-sm-6">
                    <div class="form-group row">
                        <!--english name-->
                        <label class="col-sm-4 col-form-label">Contract English Name<span>*</span></label>
                        <div class="col-sm-7">
                            <input type="text" 
                                    id="EnglishName"
                                    name="EnglishName"
                                    v-model="formData.EnglishName"
                                    class="k-textbox form-control form-control-sm" 
                                    placeholder="English Name" 
                                    required
                                    v-only-en
                                    validationMessage="Field is required">
                        </div>
                        <!--contract category-->    
                        <label class="col-sm-4 col-form-label">Contract Category</label>
                        <div class="col-sm-7">
                            <kendo-dropdownlist 
                                    :data-source="formData.ContractCategory"
                                    :data-text-field="'text'"
                                    :data-value-field="'value'"
                                    :filter="'contains'"
                                    :index="-1"
                                    :placeholder="'Select Contract Category'"
                                    :options-label="'Contract Category'">
                        </kendo-dropdownlist>
                        </div>
                        <!--service price list-->
                        <label class="col-sm-4 col-form-label">Service Price List</label>
                        <div class="col-sm-7">
                            <kendo-dropdownlist 
                                    :data-source="formData.ServicePriceList"
                                    :data-text-field="'text'"
                                    :data-value-field="'value'"
                                    :filter="'contains'"
                                    :index="-1"
                                    :placeholder="'Select Service Price'">
                        </kendo-dropdownlist>
                        </div>
                        <!--start date-->
                        <label class="col-sm-4 col-form-label">Start Date</label>
                        <div class="col-sm-7">
                            <kendo-datepicker :format="'dd/MM/yyyy'"
                                              :placeholder="'Select Date'"></kendo-datepicker>
                        </div>
                        <!--contractor-->
                        <label class="col-sm-4 col-form-label">Contractor</label>
                        <div class="col-sm-7">
                            <kendo-dropdowntree :data-source="formData.ContractorTree"
                                                :placeholder="'Select ...'"
                                                :filter="'contains'">
                            </kendo-dropdowntree>
                        </div>
                        <!--Beneficiary Types-->
                        <label class="col-sm-4 col-form-label">Beneficiary Types</label>
                        <div class="col-sm-7 pt7">
                            <input type="radio" name="SelectedTypes" id="AllTypes" 
                                    class="k-radio" 
                                     v-model="formData.types" 
                                     value="All">
                            <label for="AllTypes" class="k-radio-label mr10">
                                All Types
                            </label>
                            <input type="radio" name="SelectedTypes" 
                                    id="SelectedTypes" 
                                    class="k-radio" 
                                    v-model="formData.types" 
                                    value="Selected">
                            <label for="SelectedTypes" class="k-radio-label mr10">
                                Selected Types
                            </label>
                        </div>                                            
                        <div class="row" v-if="formData.types=== 'Selected'">
                            <label class="col-sm-4 col-form-label">Selected Types</label>
                            <div class="col-sm-7">
                                <kendo-dropdowntree :data-source="formData.SelectedTypes"
                                                    :checkboxes="true"
                                                    :check-all="true"
                                                    :auto-close="false"
                                                    :placeholder="'Select ...'">
                                </kendo-dropdowntree>
                            </div>
                        </div>
                        <!--file upload-->
                        <label class="col-sm-4 col-form-label">Attachment(s)</label>
                        <div class="col-sm-7">
                            <kendo-upload ref="upload"
                                        name="files"
                                        :async-save-url="'custom-save-url'"
                                        :async-remove-url="'custom-remove-url'">
                            </kendo-upload>
                        </div>
                    </div>

                </div>
                <div class="col-sm-6">
                    <div class="form-group row">
                        <!--arabic name-->
                        <label class="col-sm-4 col-form-label">Contract Arabic Name<span>*</span></label>
                        <div class="col-sm-7">
                            <input type="text" id="ArabicName" name="ArabicName" v-model="formData.ArabicName"
                                    class="k-textbox form-control form-control-sm" placeholder="Arabic Name" 
                                    required validationMessage="Field is required" v-only-ar>
                        </div>
                        <!--contract type-->
                        <label class="col-sm-4 col-form-label">Contract Type</label>
                        <div class="col-sm-7">
                            <kendo-dropdownlist 
                                    :data-source="formData.ContractType"
                                    :data-text-field="'text'"
                                    :data-value-field="'value'"
                                    :filter="'contains'"
                                    :placeholder="'Select Contract Type'"
                                    :options-label="'Contract Type'">
                        </kendo-dropdownlist>
                        </div>
                        <!--item price list-->
                        <label class="col-sm-4 col-form-label">Item Price List</label>
                        <div class="col-sm-7">
                            <kendo-dropdownlist 
                                    :data-source="formData.ItemPriceList"
                                    :data-text-field="'text'"
                                    :data-value-field="'value'"
                                    :filter="'contains'"
                                    :index="-1"
                                    :placeholder="'Select Item Price'"
                                    :options-label="'Item Price List'">
                        </kendo-dropdownlist>
                        </div>
                        <!--end date-->
                        <label class="col-sm-4 col-form-label">End Date</label>
                        <div class="col-sm-7">
                            <kendo-datepicker :format="'dd/MM/yyyy'"
                                              :placeholder="'Select Date'"></kendo-datepicker>
                        </div>
                        <!--Accommodation Class-->
                        <label class="col-sm-4 col-form-label">Accommodation Class</label>
                        <div class="col-sm-7">
                            <kendo-dropdownlist 
                                    :data-source="formData.AccommodationClass"
                                    :data-text-field="'text'"
                                    :data-value-field="'value'"
                                    :filter="'contains'"
                                    :index="-1"
                                    :placeholder="'Select Accommodation Class'"
                                    :options-label="'Accommodation Class'">
                        </kendo-dropdownlist>
                        </div>
                        <!--Contractor Clients-->
                        <label class="col-sm-4 col-form-label">Contractor Clients</label>
                        <div class="col-sm-7 pt7">
                            <input type="radio" name="SelectedClients" id="AllClients" 
                                    class="k-radio" 
                                     v-model="formData.Clients" 
                                     value="AllClients">
                            <label for="AllClients" class="k-radio-label mr10">
                                All Clients
                            </label>
                            <input type="radio" name="SelectedClients" 
                                    id="SelectedClients" 
                                    class="k-radio" 
                                    v-model="formData.Clients" 
                                    value="SelectedClients">
                            <label for="SelectedClients" class="k-radio-label mr10">
                                Selected Clients
                            </label>
                        </div>                                            
                        <div class="row" v-if="formData.Clients=== 'SelectedClients'">
                            <label class="col-sm-4 col-form-label">Selected Clients</label>
                            <div class="col-sm-7">
                                <kendo-dropdowntree :data-source="formData.SelectedClients"
                                                    :checkboxes="true"
                                                    :check-all="true"
                                                    :auto-close="false"
                                                    :placeholder="'Select ...'">
                                </kendo-dropdowntree>
                            </div>
                        </div>
                        <!--Description-->
                        <label class="col-sm-4 col-form-label">Description</label>
                        <div class="col-sm-7">
                            <textarea rows="3" cols="4" v-model="formData.Description" 
                                      type="text" 
                                      class="k-input k-textbox "
                                      placeholder="Description..."></textarea>
                        </div> 
                    </div>
                </div>
            </div> 
            <div class="row">
                <div class="form-group col-sm-11 p0 mt15">
                    <button class="btn btn-primary pull-right btn-sm" type="submit">Add</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script src="./AddContractList.js"></script>
