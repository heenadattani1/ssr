import { Component, OnDestroy, OnInit } from '@angular/core';
import { StaticPageService } from 'src/app/@core/data';
import { BannersListNew, Testimonials } from 'src/app/@core/interfaces/static-pages.interface';
import { DataLayerService } from 'src/app/@core/utils';


// import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-homev2',
  templateUrl: './homev2.component.html',
  styleUrls: ['./homev2.component.scss'],
  // encapsulation : ViewEncapsulation.Emulated
})
export class Homev2Component implements OnInit, OnDestroy {
  bannerData: BannersListNew[];
  quotes: Testimonials[];

  constructor(private staticPageService: StaticPageService, private dataLayerService: DataLayerService) {}

  ngOnInit() {
    this.dataLayerService.pageInitEvent({
      screen_name: 'homev2',
      visitorEmail: '',
      pagePostType: 'homePage',
      pagePostType2: 'single-page',
    });
    this.staticPageService.getBannersAndQuotes().subscribe((response) => {
      if (response.banners.length) {
        this.bannerData = response.banners;
      }
      if (response.quotes.length) {
        this.quotes = response.quotes;
      }
    });
    const header = document.getElementsByClassName('site-header')[0];
    header.classList.add('sticky-header');
    window.addEventListener('scroll', this.scrollFunc);
  }
  ngOnDestroy(): void {
    const header = document.getElementsByClassName('sticky-header')[0];
    if (header) {
      header.classList.remove('sticky-header');
    }
  }
  scrollFunc() {
    const y = window.scrollY;
    if (y > 10) {
      const header = document.getElementsByClassName('sticky-header')[0];
      if (header) {
        header.classList.add('fixed');
      }
    } else if (y < 10) {
      const header = document.getElementsByClassName('sticky-header')[0];
      if (header) {
        header.classList.remove('fixed');
      }
    }
  }
  slickInit(e) {
    // console.log('slick initialized');
  }

  breakpoint(e) {
    // console.log('breakpoint');
  }

  afterChange(e) {
    // console.log('afterChange');
    // let i = (currentSlide ? currentSlide : 0) + 1;
    // console.log(i + '/' + currentSlide);
    // console.log(slick.slideCount);
  }
}
