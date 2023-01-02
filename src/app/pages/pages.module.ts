import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../@components/components.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { StaticPagesModule } from './static-pages/static-pages.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [PagesRoutingModule, CommonModule, StaticPagesModule, ComponentsModule],
})
export class PagesModule {}
