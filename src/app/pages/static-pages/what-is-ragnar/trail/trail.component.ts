import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoModalComponent } from 'src/app/@core/modal';
import { DataLayerService, headerRoutes } from 'src/app/@core/utils';

@Component({
  selector: 'app-trail',
  templateUrl: './trail.component.html',
  styleUrls: ['./trail.component.scss'],
})
export class TrailComponent implements OnInit {
  public headerRoutes = headerRoutes;
  public showVideoPopUp = false;
  public closeResult: string;
  constructor(private modalService: NgbModal, private dataLayerService: DataLayerService) {}

  openVideoModal() {
    const modalRef = this.modalService.open(VideoModalComponent, {
      scrollable: true,
      centered: true,
      keyboard: true,
    });
    modalRef.componentInstance.videoLink = 'https://player.vimeo.com/video/231763782';
  }
  ngOnInit(): void {
    this.dataLayerService.pageInitEvent({
      screen_name: 'what-is-ragnar-trail',
      pagePostType: 'whatIsRagnarTrail',
      pagePostType2: 'single-page',
    });
  }
}
