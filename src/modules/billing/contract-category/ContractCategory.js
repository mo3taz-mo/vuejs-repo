import kendo from '@progress/kendo-ui'

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
            contractCategoryDataSource: []
           
        }
    },
    methods: {
        parameterMap: function(options, operation) {
            if (operation !== 'read' && options.models) {
                return { models: kendo.stringify(options.models) }
            }
        }
        // create: function() {
        //     alert('saraaa')
        // }
    },
    computed: {
        getEnNames() {
            return this.contractCategoryDataSource.map(dataSet => dataSet[0].EnName)
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