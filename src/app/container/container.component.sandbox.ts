import { sandboxOf, SandboxOfConfig } from 'angular-playground';
import { ContainerComponent } from './container.component';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'ni-soft-lib';

const config: SandboxOfConfig = {
  imports: [FormsModule, SliderModule]
};


export default sandboxOf(ContainerComponent, config)
  .add('default', {
    template: `<nis-container></nis-container>`
  });
