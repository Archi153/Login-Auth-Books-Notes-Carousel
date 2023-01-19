import {Injectable} from '@angular/core';
import {IBook} from "../interfaces/book";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environments";
import {AuthService} from "../auth/auth.service";
import { IBookRequest } from '../interfaces/book-request';

@Injectable({
  providedIn: 'root'
})
export class BookService {

/*   private _currentId: number = 1;

  private _books: IBook[] = [
    {
      id: 1,
      name: 'Дюна',
      author: {
        firstName: 'Френк',
        lastName: 'Герберт'
      }
    }
  ];
 */
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
  }

  public getBooks(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(environment.apiUrl + 'books');
  }

  public createBook(book: IBookRequest): Observable<IBook> {
    return this.httpClient.post<IBook>(environment.apiUrl + 'books',
      JSON.stringify(book));
  }

  public updateBook(id: string, newBook: IBookRequest): Observable<IBook> {
    return this.httpClient.put<IBook>(environment.apiUrl + 'books/' + id,
      JSON.stringify(newBook));
  }
  public generateBooks(count: number): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'books/generate/' + count, {});
  }

  public deleteBooks(): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + 'books');
  }
}