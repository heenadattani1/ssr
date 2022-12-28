import { Component, OnInit } from '@angular/core';
import { DataLayerService, headerRoutes } from 'src/app/@core/utils';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss'],
})
export class VolunteerComponent implements OnInit {
  public headerRoutes = headerRoutes;
  constructor(private dataLayerService: DataLayerService) {}
  ngOnInit(): void {
    this.dataLayerService.pageInitEvent({
      screen_name: 'volunteer',
      pagePostType: 'volunteer',
      pagePostType2: 'single-page',
    });
  }
}
