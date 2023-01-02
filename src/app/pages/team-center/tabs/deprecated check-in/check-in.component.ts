import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import cloneDeep from 'lodash/cloneDeep';
import { RCMSEventDataService } from 'src/app/@core/data';
import { RcmsEventDetail } from 'src/app/@core/interfaces/rcms-event-details.interface';
import { Team, UserRegistrationInfo } from 'src/app/@core/interfaces/rcms-team-runner-information.interface';
import { CheckInConfig } from 'src/app/@core/interfaces/team-center.interface';
import { CopyToClipboardService } from 'src/app/@core/utils';
import { TeamVolunteerFeesComponent } from '../../dialog/team-volunteer-fees/team-volunteer-fees.component';

@Component({
  selector: 'app-team-center-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent implements OnInit {
  @Input() isCaptain: boolean;
  @Input() selectedEvent: RcmsEventDetail;
  @Input() teamInformation: Team;
  @Input() runnerInformation: UserRegistrationInfo[];
  @Input() volunteerInformation: UserRegistrationInfo[];
  @Input() captainInformation: UserRegistrationInfo;
  @Input() checkInConfig: CheckInConfig;
  @Output() switchTab = new EventEmitter();

  public show = {
    loading: false,
  };

  public baseVolunteerCharge = 120; /* TODO: Need to make Configurable */
  public excludeType = 'SUNSET';

  public curStep = 1;

  public expandDetail = false;

  constructor(
    private modalService: NgbModal,
    private rcmsEventDataService: RCMSEventDataService,
    public copyToClipboardService: CopyToClipboardService,
  ) {}

  ngOnInit(): void {
    this.curStep = this.teamInformation.qrCode ? 3 : 1;
  }

  isAbleToPay() {
    let ableToPay = false;
    if (this.selectedEvent) {
      const teamInformation = this.teamInformation;
      if (teamInformation) {
        const chkLateFee = (teamInformation.totalLateFeeAmount || 0) - (teamInformation.paidLateFeeAmount || 0) > 0;

        const baseVolunteerCharge = this.baseVolunteerCharge;
        const volunteerRequired = teamInformation.volunteerRequired || 0;
        const volunteerRegistered = teamInformation.paidExemptions + teamInformation.exemptions + (teamInformation.volunteersCount || 0);

        const chkVolFee = (volunteerRequired - volunteerRegistered) * baseVolunteerCharge > 0;

        ableToPay = chkLateFee || chkVolFee;
      }
    }
    return ableToPay;
  }

  openVolunteerFeesModel() {
    const updatedEvent = cloneDeep(this.selectedEvent);
    updatedEvent.isVolShiftActive = true;
    const modalRef = this.modalService.open(TeamVolunteerFeesComponent, {
      scrollable: true,
      centered: true,
      keyboard: false,
      backdrop: 'static',
      windowClass: 'team-center-payment',
    });
    modalRef.componentInstance.componentData = {
      type: 'volunteer',
      teamInformation: this.teamInformation,
      selectedEvent: updatedEvent,
    };

    modalRef.result.then(
      (result) => {},
      (reason) => {},
    );
  }

  printDiv() {
    const printContents = `<h2>${this.selectedEvent.name} Online Check-in</h2><br><img width="500" src=${this.teamInformation.qrCode}>`;
    const popupWin = window.open('', '_blank', 'width=800,height=600');
    popupWin.document.open();
    popupWin.document.write(
      `<html><head></head><body onload="window.print()" style="text-align:center">' ${printContents} '</body></html>`,
    );
    popupWin.document.close();
  }

  submitData() {
    const data = {
      registrationConfigId: this.teamInformation.registrationConfigId,
      teamId: this.teamInformation.id,
      van1Phone: this.checkInConfig.van1 ? this.checkInConfig.van1 : '',
      van2Phone: this.checkInConfig.van2 ? this.checkInConfig.van2 : '',
      captainEmail: this.captainInformation.email,
      raceName: this.selectedEvent.name,
    };

    this.show.loading = true;
    this.rcmsEventDataService.submitCheckIn(data).subscribe(
      (teamData) => {
        // tslint:disable-next-line: no-string-literal
        this.teamInformation.qrCode = teamData['qrCode'];
        this.curStep = 3;
        this.show.loading = false;
      },
      (err) => {
        this.show.loading = false;
      },
    );
  }
}
