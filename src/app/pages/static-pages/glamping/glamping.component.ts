import { Component, OnInit } from '@angular/core';

import { forkJoin } from 'rxjs';

import { Router } from '@angular/router';
import * as $ from 'jquery';
import { RCMSEventDataService } from 'src/app/@core/data';
import { DataLayerService } from 'src/app/@core/utils';
@Component({
  selector: 'app-glamping',
  templateUrl: './glamping.component.html',
  styleUrls: ['./glamping.component.scss'],
})
export class GlampingComponent implements OnInit {
  constructor(private router: Router, private rcmsEventDataService: RCMSEventDataService, private dataLayerService: DataLayerService) {}

  public glampings = [];
  public glampingId = null;
  public isNotSelected = false;

  ngOnInit(): void {
    this.dataLayerService.pageInitEvent({
      screen_name: 'glamping',
      pagePostType: 'glamping',
      pagePostType2: 'single-page',
    });
    this.getGlampings();
    $('.scroll-1').click((event) => {
      event.preventDefault();
      $('html,body').animate(
        {
          scrollTop: $('.reserve-glamping').offset().top - $('.main-header').height(),
        },
        1600,
      );
    });
  }

  getGlampings() {
    const glampingsData = this.rcmsEventDataService.getGlammpingCount('');
    forkJoin({ glampingsData }).subscribe(
      (eventResponse: { glampingsData }) => {
        this.glampings = eventResponse.glampingsData;
      },
      (err) => {
        console.error(err);
      },
    );
  }

  saveGlampingCap() {
    if (this.glampingId) {
      this.router.navigateByUrl('/teamcenter?event=' + this.glampingId);
      this.isNotSelected = false;
    } else {
      this.isNotSelected = true;
    }
  }

  toggleEditable(event) {
    this.glampingId = null;
    if (event.target.checked) {
      this.glampingId = event.target.value;
    }
  }
}
