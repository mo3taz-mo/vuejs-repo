import { EventBus } from '@/services/event-bus.js';
export default {
    name: "contract-list",
    data() {
        return { 
            formData: [{
                Code: '45',
                EnglishName: 'english name',
                ArabicName:"اسم عربى",
                Description:'Bla bla bla bla',
                ActivationStatus: false
            },
            {
                Code: '44',
                EnglishName: 'english name',
                ArabicName:"اسم عربى",
                Description:'Bla bla bla bla',
                ActivationStatus: false
            }], 
        }
    },
    created() {
        
    },
    methods: {
        deleteHandler: function(e) {
            e.preventDefault();
            $(e.currentTarget).closest("tr").remove();

        },
        bindData: function() {
            EventBus.$on('update-data', (receivedData) => {
                this.formData.push(receivedData);
                console.log(this.formData);
                var dataSource = new kendo.data.DataSource({ data: this.formData });dataSource.read();
                // var gantt = this.$refs.gantt.kendoWidget();            
                // gantt.formData.add(receivedData)
            });

            // Initial read of the items in to the data source
            
        }
    }
}