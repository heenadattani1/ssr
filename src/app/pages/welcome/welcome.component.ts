import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DataLayerService } from 'src/app/@core/utils';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit, OnDestroy {
  public script;
  public isMobile = false;

  constructor(private renderer2: Renderer2, @Inject(DOCUMENT) private document: Document, private dataLayerService: DataLayerService) {}

  ngOnInit(): void {
    this.dataLayerService.pageInitEvent({
      screen_name: 'welcome',
      pagePostType: 'welcome',
      pagePostType2: 'single-page',
    });
    this.script = this.renderer2.createElement('script');
    this.script.src = `https://static.zdassets.com/ekr/snippet.js?key=a86dcabd-59b3-4c11-bf89-6082ec07d50f`;
    this.script.id = 'ze-snippet';
    this.renderer2.appendChild(this.document.body, this.script);
    const element = this.document.getElementById('launcher');
    if (element) {
      element.style.removeProperty('opacity');
    }
    const elementWebWidget = this.document.getElementById('webWidget');
    if (elementWebWidget) {
      elementWebWidget.style.removeProperty('opacity');
    }
    if (window.innerWidth <= 767) {
      this.isMobile = true;
    }
  }

  ngOnDestroy() {
    const element = this.document.getElementById('launcher');
    if (element) {
      element.style.opacity = '0';
    }
    const elementWebWidget = this.document.getElementById('webWidget');
    if (elementWebWidget) {
      elementWebWidget.style.opacity = '0';
    }
    this.renderer2.removeChild(this.document.body, this.script);
  }
}
