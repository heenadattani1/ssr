import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RagnarCMSDataService } from 'src/app/@core/data';
import { planYourTrip } from 'src/app/@core/graphql/graphql';
import { DataLayerService } from 'src/app/@core/utils';

@Component({
  selector: 'app-plan-your-trip',
  templateUrl: './plan-your-trip.component.html',
  styleUrls: ['./plan-your-trip.component.scss'],
})
export class PlanYourTripComponent implements OnInit {
  public event;
  constructor(
    private route: ActivatedRoute,
    private ragnarCMSDataService: RagnarCMSDataService,
    private dataLayerService: DataLayerService,
  ) {}

  ngOnInit(): void {
    this.dataLayerService.pageInitEvent({
      screen_name: 'plan-your-trip',
      pagePostType: 'planYourTrip',
      pagePostType2: 'single-page',
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('eventId')) {
        this.ragnarCMSDataService.getPlanYourTripDataWithGql(params.get('eventId'), planYourTrip).subscribe(
          (response) => {
            this.event = response;
          },
          (error) => {
            console.error(error);
          },
        );
      }
    });
  }

  sortBy(prop: string) {
    return this.event.travel.sort((a, b) => (a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1));
  }
}
