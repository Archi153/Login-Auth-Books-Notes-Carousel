import {Pipe, PipeTransform} from '@angular/core';
import {IAuthor} from "../interfaces/author";

@Pipe({
  name: 'author1'
})
export class AuthorPipe1 implements PipeTransform {

  transform(author: IAuthor, ...args: unknown[]): string {
    return author.lastName ;
  }

}