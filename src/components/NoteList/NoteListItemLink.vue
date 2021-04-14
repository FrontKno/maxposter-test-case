<template>
  <router-link :to="pathToNoteItem" class="text-indigo-500">Open</router-link>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NoteListItemLink',
  props: {
    itemId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pathToNoteItem() {
      return `/note/${this.itemId}`;
    },
  },
});
</script>
