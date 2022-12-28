import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/@core/utils';


@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.scss'],
})
export class TermsOfUseComponent implements OnInit {
  constructor(private dataLayerService: DataLayerService) {}
  ngOnInit(): void {
    this.dataLayerService.pageInitEvent({
      screen_name: 'terms-of-use',
      pagePostType: 'termsOfUse',
      pagePostType2: 'single-page',
    });
  }
}
