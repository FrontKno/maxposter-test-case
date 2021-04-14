import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import RequestModule from './modules/Request';
import NoteModule from './modules/Note';
import NoteListModule from './modules/NoteList';

export let requestStore: RequestModule;
export let noteStore: NoteModule;
export let noteListStore: NoteListModule;
export function initializeStores(store: Store<any>): void {
  requestStore = getModule(RequestModule, store);
  noteStore = getModule(NoteModule, store);
  noteListStore = getModule(NoteListModule, store);
}
export const modules = {
  request: RequestModule,
  note: NoteModule,
  noteList: NoteListModule,
};
