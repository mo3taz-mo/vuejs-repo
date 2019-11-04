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
            dataSourceArray: [
                { text: 'Albania', value: '1' },
                { text: 'Andorra', value: '2' },
                { text: 'Armenia', value: '3' },
                { text: 'Austria', value: '4' },
                { text: 'Azerbaijan', value: '5' },
                { text: 'Belarus', value: '6' },
                { text: 'Belgium', value: '7' }
            ]
        },  
    }),
}