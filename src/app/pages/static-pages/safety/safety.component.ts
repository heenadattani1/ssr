import { Component, OnInit } from '@angular/core';
import { DataLayerService, headerRoutes } from 'src/app/@core/utils';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.scss'],
})
export class SafetyComponent implements OnInit {
  public headerRoutes = headerRoutes;
  constructor(private dataLayerService: DataLayerService) {}
  ngOnInit(): void {
    this.dataLayerService.pageInitEvent({
      screen_name: 'safety',
      pagePostType: 'safety',
      pagePostType2: 'single-page',
    });
  }
}
