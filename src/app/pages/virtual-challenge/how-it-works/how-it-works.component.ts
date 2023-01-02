import { Component, OnInit } from '@angular/core';
import { DataLayerService, virtualChallengeRoutes } from 'src/app/@core/utils';


@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
})
export class HowItWorksComponent implements OnInit {
  public routes = virtualChallengeRoutes;

  constructor(private dataLayerService: DataLayerService) {}
  ngOnInit(): void {
    this.dataLayerService.pageInitEvent({
      screen_name: 'virtual-challenge-how-it-works',
      pagePostType: 'virtualChallengeHowItWorks',
      pagePostType2: 'single-page',
    });
  }
}
