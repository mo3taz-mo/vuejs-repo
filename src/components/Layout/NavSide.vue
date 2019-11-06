<template>
  <!-- <div id="nav-side">
    <router-link :to="'/dashboard'">Dashboard</router-link> |
    <router-link :to="'/admin'">admin</router-link>    
  </div> -->
  <aside id="left-panel nav-side" class="left-panel">
        <!-- open-menu -->
        <nav class="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" class="main-menu collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active">
                        <a href="index.html"><i class="menu-icon fa fa-laptop"></i>{{$t('Dashboard')}} </a>
                    </li>
                    <li class="menu-item-has-children dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false"> <i class="menu-icon fa fa-id-badge"></i>{{$t('Admin')}}</a>
                        <ul class="sub-menu children dropdown-menu">
                            <li><i class="fa fa-id-card-o"></i><router-link :to="'/create-user'">{{$t('CreateNewUser')}}</router-link></li>
                            <li><i class="fa fa-bars"></i><router-link :to="'/user-list'">{{$t('UsersList')}}</router-link></li>
                        </ul>
                    </li>
                    <li class="menu-item-has-children dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false"> <i class="menu-icon fa fa-table"></i>{{$t('Billing')}}</a>
                        <ul class="sub-menu children dropdown-menu">
                            <li>
                                <i class="fa fa-table"></i>
                                <router-link :to="'/contract-category'">{{$t('ContractCategory')}}</router-link>
                            </li>
                            <li><i class="fa fa-table"></i>
                                <router-link :to="'/contract-list'">{{$t('ContractList')}}</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </nav>
    </aside>
</template>

<script>
  export default {
    name: 'nav-side'
  }
</script>

<style scoped>
.navbar{
    padding: 0;
}
</style>