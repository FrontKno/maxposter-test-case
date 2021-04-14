<template>
  <div>
    <NoteList/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NoteList from '@/components/NoteList/NoteList.vue';

export default Vue.extend({
  components: {
    NoteList,
  },
});
</script>
