import { EventBus } from '@/services/event-bus.js';
export default {
    name: "add-contract-list",
    methods: {
        onSubmit: function (formData) {
            var validator = this.kendoValidator
            if (validator.validate()) {
                EventBus.$emit('update-data', formData);
                this.$router.push("/contract-list");
            } 
        },
    },
    data: () => ({
        formData: {
            Code: '',
            EnglishName: '',
            ArabicName:'',
            Description:'',
            ContractType: [
                { text: 'Credit', value: '1' },
                { text: 'Cash', value: '2' }
            ],
            AccommodationClass: [
                { text: 'Class A', value: '1' },
                { text: 'Class B', value: '2' }
            ],
            ContractCategory:[],
            ItemPriceList:[],
            ServicePriceList:[],
            currentDate: new Date(),
            ContractorTree: new kendo.data.HierarchicalDataSource({
                data: [{
                    text: 'R_contractor',
                    items: [
                        { text: 'Qlm' },
                        { text: 'Qiuck and quality' },
                        { text: 'Q.n.b life insurance' }
                    ]
                }, {
                    text: 'Platinum card',
                    items: [
                        { text: 'Planet -gym' },
                        { text: 'Pirelli checkup for employees' }
                    ]
                }]
            }),
            SelectedTypes: new kendo.data.HierarchicalDataSource({
                data: [{
                    text: 'Furniture'
                },{
                    text: 'Decor'
                }]
            })
        },  
    }),
}