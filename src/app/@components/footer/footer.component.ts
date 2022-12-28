import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import { footerRoutes } from 'src/app/@core/utils';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private translate: TranslateService, private router: Router) {}
  public year: number;
  public footerRoutes = footerRoutes;
  public isMainRouterVisible = false;

  ngOnInit(): void {
    this.year = new Date().getFullYear();
    this.translate.setDefaultLang('en');

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      window.location.href.includes('/challenge/dashboard') || window.location.href.includes('/challenge/progress')
        ? (this.isMainRouterVisible = false)
        : (this.isMainRouterVisible = true);
    });
  }
}
