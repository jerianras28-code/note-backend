import { Injectable } from '@nestjs/common';

@Injectable()
export class NotesService {
  noteContainer: Array<string> = [];

  getNotes(): string[] {
    return this.noteContainer;
  }

  addNote(props: string): void {
    this.noteContainer.push(props);
  }

  deleteNote(props: number): void {
    this.noteContainer.splice(props, 1);
  }
}
