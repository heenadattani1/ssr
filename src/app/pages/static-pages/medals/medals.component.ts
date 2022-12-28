import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/@core/utils';


@Component({
  selector: 'app-medals',
  templateUrl: './medals.component.html',
  styleUrls: ['./medals.component.scss'],
})
export class MedalsComponent implements OnInit {
  constructor(public dataLayerService: DataLayerService) {}
  ngOnInit(): void {
    this.dataLayerService.pageInitEvent({
      screen_name: 'medals',
      pagePostType: 'medals',
      pagePostType2: 'single-page',
    });
  }
}
