import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
})
export class FabComponent {
  icon = faPlus;

  @Input()
  set faIcon(icon: IconDefinition) {
    if (this.icon) {
      this.icon = icon;
    }
  }

  @Output()
  fabClickHandler = new EventEmitter<boolean>();

  @HostListener('click')
  onClick() {
    this.fabClickHandler.emit();
  }
}
