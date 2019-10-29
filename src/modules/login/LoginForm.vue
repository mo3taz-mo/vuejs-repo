<template>
  <div id="login-id">
    <form id="ticketsForm" ref="myForm" v-kendo-validator>
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
            <button class="k-button k-primary" type="submit" @click.stop.prevent="onLogin">Login</button>
        </div>
    </form>
  </div>
</template>

<script src="./LoginForm.js"></script>

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