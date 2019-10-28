<template>
  <div> 
    <NavSide />
    <slot />
  </div>
</template>

<script>
import NavSide from '@/components/Layout/NavSide';

export default {
  components: {
    NavSide,
  },
  data: () => ({
    
  }),
};
</script>
