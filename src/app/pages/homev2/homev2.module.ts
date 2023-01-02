import { Homev2RoutingModule } from './homev2-routing.module';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Homev2Component } from './homev2.component';
import { RaceSliderComponent } from './race-slider/race-slider.component';
import { SafeHtmlPipe } from './race-slider/race-slider.component';
import { ComponentsModule } from 'src/app/@components/components.module';


const COMPONENTS = [RaceSliderComponent];
@NgModule({
  declarations: [Homev2Component, SafeHtmlPipe, ...COMPONENTS],
  imports: [CommonModule, Homev2RoutingModule, SlickCarouselModule, ComponentsModule,NgOptimizedImage],
  exports: [Homev2Component, SafeHtmlPipe, ...COMPONENTS,NgOptimizedImage],
})
export class Homev2Module {}
