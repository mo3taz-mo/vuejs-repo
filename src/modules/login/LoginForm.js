export default {
    name: 'login-id',
    methods: {
    onLogin: function() {
      this.$router.push("/dashboard");
    }
    },
    data: () => ({
        phoneNumber: "",
        login: {"user": "", "password": ""}
    }),
  }