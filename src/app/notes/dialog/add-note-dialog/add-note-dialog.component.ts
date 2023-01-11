import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

import {FormControl, FormGroup, Validators} from "@angular/forms";
import { INote } from 'src/app/interfaces/note';

@Component({
  selector: 'app-add-note-dialog',
  templateUrl: './add-note-dialog.component.html',
  styleUrls: ['./add-note-dialog.component.scss']
})
export class AddNoteDialogComponent implements OnInit {

  public note: INote = {
    name: 'Инквизитор Эйзенхорн',
    author: {

      lastName: 'Абнетт'
    }
  } as INote;

  public noteForm = new FormGroup({
    name: new FormControl('', Validators.required),
    author: new FormGroup({

      lastName: new FormControl('', Validators.required)
    })
  });

  public get name(): FormControl {
    return this.noteForm.get('name') as FormControl;
  }

  public get author(): FormGroup {
    return this.noteForm.get('author') as FormGroup;
  }



  public get lastName(): FormControl {
    return this.author.get('lastName') as FormControl;
  }

  constructor(
    public dialogRef: MatDialogRef<AddNoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: INote,
  ) {
  }
  private _buttonMessege: string = "";
  public get buttonMessege(){return this._buttonMessege;}

  private _titleMessege: string = "";
  public get titleMessege(){return this._titleMessege;}
  public ngOnInit() {
    if (this.data) {
      this.name.setValue(this.data.name);

      this.lastName.setValue(this.data.author.lastName);
      this._buttonMessege = "Изменить";
      this._titleMessege = "Изменение";
    }
    else{
      this._buttonMessege = "Добавить";
      this._titleMessege = "Добавление";
    }
  }

  public onCancelClick() {
    this.dialogRef.close();
  }

  public onAddClick() {
    if (this.noteForm.invalid) return;

    let note = {
      id: this.data?.id,
      name: this.name.value,
      author: {

        lastName: this.lastName.value
      }
    } as INote;

    this.dialogRef.close(note);
  }
}