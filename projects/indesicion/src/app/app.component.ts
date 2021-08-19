import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewChild,
} from '@angular/core';
import { Answer } from './answer';
import { IndesicionService } from './indesicion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'indesicion';
  yesNoAnswer: Answer;

  constructor(private indesicionSrv: IndesicionService) {}

  @ViewChild('questionElement') questionEl: ElementRef;

  @HostBinding('style.background-image')
  bgi = '';

  launchQuestion() {
    this.indesicionSrv.figureoutAnswer().subscribe((answer) => {
      this.yesNoAnswer = answer;
      this.yesNoAnswer.question = this.questionEl.nativeElement.value;
      this.bgi = `url(${answer.image})`;
      this.questionEl.nativeElement.value = '';
    });
  }
}
