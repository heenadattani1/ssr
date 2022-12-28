import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/@core/utils';


@Component({
  selector: 'app-division-classification',
  templateUrl: './division-classification.component.html',
  styleUrls: ['./division-classification.component.scss'],
})
export class DivisionClassificationComponent implements OnInit {
  constructor(private dataLayerService: DataLayerService) {}
  ngOnInit(): void {
    this.dataLayerService.pageInitEvent({
      screen_name: 'division-classification',
      pagePostType: 'divisionClassification',
      pagePostType2: 'single-page',
    });
  }
}
