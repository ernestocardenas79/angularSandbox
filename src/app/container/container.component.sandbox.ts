import { sandboxOf } from 'angular-playground';
import { ContainerComponent } from './container.component';

export default sandboxOf(ContainerComponent)
  .add('default', {
    template: `<nsi-container></nsi-container>`
  });
