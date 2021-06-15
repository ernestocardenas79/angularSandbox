import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '@RickMorty/App/shared/services/spinner.service';

@Component({
  selector: 'rm-spinner',
  template: `<div class="overlay" *ngIf="isLoading$ | async">
        <div class="lds-ripple"><div>
        </div>`,
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {

  isLoading$ = this.spinnerService.isLoading$;
  constructor(private spinnerService: SpinnerService) { }

}
