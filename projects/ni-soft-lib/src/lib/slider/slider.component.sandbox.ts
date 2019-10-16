import { sandboxOf } from 'angular-playground';
import { SliderComponent } from './slider.component';

const style = `
:host{
  display:block;
  height:100vh;
}
div{
  height:50%;
  width:50%;
  margin: 25% auto;
  background:green;
  padding-top:40px;
}
nisl-score-counter
{
  display:block;
  color:red;
  margin: 50px auto;
  background:black;
}`;

export default sandboxOf(SliderComponent)
    .add('Slider Working', {
        template: `<div>
    <nisl-slider></nisl-slider>
    </div>`,
        styles: [style]
    });
