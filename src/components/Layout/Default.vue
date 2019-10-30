<template>
  <div> 
    <NavTop />
    <NavSide />
    <slot />
  </div>
</template>

<script>
import NavSide from '@/components/Layout/NavSide';
import NavTop from '@/components/Layout/NavTop';

export default {
  components: {
    NavSide,
    NavTop
  },
  data: () => ({
    
  }),
};
</script>
