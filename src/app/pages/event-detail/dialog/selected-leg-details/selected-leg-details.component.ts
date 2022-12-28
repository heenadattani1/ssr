import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Lags } from 'src/app/@core/interfaces/race-data.interface';
import { DataLayerService } from 'src/app/@core/utils';

@Component({
  selector: 'app-selected-leg-details',
  templateUrl: './selected-leg-details.component.html',
  styleUrls: ['./selected-leg-details.component.scss'],
})
export class SelectedLegDetailsComponent implements OnInit {
  @Input() selectedLegData: Lags;
  constructor(public activeModal: NgbActiveModal, private dataLayerService: DataLayerService) {}

  closeModal() {
    this.activeModal.close();
  }
  ngOnInit(): void {
    this.dataLayerService.pageInitEvent({
      screen_name: 'selected-leg-details',
      pagePostType: 'selectedLegdetails',
      pagePostType2: 'single-page',
    });
  }
}
