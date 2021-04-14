<template>
    <div
      class="blink-animation container grid content-center h-48 w-96 bg-gray-200 rounded-2xl">
    </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
<style scoped lang="scss">
  @keyframes blink {
    from {
      opacity: 1;
    }
    to {
      opacity: .4;
    }
  }
  .blink-animation {
    animation-name: blink;
    animation-duration: .8s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }
</style>
