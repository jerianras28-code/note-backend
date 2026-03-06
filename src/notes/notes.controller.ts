import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly noteService: NotesService) {}

  @Get()
  getnotes(): string[] {
    return this.noteService.getNotes();
  }

  @Post()
  newNote(@Body() Body: string): any {
    return this.noteService.addNote(Body);
  }

  @Delete(':id')
  removeNote(@Param('id') id: string): any {
    return this.noteService.deleteNote(+id);
  }
}
