export default {
    name: 'login-id',
    methods: {
        onSubmit: function () {
            var validator = this.kendoValidator;
            if (validator.validate()) {
                this.$router.push('/dashboard');
                localStorage.setItem('userName', username.value)
            }
        }
    },
    data: () => ({
        username: '',
        password: ''
    }),
    directives: {}
};
