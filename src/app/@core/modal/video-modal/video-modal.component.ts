import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.scss'],
})
export class VideoModalComponent {
  @Input() videoLink;
  constructor() {}
/*   ngOnInit(): void {
    console.log("this.videoLink?.type",this.videoLink?.type); */
    /**
   * video tag script dynamic loading by heena
   */
   /*  if (this.videoLink?.type === 'video')
      this.addVideoScriptTag();
  }

  
  addVideoScriptTag() {
    if (!document.getElementById('vimeo')) {
      var script = document.createElement('script');
      script.id = 'vimeo';
      script.src = "https://player.vimeo.com/api/player.js";
      document.body.appendChild(script);
    }
  } */
}
