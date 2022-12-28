import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoModalComponent } from 'src/app/@core/modal';
import { DataLayerService, headerRoutes } from 'src/app/@core/utils';

@Component({
  selector: 'app-blackloop',
  templateUrl: './blackloop.component.html',
  styleUrls: ['./blackloop.component.scss'],
})
export class BlackloopComponent implements OnInit {
  public headerRoutes = headerRoutes;
  constructor(private modalService: NgbModal, private dataLayerService: DataLayerService) {}

  openVideoModal() {
    const modalRef = this.modalService.open(VideoModalComponent, {
      scrollable: true,
      centered: true,
      keyboard: true,
    });
    modalRef.componentInstance.videoLink = 'https://player.vimeo.com/video/323797121';
  }
  ngOnInit(): void {
    this.dataLayerService.pageInitEvent({
      screen_name: 'what-is-ragnar-blackloop',
      pagePostType: 'whatIsRagnarBlackloop',
      pagePostType2: 'single-page',
    });
  }
}
