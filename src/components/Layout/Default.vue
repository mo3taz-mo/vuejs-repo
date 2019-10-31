<template>
  <div>
    <NavSide />
    <div id="right-panel" class="right-panel">
        <NavTop />
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

export default {
  components: {
    NavSide,
    NavTop,
    AppFooter
  },
  data: () => ({
    
  }),
};
</script>
