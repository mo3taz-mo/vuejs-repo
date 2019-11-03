import kendo from '@progress/kendo-ui'
// import * as jsonObj from'./contractCategoryData.json'

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
            schemaModelFields: {
                ProductID: { editable: false, nullable: true },
                ProductName: { validation: { required: true } },
                UnitPrice: { type: 'number', validation: { required: true, min: 1 } },
                Discontinued: { type: 'boolean' },
                UnitsInStock: { type: 'number', validation: { min: 0, required: true } }
            },       
            // contractCategoryDataSource: jsonObj
           
        }
    },
    methods: {
        parameterMap: function(options, operation) {
            if (operation !== 'read' && options.models) {
                return { models: kendo.stringify(options.models) }
            }
        }
    },
    computed: {
        getEnNames() {
            let englishName = this.contractCategoryDataSource.map(dataSet => dataSet[0].EnName)
            this.$root.$emit('getEnglishName', englishName)
        },
        contractCategoryDataSource() {
            
            return {
                transport: {
                    read: function(options) {
                      options.success([
                        {
                            "ContractID": 1,
                            "Code": 45,
                            "EnName": "Sara",
                            "ArName": "سارة",
                            "Description": "Bla bla bla bla",
                            "ActivationStatus": false
                        }
                    ]);
                    }
                }
            }
        }
    },
    mounted() {
        var self = this
        // eslint-disable-next-line no-undef
        $.getJSON("contractCategoryData.json", function(json_data) {
            self.contractCategoryDataSource = json_data
        })
    }
}