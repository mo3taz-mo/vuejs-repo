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
        }
    },
    created() {
        EventBus.$on('update-data', receivedData => {
            this.formData.push(receivedData);
        });
    },
}