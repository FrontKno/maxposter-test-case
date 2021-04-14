<template>
  <div>
  <transition name="fade" mode="out-in">
    <note-view-placeholder v-if="isLoading" :loading="isLoading"></note-view-placeholder>
    <div v-else class="bg-gray-200 rounded-2xl p-5">
      <div v-for="(val, key) in note" :key="key" class="pt-2">
        <span class="text-indigo-800 font-semibold text-lg">{{key}}: </span>
        <span>{{val}}</span>
      </div>
    </div>
  </transition>
  </div>
</template>
<script lang="ts">
import { noteStore } from '@/store';
import Vue from 'vue';
import NoteViewPlaceholder from './NoteViewPlaceholder.vue';

export default Vue.extend({
  components: {
    NoteViewPlaceholder,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  async mounted() {
    await noteStore.fetchNote(parseInt(this.$route.params.id));
    this.isLoading = false;
  },
  beforeDestroy() {
    noteStore.resetNote();
  },
  computed: {
    note() {
      return noteStore.note;
    },
  },
});
</script>

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
