import { Component, OnInit } from '@angular/core';
import { DataLayerService, headerRoutes } from 'src/app/@core/utils';

@Component({
  selector: 'app-love-the-locals',
  templateUrl: './love-the-locals.component.html',
  styleUrls: ['./love-the-locals.component.scss'],
})
export class LoveTheLocalsComponent implements OnInit {
  public headerRoutes = headerRoutes;
  public email: string;
  public inputFocusCount = 0;
  constructor(public dataLayerService: DataLayerService) {}
  ngOnInit(): void {
    this.dataLayerService.pageInitEvent({
      screen_name: 'love-the-locals',
      pagePostType: 'loveTheLocals',
      pagePostType2: 'single-page',
    });
  }
  formElementEnter(obj) {
    this.inputFocusCount++;
    if (this.inputFocusCount === 1) {
      this.dataLayerService.inputFocusEvent({
        formName: 'loveTheLocalsEventForm',
        obj,
      });
    }
  }
  formElementExit(obj) {
    this.inputFocusCount = 0;
    this.dataLayerService.inputBlurEvent({
      formName: 'loveTheLocalsEventForm',
      obj,
    });
  }
}
