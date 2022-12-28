import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/@core/utils';


@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.scss'],
})
export class OurStoryComponent implements OnInit {
  constructor(private dataLayerService: DataLayerService) {}
  ngOnInit(): void {
    this.dataLayerService.pageInitEvent({
      screen_name: 'our-story',
      pagePostType: 'our-story',
      pagePostType2: 'single-page',
    });
  }
}
