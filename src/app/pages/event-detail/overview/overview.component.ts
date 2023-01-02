import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { OverviewRaceData } from 'src/app/@core/interfaces/race-data.interface';
import { DataLayerService, EventService } from 'src/app/@core/utils';

@Component({
  selector: 'app-event-detail-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, AfterViewInit {
  @Input() overviewData: OverviewRaceData;
  @Input() pricingStages;
  public statusMsg: string;
  constructor(public eventService: EventService, private window: Window, private dataLayerService: DataLayerService) {}
  ngAfterViewInit(): void {
    // tslint:disable-next-line: no-any
    (this.window as any).affirm.ui.refresh();
  }
  ngOnInit(): void {
 /*    this.dataLayerService.pageInitEvent({
      screen_name: 'event-detail-overview',
      pagePostType: 'eventDetailOverview',
      pagePostType2: 'single-page',
    }); */
    setTimeout(()=>{
      const img1 = document.querySelectorAll('th > a > img')[0];
      const img2 = document.querySelectorAll('th > a > img')[1];
      img1.setAttribute('height', '100');
      img1.setAttribute('width', '100');
      img1.setAttribute('src', 'assets/images/overview/JDRFRacePageGraphic-webp.webp');

      img2.setAttribute('height', '100');
      img2.setAttribute('width', '100');
      img2.setAttribute('src', 'assets/images/overview/RacePageBlock_Gear2-webp.webp');

    },100);
    this.getRaceData();
  }

  addPageInitEvent(screen_name) {
    const pagePostType = screen_name.replace(/(^|-)./g, (s) => s.slice(-1).toUpperCase());
    this.dataLayerService.pageInitEvent({
      screen_name,
      pagePostType,
      pagePostType2: 'single-page',
    });
  }
  
  getRaceData() {
    if (this.overviewData) {
      if (this.overviewData.files.banner.split(' ').length > 1) {
        this.overviewData.files.banner = this.overviewData.files.banner.split(' ').join('%20');
      }

      this.statusMsg = this.eventService.getStatusMsg(this.overviewData);
    }
  }
}
