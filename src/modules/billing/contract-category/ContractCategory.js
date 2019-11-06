import { EventBus } from '@/services/event-bus.js';

export default {
    name: "contract-category",
    data() {
        return {
            schemaModelFields: {
                ContractID: { editable: false, nullable: true },
                Code: { type: 'number', validation: { min: 1 } },
                EnName: { validation: { required: true } },
                ArName: { validation: { required: true } },
                ActivationStatus: { type: 'boolean' },
                Description: {  }
            },    
            contractCategoryList: [
                {
                    "ContractID": 1,
                    "Code": 99,
                    "EnName": "Sara",
                    "ArName": "سارة",
                    "Description": "Bla bla bla bla",
                    "ActivationStatus": true
                },
                {
                    "ContractID": 2,
                    "Code": 45,
                    "EnName": "Sara",
                    "ArName": "سارة",
                    "Description": "Bla bla bla bla",
                    "ActivationStatus": false
                }
            ],
            contractCategoryNames: []
        }
    },
    methods: {
        contractCategoryDataSource: function(e) {
            e.success(this.contractCategoryList)
        },
        deleteHandler: function(e) {
            e.preventDefault();
            $(e.currentTarget).closest("tr").remove();
            // slice this index from _data
        },
        createdDataSource: function(e) {
            let ss = this.$refs.dataSourceRef.kendoWidget()
            e.success(ss._data[0])
            this.contractCategoryList = ss._data;
        },
        updatedDataSource: function(e) {
            let ss = this.$refs.dataSourceRef.kendoWidget()
            e.success(ss._data[0])
            this.contractCategoryList = ss._data;
        },
        onDataBinding: function() {
            this.getEnNames
        }
    },
    computed: {
        getEnNames() { debugger
            this.contractCategoryNames = this.contractCategoryList.map(dataItem => dataItem.EnName)
            EventBus.$emit('setEnNamesInDdl', this.contractCategoryNames);
            console.log('computed', this.contractCategoryNames)
            localStorage.setItem('ddlData', this.contractCategoryNames)
        }
    },
    mounted: function () {
        
    }
}