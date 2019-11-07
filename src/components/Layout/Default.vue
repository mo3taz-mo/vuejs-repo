<template>
  <div>
    <NavSide />
    <div id="right-panel" class="right-panel">
        <NavTop />
        <!-- <Breadcrumbs /> -->
        <div class="content">
          <slot />          
        </div>
        <AppFooter />
    </div>
    
    
  </div>
</template>

<script>
import NavSide from '@/components/Layout/NavSide';
import NavTop from '@/components/Layout/NavTop';
import AppFooter from '@/components/Layout/AppFooter';
// import Breadcrumbs from '@/components/Layout/breadcrumbs';

export default {
  components: {
    NavSide,
    NavTop,
    AppFooter,
    // Breadcrumbs
  },
  data: () => ({
    
  }),
};
</script>

<style lang="scss" scoped>
  .content{
    padding-top: 15px;
  }
</style>