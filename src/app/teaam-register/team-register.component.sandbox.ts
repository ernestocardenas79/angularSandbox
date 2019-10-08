import { ReactiveFormsModule } from '@angular/forms';
import { SandboxOfConfig, sandboxOf } from 'angular-playground';
import { TeaamRegisterComponent } from './teaam-register.component';

const config: SandboxOfConfig = {
  imports: [ReactiveFormsModule]
};


export default sandboxOf(TeaamRegisterComponent, config)
  .add('default', {
    template: `<nis-teaam-register></nis-teaam-register>`
  });
