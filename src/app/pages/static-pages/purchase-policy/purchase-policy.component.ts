import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/@core/utils';


@Component({
  selector: 'app-purchase-policy',
  templateUrl: './purchase-policy.component.html',
  styleUrls: ['./purchase-policy.component.scss'],
})
export class PurchasePolicyComponent implements OnInit {
  constructor(private dataLayerService: DataLayerService) {}
  ngOnInit(): void {
    this.dataLayerService.pageInitEvent({
      screen_name: 'privacy-policy',
      pagePostType: 'privacyPolicy',
      pagePostType2: 'single-page',
    });
  }
}
