import { EventBus } from '@/services/event-bus.js';
export default {
    name: "contract-list",
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

        },
        bindData: function () {
            debugger

            EventBus.$on('update-data', (receivedData) => {
                this.formData.push(receivedData);
                console.log(this.formData);
            //     // var dataSource = new kendo.data.DataSource(this.formData);
            //     // dataSource.read();
                setTimeout(() => {
                    var gantt = this.$refs.datasource.kendoWidget();            
                    gantt.data.add(receivedData)
                }, 500);
            //     debugger;

            //     console.log(e)
            //     //  var kendoGrid = $("#grid").data("kendoGrid");
            //     // if (e.sender.dataSource) {
            //     //     e.sender.dataSource.data(this.formData);
            //     //     e.sender.dataSource.refresh();
            //     // }

            });

            // Initial read of the items in to the data source

        },
        // updateDataSource: function () {
        //  return   EventBus.$on('update-data', (receivedData) => {
        //         debugger;

        //         return receivedData;
        //     })

        // }
    },
    mounted(){
        // debugger
        // var data =this.updateDataSource();
        // var kendoGrid = $("#grid").data("kendoGrid");
        // kendoGrid.dataSource.data(data);
    }
}