import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'nisl-score-counter',
  templateUrl: './score-counter.component.html',
  styleUrls: ['./score-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ScoreCounterComponent implements OnInit {
  completed = false;
  private maxSlots = 10;
  assignedSlots = 0;

  @Output()
  isCompleted: EventEmitter<boolean> = new EventEmitter();

  assignSlots(ptos: number) {
    if (!this.completed) {
      if (this.assignedSlots + ptos >= this.maxSlots) {
        if (this.assignedSlots + ptos >= this.maxSlots) {
          this.isCompleted.emit(true);
        }
        this.assignedSlots = this.maxSlots;
      } else {
        this.assignedSlots += ptos;
      }
    }
  }

  constructor() {}

  ngOnInit() {}
}
