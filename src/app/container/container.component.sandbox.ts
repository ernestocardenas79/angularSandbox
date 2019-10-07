import { sandboxOf, SandboxOfConfig } from 'angular-playground';
import { ContainerComponent } from './container.component';
import { FormsModule } from '@angular/forms';

const config: SandboxOfConfig = {
  imports: [FormsModule]
};


export default sandboxOf(ContainerComponent, config)
  .add('default', {
    template: `<nis-container></nis-container>`
  });
