import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import * as Sentry from '@sentry/angular';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { ComponentsModule } from './@components/components.module';
import { CoreModule } from './@core/core.module';
import { PagesModule } from './pages/pages.module';
import { VirtualChallengeSharedDataService } from './@core/utils';
@NgModule({
  declarations: [AppComponent],
  imports: [
    // provideFirebaseApp(() => initializeApp(environment.FIREBASE_CONFIG)),
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ComponentsModule,
    CoreModule,
    PagesModule,
    AngularFireModule.initializeApp(environment.FIREBASE_CONFIG),
    HttpClientModule,
    provideFirestore(() => getFirestore()),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    // {provide : LocationStrategy , useClass: HashLocationStrategy},
    { provide: APP_BASE_HREF, useValue: environment.BASE_URL || '' },
    VirtualChallengeSharedDataService,
    { provide: Window, useValue: window },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
