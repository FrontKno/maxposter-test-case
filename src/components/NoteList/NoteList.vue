<template>
  <div v-if="noteListLoaded" class="grid grid-cols-3 grid-flow-row gap-6">
    <div v-for="note in noteList" :key="note.id" class="note">
      <note-list-item :note="note"></note-list-item>
    </div>
  </div>
</template>

<script lang="ts">
import { noteListStore } from '@/store';
import Vue from 'vue';
import NoteListItem from './NoteListItem.vue';

export default Vue.extend({
  name: 'NoteList',
  components: {
    NoteListItem,
  },
  data() {
    return {
      noteListLoaded: false,
    };
  },
  computed: {
    noteList() {
      return noteListStore.noteList;
    },
  },
  async created() {
    await noteListStore.fetchNoteList();
    this.noteListLoaded = true;
  },
});
</script>
