<template>
  <div>
    <NavSide />
    <div id="right-panel" class="right-panel">
        <NavTop />
        <Breadcrumbs v-bind:pagetitle="pagetitle" />
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
import Breadcrumbs from '@/components/Layout/breadcrumbs';

export default {
  watch: {
    '$route' (to) {
      this.pagetitle = to.meta.title;
    }
  },
  components: {
    NavSide,
    NavTop,
    AppFooter,
    Breadcrumbs
  },
  data: () => ({
    pagetitle: 'Dashboard',
  }),
};
</script>

<style lang="scss" scoped>
  .content{
    padding-top: 15px;
  }
</style>