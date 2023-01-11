import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthorPipe1} from "./author1.pipe";


@NgModule({
  declarations: [
    AuthorPipe1
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuthorPipe1
  ],
})
export class PipesModule1 {
}