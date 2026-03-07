import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { NotesService } from './notes.service';
import type { Note } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly noteService: NotesService) {}

  @Get()
  getnotes(): Note[] {
    return this.noteService.getNotes();
  }

  @Post()
  newNote(@Body() Body: Note): any {
    return this.noteService.addNote(Body);
  }

  @Delete(':id')
  removeNote(@Param('id') id: number): any {
    return this.noteService.deleteNote(+id);
  }
}
