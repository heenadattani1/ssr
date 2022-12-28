import { Component, Input } from '@angular/core';
import { OverviewRaceData } from 'src/app/@core/interfaces/race-data.interface';
import { EventService } from 'src/app/@core/utils';

@Component({
  selector: 'app-event-detail-charities',
  templateUrl: './charities.component.html',
  styleUrls: ['./charities.component.scss'],
})
export class CharitiesComponent {
  @Input() charitiesData: OverviewRaceData;
  constructor(public eventService: EventService) {}
}
