import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { EventDetailRoutingModule } from './event-detail-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { DatesAndUpdatesComponent } from './dates-and-updates/dates-and-updates.component';
import { GetReadyComponent } from './get-ready/get-ready.component';
import { CharitiesComponent } from './charities/charities.component';
import { ResultsPhotosComponent } from './results-photos/results-photos.component';
import { CourseComponent } from './course/course.component';

import { CourseMapComponent } from './course/course-map/course-map.component';
import { NgDygraphsModule } from 'ng-dygraphs';
import { CourseElevationComponent } from './course/course-elevation/course-elevation.component';
import { CourseTableComponent } from './course/course-table/course-table.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SelectedLegDetailsComponent } from './dialog/selected-leg-details/selected-leg-details.component';
import { CoreModule } from 'src/app/@core/core.module';
import { EventDetailComponent } from './event-detail.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    EventDetailComponent,
    OverviewComponent,
    RegistrationComponent,
    DatesAndUpdatesComponent,
    GetReadyComponent,
    CharitiesComponent,
    ResultsPhotosComponent,
    CourseComponent,
    CourseMapComponent,
    CourseElevationComponent,
    CourseTableComponent,
    SelectedLegDetailsComponent,
  ],
  imports: [
    CommonModule,
    EventDetailRoutingModule,
    CoreModule,
    NgDygraphsModule,
    NgbModule,
    NgbNavModule,
    NgOptimizedImage,
    // GoogleChartsModule
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) =>
          new TranslateHttpLoader(http, './assets/i18n/', '.json'),
        deps: [HttpClient],
      },
    }),
  ],
})
export class EventDetailModule {}
