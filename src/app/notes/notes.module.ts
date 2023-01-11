import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NotesRoutingModule} from './notes-routing.module';
import {NotesComponent} from './notes.component';
import {PipesModule1} from "../pipes/pipes1.module";
import {MatButtonModule} from "@angular/material/button";
import {AddNoteDialogComponent} from './dialog/add-note-dialog/add-note-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    NotesComponent,
    AddNoteDialogComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,

    PipesModule1,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class NotesModule {
}