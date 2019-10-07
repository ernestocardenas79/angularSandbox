import { sandboxOf } from 'angular-playground';
import { FloatingLabelComponent } from './floating-label.component';

export default sandboxOf(FloatingLabelComponent)
  .add('with type date', {
    template: `<nisl-floating-label type="date"></nisl-floating-label>`
  })
  .add('with type text', {
    template: `<nisl-floating-label type="text"></nisl-floating-label>`
  });
