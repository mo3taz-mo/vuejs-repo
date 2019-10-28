<template>
  <div id="login-id">
    <form id="ticketsForm" ref="myForm" v-kendo-validator @submit="onLogin">
        <input type="text"
            id="userName"
            name="userName"
            v-model="login.user"
            required
            validationMessage="Field is required"
            class="k-textbox" />
        <input type="text"
            id="password"
            name="password"
            v-model="login.password"
            required
            validationMessage="Field is required"
            class="k-textbox" />
        <div>
            <button class="k-button k-primary" type="submit">Login</button>
        </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login-id',
    methods: {
    onLogin: function() {
      return this.login.user
    }
    },
    data: () => ({
        phoneNumber: "",
        login: {"user": "", "password": ""}
    }),
  }
</script>

<style scopped>
  .k-button, .status {
        margin-top: 10px;
    }
    .invalid {
        color: red;
    }
    .valid {
        color: green;
    }
</style>