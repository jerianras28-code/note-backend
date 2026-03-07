import { Injectable } from '@nestjs/common';

export interface Note {
  title: string;
  content: string;
}

@Injectable()
export class NotesService {
  noteContainer: Array<Note> = [];

  getNotes(): Note[] {
    return this.noteContainer;
  }

  addNote(props: Note): void {
    this.noteContainer.push(props);
  }

  deleteNote(props: number): void {
    this.noteContainer.splice(props, 1);
  }
}
