import { Component, Input, OnInit } from '@angular/core';
import { OverviewRaceData } from 'src/app/@core/interfaces/race-data.interface';
import { DataLayerService } from 'src/app/@core/utils';

@Component({
  selector: 'app-event-detail-results-photos',
  templateUrl: './results-photos.component.html',
  styleUrls: ['./results-photos.component.scss'],
})
export class ResultsPhotosComponent {
  @Input() resultPhotosData: OverviewRaceData;
  constructor(private dataLayerService: DataLayerService) {}
}
