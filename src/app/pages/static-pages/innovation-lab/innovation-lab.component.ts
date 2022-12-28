import { Component, OnInit } from '@angular/core';
import { DataLayerService, headerRoutes } from 'src/app/@core/utils';

@Component({
  selector: 'app-innovation-lab',
  templateUrl: './innovation-lab.component.html',
  styleUrls: ['./innovation-lab.component.scss'],
})
export class InnovationLabComponent implements OnInit {
  public headerRoutes = headerRoutes;
  constructor(private dataLayerService: DataLayerService) {}
  ngOnInit(): void {
    this.dataLayerService.pageInitEvent({
      screen_name: 'innovation-lab',
      pagePostType: 'innovationLab',
      pagePostType2: 'single-page',
    });
  }
}
