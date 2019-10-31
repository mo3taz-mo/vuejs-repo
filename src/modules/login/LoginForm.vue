<template>
  <div id="login-id">
    <div class="login-content">
        <div class="login-logo">
            <a href="index.html">
                <img class="align-content" src="images/logo.png" alt="">
            </a>
        </div>
        <div class="login-form">
            <form>
                <div class="form-group">
                    <label>Uersname</label>
                    <input type="email" class="form-control" placeholder="Uersname">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script src="./LoginForm.js"></script>
<style lang="scss" scopped>
@import './theme/login.scss';
</style>