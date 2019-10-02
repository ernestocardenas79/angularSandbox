import { sandboxOf } from 'angular-playground';
import { FloatingLabelComponent } from './floating-label.component';

export default sandboxOf(FloatingLabelComponent)
  .add('with type date', {
    template: `<nsl-floating-label type="date"></nsl-floating-label>`
  })
  .add('with type text', {
    template: `<nsl-floating-label type="text"></nsl-floating-label>`
  });
