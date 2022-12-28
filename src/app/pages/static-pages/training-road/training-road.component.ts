import { Component, OnInit } from '@angular/core';
import { DataLayerService, headerRoutes } from 'src/app/@core/utils';

@Component({
  selector: 'app-training-road',
  templateUrl: './training-road.component.html',
  styleUrls: ['./training-road.component.scss'],
})
export class TrainingRoadComponent implements OnInit {
  public headerRoutes = headerRoutes;
  constructor(private dataLayerService: DataLayerService) {}
  ngOnInit(): void {
    this.dataLayerService.pageInitEvent({
      screen_name: 'training-road',
      pagePostType: 'trainingRoad',
      pagePostType2: 'single-page',
    });
  }
}
