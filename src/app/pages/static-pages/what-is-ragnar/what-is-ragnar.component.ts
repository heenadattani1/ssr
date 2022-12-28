import { Component, OnInit } from '@angular/core';
import { DataLayerService, headerRoutes } from 'src/app/@core/utils';

@Component({
  selector: 'app-what-is-ragnar',
  templateUrl: './what-is-ragnar.component.html',
  styleUrls: ['./what-is-ragnar.component.scss'],
})
export class WhatIsRagnarComponent implements OnInit {
  public headerRoutes = headerRoutes;
  constructor(private dataLayerService: DataLayerService) {}
  ngOnInit(): void {
    this.dataLayerService.pageInitEvent({
      screen_name: 'what-is-ragnar',
      pagePostType: 'whatIsRagnar',
      pagePostType2: 'single-page',
    });
  }
}
