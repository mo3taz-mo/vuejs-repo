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
                    "ContractID": 2,
                    "Code": 99,
                    "EnName": "Sara",
                    "ArName": "سارة",
                    "Description": "Bla bla bla bla",
                    "ActivationStatus": true
                },
                {
                    "ContractID": 1,
                    "Code": 45,
                    "EnName": "Sara",
                    "ArName": "سارة",
                    "Description": "Bla bla bla bla",
                    "ActivationStatus": false
                }
            ]
           
        }
    },
    methods: {
        contractCategoryDataSource: function(e) {
            e.success(this.contractCategoryList)
        },
        deleteHandler: function(e) {
            e.preventDefault();
            $(e.currentTarget).closest("tr").remove();

        }
    },
    computed: {
        getEnNames() {
            return this.contractCategoryDataSource.map(dataSet => dataSet[0].EnName)
        }
    }
}