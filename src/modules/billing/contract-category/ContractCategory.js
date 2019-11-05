export default {
    name: "contract-category",
    data() {
        return {
            // schemaModelFields: {
            //     ContractID: { editable: false, nullable: true },
            //     Code: { type: 'number', validation: { required: true, min: 1 } },
            //     EnName: { validation: { required: true } },
            //     ArName: { validation: { required: true } },
            //     ActivationStatus: { type: 'boolean' },
            //     Description: { validation: { required: true } }
            // },       
            contractCategoryDataSource: [
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
        // create: function() {
        //     alert('saraaa')
        // }
    },
    computed: {
        getEnNames() {
            return this.contractCategoryDataSource.map(dataSet => dataSet[0].EnName)
        }
    }
}