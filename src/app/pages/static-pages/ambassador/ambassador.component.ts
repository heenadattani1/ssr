import { Component, OnInit } from '@angular/core';
import { DataLayerService, headerRoutes } from 'src/app/@core/utils';


@Component({
  selector: 'app-ambassador',
  templateUrl: './ambassador.component.html',
  styleUrls: ['./ambassador.component.scss'],
})
export class AmbassadorComponent implements OnInit {
  public headerRoutes = headerRoutes;
  constructor(private dataLayerService: DataLayerService) {}
  ngOnInit(): void {
    this.dataLayerService.pageInitEvent({
      screen_name: 'division-classification',
      pagePostType: 'divisionClassification',
      pagePostType2: 'single-page',
    });
  }
}
