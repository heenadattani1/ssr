import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoModalComponent } from 'src/app/@core/modal';
import { DataLayerService, headerRoutes } from 'src/app/@core/utils';

@Component({
  selector: 'app-sunset',
  templateUrl: './sunset.component.html',
  styleUrls: ['./sunset.component.scss'],
})
export class SunsetComponent implements OnInit {
  public headerRoutes = headerRoutes;
  constructor(private modalService: NgbModal, private dataLayerService: DataLayerService) {}

  openVideoModal() {
    const modalRef = this.modalService.open(VideoModalComponent, {
      scrollable: true,
      centered: true,
      keyboard: true,
    });
    modalRef.componentInstance.videoLink = 'https://player.vimeo.com/video/303817311';
  }
  ngOnInit(): void {
    this.dataLayerService.pageInitEvent({
      screen_name: 'what-is-ragnar-sunset',
      pagePostType: 'whatIsRagnarSunset',
      pagePostType2: 'single-page',
    });
  }
}
