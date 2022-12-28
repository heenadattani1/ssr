import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Router } from '@angular/router';

import { chunk } from 'lodash-es';
import { Testimonials } from 'src/app/@core/interfaces/static-pages.interface';
import { RagnarCMSDataService, StaticPageService } from 'src/app/@core/data';
import { DataLayerService } from 'src/app/@core/utils';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit {
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;

  slideConfig = {
    slidesToScroll: 1,
    slidesToShow: 1,
    rows: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 576,
        settings: 'unslick',
      },
      // ,
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //     rows: 3,
      //     infinite: false
      //   },
      // },
      // {
      //   breakpoint: 992,
      //   settings: {
      //     slidesToScroll: 1,
      //     slidesToShow: 1,
      //     rows: 4,
      //     infinite: false,
      //   },
      // },
    ],
  };
  public show = {
    loading: false,
  };
  declare quotes: Testimonials[];
  public slides = {};

  constructor(
    private staticPageService: StaticPageService,
    private rcmsDataService: RagnarCMSDataService,
    private router: Router,
    private dataLayerService: DataLayerService,
  ) {}

  ngOnInit(): void {
    this.show.loading = true;
    this.dataLayerService.pageInitEvent({
      screen_name: 'partners',
      pagePostType: 'partners',
      pagePostType2: 'single-page',
    });
    this.staticPageService.getBannersAndQuotes().subscribe((response) => {
      if (response.quotes.length) {
        this.quotes = response.quotes;
      }
    });

    this.rcmsDataService.getAllSponsors().subscribe((data) => {
      this.show.loading = false;
      const prepareChunk: any = data.data.getSponsors;
      const chunks = chunk(prepareChunk, 4);
      this.slides = chunks;
    });
  }

  goToDetails(slug: string): void {
    this.router.navigate(['/partner', slug]);
  }
}
