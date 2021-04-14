<template>
  <div
    class="grid justify-items-center align-middle p-4 h-40 bg-gray-100 rounded"
  >
    <p class="font-semibold">{{ note.id }}</p>
    <p class="italic">{{ note.title }}</p>
    <note-list-item-link :itemId="note.id"></note-list-item-link>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
import { Note } from '@/models/NoteModel';
import NoteListItemLink from './NoteListItemLink.vue';

export default Vue.extend({
  name: 'NoteListItem',
  components: {
    NoteListItemLink,
  },
  props: {
    note: {
      type: Object as PropType<Note>,
      required: true,
    },
  },
});
</script>
