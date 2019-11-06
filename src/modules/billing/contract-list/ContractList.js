import { EventBus } from '@/services/event-bus.js';
export default {
    name: "contract-list",
    temppp: [],
    data() {
        return {
            formData: [{
                Code: '45',
                EnglishName: 'english name',
                ArabicName: "اسم عربى",
                Description: 'Bla bla bla bla',
                ActivationStatus: false
            },
            {
                Code: '44',
                EnglishName: 'english name',
                ArabicName: "اسم عربى",
                Description: 'Bla bla bla bla',
                ActivationStatus: false
            }],
        }
    },
    created() {
       
    },
    methods: {
        deleteHandler: function (e) {
            e.preventDefault();
            $(e.currentTarget).closest("tr").remove();
        }
    },
    mounted: function () {
        if ($("#grid") && localStorage.tempData) {
            var allData = {
                EnglishName: JSON.parse(localStorage.tempData).EnglishName, 
                ArabicName: JSON.parse(localStorage.tempData).ArabicName,
                Code: JSON.parse(localStorage.tempData).Code,
                Description: JSON.parse(localStorage.tempData).Description,
                ActivationStatus: false
            };
            var drawData = this.formData.concat(allData);
            //debugger
            $("#grid").data("kendoGrid").dataSource.data(drawData);
        }
        EventBus.$on('update-data', (receivedData) => {
            this.formData = receivedData;
            localStorage.tempData = JSON.stringify(receivedData);
        });
    }
}