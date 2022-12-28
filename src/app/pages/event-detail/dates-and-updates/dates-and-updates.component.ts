import { Component, Input, OnInit } from '@angular/core';
import { RagnarCMSDataService } from 'src/app/@core/data';
import { datesAndUpdatesField } from 'src/app/@core/graphql/graphql';
import { OverviewRaceData } from 'src/app/@core/interfaces/race-data.interface';
import { DataLayerService, EventService } from 'src/app/@core/utils';


@Component({
  selector: 'app-event-detail-dates-and-updates',
  templateUrl: './dates-and-updates.component.html',
  styleUrls: ['./dates-and-updates.component.scss'],
})
export class DatesAndUpdatesComponent implements OnInit {
  @Input() dateAndUpdateData: OverviewRaceData;
  public isAnyFeaturedUpdates = true;

  constructor(
    private ragnarCmsDataService: RagnarCMSDataService,
    public eventService: EventService,
    private dataLayerService: DataLayerService,
  ) {}

  ngOnInit(): void {
    this.getRaceData();
  }

  getRaceData() {
    if (this.dateAndUpdateData) {
      this.ragnarCmsDataService.getRaceUpdatesWithGql(this.dateAndUpdateData.id, datesAndUpdatesField).subscribe((res) => {
        this.dateAndUpdateData.updates = res;
        this.dateAndUpdateData.updates.map((update) => {
          if (update.favourite) {
            this.isAnyFeaturedUpdates = false;
          }
        });
      }, this.handleError);
    }
  }

  private handleError(err) {
    console.error(err);
  }
}
