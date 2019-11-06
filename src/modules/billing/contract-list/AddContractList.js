import { EventBus } from '@/services/event-bus.js';
import { onlyAr, onlyEn } from '@/directives/InputHelpers.js'
export default {
    name: "add-contract-list",
    methods: {
        onSubmit: function (formData) {
            var validator = this.kendoValidator
            if (validator.validate()) {
                EventBus.$emit('update-data', formData);
                this.$router.push("/contract-list");
            }
        }
    },
    data: () => ({
        IsSelectedTypes: false,
        formData: {
            Code: '',
            EnglishName: '',
            ArabicName: '',
            Description: '',
            ContractType: [
                { text: 'Credit', value: '1' },
                { text: 'Cash', value: '2' }
            ],
            AccommodationClass: [
                { text: 'Class A', value: '1' },
                { text: 'Class B', value: '2' }
            ],
            ContractCategory: [],
            ItemPriceList: [],
            ServicePriceList: [],
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
            types: 'All',
            SelectedTypes: new kendo.data.HierarchicalDataSource({
                data: [{
                    text: 'Personal'
                }, {
                    text: 'Family'
                }]
            }),
            Clients: 'AllClients',
            SelectedClients: new kendo.data.HierarchicalDataSource({
                data: [{
                    text: 'Personal'
                }, {
                    text: 'Family'
                }]
            })
        },
    }),
    mounted: function () {
        /*
            The code in this function is only added to simulate a successful upload request for this demo.
            Do not use the code in other cases when working with the Upload component.
        */
        var upload = this.$refs.upload.kendoWidget();

        upload._module.postFormData = function (url, data, fileEntry, xhr) {
            var module = this;
            fileEntry.data("request", xhr);
            setTimeout(function () {
                var e = { target: { responseText: '', statusText: "OK", status: 200 } };
                module.onRequestSuccess.call(module, e, fileEntry);
            }, 1000);
        };

        upload._submitRemove = function () {
            //onSuccess();
        };
    },
    directives: {
        onlyEn,
        onlyAr
    },
}
