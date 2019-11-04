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
            }], 
            thecardtitle: 'Child Component!',
            frombrother: ''
        }
    },
    created() {
        EventBus.$on('update-data', receivedData => {
            console.log(receivedData);
            this.formData.push(receivedData);
            console.log(this.formData.length)
        });
    },
}