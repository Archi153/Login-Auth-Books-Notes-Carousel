import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PageOneRoutingModule } from './page-one-routing.module';
import { PageOneComponent } from './page-one.component';
import { ImageSliderModule } from './imageSlider/imageSlider.module';
import { ImageSliderComponent } from './imageSlider/components/imageSlider/imageSlider.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    PageOneComponent,

  ],
  imports: [
    BrowserModule,
    PageOneRoutingModule,
    HttpClientModule,
    ImageSliderModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [PageOneComponent],
})
export class PageOneModule {}