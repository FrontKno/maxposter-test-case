import { Note } from '@/models/NoteModel';
import http from '..';

const noteApi = {
  async getOne(noteId: number): Promise<Note> {
    const response = await http.get(`/posts/${noteId}`);
    return response.data;
  },
  async getList(): Promise<Array<Note>> {
    const response = await http.get('/posts');
    return response.data;
  },
};

export default noteApi;
