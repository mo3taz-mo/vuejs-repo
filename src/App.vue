<template>
  <div id="app"> 
    <router-view />
    <NavSide />
  </div>
</template>

<script>
import NavSide from './components/Layout/NavSide';

export default {
  name: 'App',
  components: {
    NavSide,
  },
  data: () => ({
    
  }),
};
</script>
