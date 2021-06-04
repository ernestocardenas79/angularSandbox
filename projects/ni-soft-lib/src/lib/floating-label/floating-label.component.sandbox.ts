import { sandboxOf } from 'angular-playground';
import { FloatingLabelComponent } from './floating-label.component';

const styles = [`
div{
  width: 100%;
  height: 60px;
  background: lightcyan;
  padding:5px;
}

nisl-floating-label
{
  color:red;
  background:gray;
}`];

export default sandboxOf(FloatingLabelComponent)
  .add('with type date', {
    template: `<div><nisl-floating-label type="date" label="Fecha" ></nisl-floating-label></div>`,
    styles
  })
  .add('with type text', {
    template: `<div><nisl-floating-label type="text" label="Nombre"></nisl-floating-label></div>`,
    styles
  });
