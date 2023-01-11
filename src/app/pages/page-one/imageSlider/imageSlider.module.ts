import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ImageSliderComponent } from './components/imageSlider/imageSlider.component';

@NgModule({
  imports: [CommonModule,
  MatIconModule],
  exports: [ImageSliderComponent],
  declarations: [ImageSliderComponent],
})
export class ImageSliderModule {}