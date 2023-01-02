import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapRoutingModule } from './map-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CoreModule } from 'src/app/@core/core.module';
import { DateFormatPipe, MapCustomPipe } from 'src/app/@core/pipes';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    CoreModule,
    NgbModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
        deps: [HttpClient],
      },
    }),
  ],
  providers: [DateFormatPipe, MapCustomPipe],
})
export class MapModule {}
