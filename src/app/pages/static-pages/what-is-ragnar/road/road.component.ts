import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoModalComponent } from 'src/app/@core/modal';
import { DataLayerService, headerRoutes } from 'src/app/@core/utils';

@Component({
  selector: 'app-road',
  templateUrl: './road.component.html',
  styleUrls: ['./road.component.scss'],
})
export class RoadComponent implements OnInit {
  public headerRoutes = headerRoutes;
  constructor(private modalService: NgbModal, private dataLayerService: DataLayerService) {}

  openVideoModal() {
    const modalRef = this.modalService.open(VideoModalComponent, {
      scrollable: true,
      centered: true,
      keyboard: true,
    });
    modalRef.componentInstance.videoLink = 'https://player.vimeo.com/video/231762440';
  }
  ngOnInit(): void {
    this.dataLayerService.pageInitEvent({
      screen_name: 'what-is-ragnar-road',
      pagePostType: 'whatIsRagnarRoad',
      pagePostType2: 'single-page',
    });
  }
}
