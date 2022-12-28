import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as $ from 'jquery';
import { authRoutes, MetaTagsService, SessionStorageService } from './@core/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'domestic';
  private authRoutes = authRoutes;
  contentLoaded = false;

  constructor(
    private router: Router,
    private metaTagsServices: MetaTagsService,
    private activatedRoute: ActivatedRoute,
    private sessionStorageService: SessionStorageService,
  ) {
    this.metaTagsServices.setTitle('Ragnar Home | Find an Overnight Road or Trail Running Relay Near You!');
    this.metaTagsServices.setSiteMetaTags(
      'What is Ragnar? Long distance, team, overnight running relays races in scenic locations across the country. If you can run a 10k or a half marathon, you can run a Ragnar Relay! Register today.',
      'Ragnar, overnight relay race, half marathon, 10k, trail running, team relay, race calendar, run a race, find a race, long distance running',
    );
    this.metaTagsServices.setSocialMediaTags(this.router.url, undefined, undefined, undefined);
  }
  ngOnInit(): void {
    // if(window.location.pathname === '/'){
    this.waitTillContentLoaded();
    // } else {
    //   this.contentLoaded = true;
    // }
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd || event instanceof NavigationStart))
      .subscribe((event: NavigationEnd | NavigationStart) => {
        if (event instanceof NavigationStart) {
          if (!event.url.includes(this.authRoutes.main)) {
            this.sessionStorageService.set(SessionStorageService.REDIRECT_URL_KEY_NAME, event.url);
          }
        } else {
          const rt = this.getChild(this.activatedRoute);
          rt.data.subscribe((data) => {
            this.metaTagsServices.setGenricMetaTags(data);
          });
        }
      });
  }

  private waitTillContentLoaded() {
    const waitContentLoaded = setInterval(() => {
      if ($('.app-content').length >= 1) {
        this.contentLoaded = true;
        clearInterval(waitContentLoaded);
      }
    }, 1000);
  }

  private getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}
