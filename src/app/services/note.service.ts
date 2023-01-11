import {Injectable} from '@angular/core';
import {IBook} from "../interfaces/book";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private _currentId: number = 1;

  private _notes: IBook[] = [
    {
      id: 1,
      name: 'Дюна',
      author: {
        firstName: 'Френк',
        lastName: 'Герберт'
      }
    }
  ];

  constructor() {
  }

  public getList(): Observable<IBook[]> {
    return of(this._notes);
  }

  public addNote(note: IBook): Observable<any> {
    this._currentId++;
    note.id = this._currentId;
    this._notes.push(note);
    return of();
  }

  public editNote(note: IBook): Observable<any> {
    const index = this._notes.findIndex(b => b.id == note.id);
    if (index != -1) {
      this._notes[index] = note;
    }
    return of();
  }
}