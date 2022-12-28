import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ImageCropperModule } from "ngx-image-cropper";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { CoreModule } from "../@core/core.module";
import { FooterComponent } from "./footer/footer.component";
import { Footerv2Component } from "./footerv2/footerv2.component";
import { FormControlComponent } from "./form-control/form-control.component";
import { HeaderRacesComponent } from "./header-races/header-races.component";
import { HeaderComponent } from "./header/header.component";
import { ImageCropComponent } from "./image-crop/image-crop.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { TestimonialsComponent } from "./testimonals/testimonials.component";
import { ToastsContainerComponent } from "./toast/toast-container.component";
import { ToastService } from "./toast/toast.service";
import { ActivityFeedComponent } from "./virtual-challenge/activity-feed/activity-feed.component";
import { AddLatestActivityComponent } from "./virtual-challenge/add-latest-activity/add-latest-activity.component";
import { AddRunComponent } from "./virtual-challenge/add-run/add-run.component";
import { AssignLegComponent } from "./virtual-challenge/assign-leg/assign-leg.component";
import { BadgeAchievementModalComponent } from "./virtual-challenge/badge-achievement-modal/badge-achievement-modal.component";
import { CommonModelDialogComponent } from "./virtual-challenge/common-model-dialog/common-model-dialog.component";
import { CommunityComponent } from "./virtual-challenge/community/community.component";
import { CountDownComponent } from "./virtual-challenge/countdown/countdown.component";
import { FaqModalComponent } from "./virtual-challenge/faq-modal/faq-modal.component";
import { VirtualChallengeFooterComponent } from "./virtual-challenge/footer/footer.component";
import { InviteModalComponent } from "./virtual-challenge/invite-modal/invite-modal.component";
import { LeaderBoardComponent } from "./virtual-challenge/leader-board/leader-board.component";
import { MemberRunStatusComponent } from "./virtual-challenge/member-run-status/member-run-status.component";
import { RagnarNationComponent } from "./virtual-challenge/ragnar-nation/ragnar-nation.component";
import { RoundProgressBarComponent } from "./virtual-challenge/round-progress-bar/round-progress-bar.component";
import { TeamInfoComponent } from "./virtual-challenge/team-info/team-info.component";
import { TeamStatsComponent } from "./virtual-challenge/team-stats/team-stats.component";
import { VirtualUpSellModalComponent } from "./virtual-challenge/virtual-up-sell-modal/virtual-up-sell-modal.component";
import { WaiverModalComponent } from "./virtual-challenge/waiver-modal/waiver-modal.component";
const MODULES = [NgbModule, ImageCropperModule];

const COMPONENTS = [
  HeaderComponent,
  PageNotFoundComponent,
  FooterComponent,
  Footerv2Component,
  VirtualUpSellModalComponent,
  MemberRunStatusComponent,
  CommonModelDialogComponent,
  LeaderBoardComponent,
  WaiverModalComponent,
  ActivityFeedComponent,
  TeamInfoComponent,
  CommunityComponent,
  AddRunComponent,
  AssignLegComponent,
  RoundProgressBarComponent,
  ToastsContainerComponent,
  HeaderRacesComponent,
  VirtualChallengeFooterComponent,
  ImageCropComponent,
  CountDownComponent,
  AddLatestActivityComponent,
  TeamStatsComponent,
  RagnarNationComponent,
  TestimonialsComponent,
];

const ENTRY_COMPONENTS = [
  VirtualUpSellModalComponent,
  CommonModelDialogComponent,
  WaiverModalComponent,
  ImageCropComponent,
  AddLatestActivityComponent,
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    RouterModule,
    ...MODULES,
    SlickCarouselModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
        deps: [HttpClient],
      },
    }),
  ],
   declarations: [
    ...COMPONENTS,
    FormControlComponent,
    InviteModalComponent,
    FaqModalComponent,
    RagnarNationComponent,
    BadgeAchievementModalComponent,
  ], 
   exports: [...COMPONENTS], 
   providers: [ToastService], 
})
export class ComponentsModule {}
