<template>
  <div class="container mx-auto max-w-lg">
    <h2 class="font-bold text-2xl">Detailed information:</h2>
    <note-view></note-view>
  </div>
</template>
<script lang="ts">
import NoteView from '@/components/NoteView/NoteView.vue';
import Vue from 'vue';

export default Vue.extend({
  components: {
    NoteView,
  },
});
</script>
