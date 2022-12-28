import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/@core/utils';


@Component({
  selector: 'app-sustainability',
  templateUrl: './sustainability.component.html',
  styleUrls: ['./sustainability.component.scss'],
})
export class SustainabilityComponent implements OnInit {
  constructor(private dataLayerService: DataLayerService) {}
  ngOnInit(): void {
    this.dataLayerService.pageInitEvent({
      screen_name: 'sustainability',
      pagePostType: 'sustainability',
      pagePostType2: 'single-page',
    });
  }
}
