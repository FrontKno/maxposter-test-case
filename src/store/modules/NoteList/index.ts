import {
  VuexModule, Module, Mutation, Action,
} from 'vuex-module-decorators';
import { Note } from '@/models/NoteModel';
import noteApi from '@/api/Note/noteApi';

@Module({ namespaced: true, name: 'noteList' })
export default class NoteListModule extends VuexModule {
  noteList: Array<Note> = []

  @Mutation
  setNoteList(noteList: Array<Note>): void {
    this.noteList = noteList;
  }

  @Action
  async fetchNoteList(): Promise<void> {
    try {
      const noteList = await noteApi.getList();
      this.context.commit('setNoteList', noteList);
    } catch (error) {
      // Error handling logic
    }
  }
}
