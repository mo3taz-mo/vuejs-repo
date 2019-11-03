<template>
  <div id="login-id">
    <div class="login-content">
        <div class="login-logo">
            <a href="index.html">
                <img class="align-content" src="../../assets/images/logo.png" alt="">
            </a>
        </div>
        <div class="login-form">
            <form  ref="myForm" v-kendo-validator @submit.prevent="onSubmit">
                <div class="form-group">
                    <label>Uersname</label>
                    <input type="text" 
                            id="username"
                            name="username"
                            class="k-textbox form-control" 
                            placeholder="Uersname" 
                            required
                            validationMessage="Field is required">
                </div>
                <div class="form-group">
                    <label>password</label>
                    <input type="password" 
                            id="password"
                            name="password"
                            class="k-textbox form-control" 
                            placeholder="Password" 
                            required
                            validationMessage="Field is required">
                </div>
                <button class="btn btn-primary btn-flat m-b-30 m-t-30" type="submit">Sign in</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script src="./LoginForm.js"></script>
<style lang="scss" scopped>
@import './theme/login.scss';
</style>
