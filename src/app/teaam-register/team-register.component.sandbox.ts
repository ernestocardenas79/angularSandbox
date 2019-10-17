import { ReactiveFormsModule } from '@angular/forms';
import { SandboxOfConfig, sandboxOf } from 'angular-playground';
import { TeaamRegisterComponent } from './teaam-register.component';
import { SliderModule } from 'ni-soft-lib';

const config: SandboxOfConfig = {
  imports: [ReactiveFormsModule, SliderModule]
};


export default sandboxOf(TeaamRegisterComponent, config)
  .add('default', {
    template: `<nis-teaam-register></nis-teaam-register>`
  });
