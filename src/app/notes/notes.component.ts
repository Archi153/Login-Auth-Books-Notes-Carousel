import {Component} from '@angular/core';
import {NoteService} from "../services/note.service";
import {MatDialog} from "@angular/material/dialog";
import {AddNoteDialogComponent} from "./dialog/add-note-dialog/add-note-dialog.component";
import {INote} from "../interfaces/note";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  constructor(
    public NoteService: NoteService,
    private dialog: MatDialog
  ) {
  }

  public addNote() {
    const dialogRef = this.dialog.open(AddNoteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.NoteService.addNote(result).subscribe();
      }
    });
  }

  public editNote(note: INote) {
    const dialogRef = this.dialog.open(AddNoteDialogComponent, {
      data: note,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.NoteService.editNote(result).subscribe();
      }
    });
  }
}

