import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appDetectQuestion]',
})
export class DetectQuestionDirective {
  @Output()
  launchQuestion = new EventEmitter();

  @HostListener('keyup', ['$event.key'])
  onCapture(trgt) {
    if (trgt === '?') {
      this.launchQuestion.emit();
    }
  }
}
