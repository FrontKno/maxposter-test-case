import {
  VuexModule, Module, Mutation, Action,
} from 'vuex-module-decorators';
import { Note } from '@/models/NoteModel';
import noteApi from '@/api/Note/noteApi';

@Module({ namespaced: true, name: 'note' })
export default class NoteModule extends VuexModule {
  note: Note | null = null

  @Mutation
  setNote(note: Note): void {
    this.note = note;
  }

  @Mutation
  resetNote(): void {
    this.note = null;
  }

  @Action
  async fetchNote(noteId: number): Promise<void> {
    try {
      const note = await noteApi.getOne(noteId);
      this.context.commit('setNote', note);
    } catch (error) {
      // Error handling logic
    }
  }
}
