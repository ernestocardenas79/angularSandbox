import { sandboxOf } from 'angular-playground';
import { ScoreCounterComponent } from './score-counter.component';

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

export default sandboxOf(ScoreCounterComponent)
  .add('sin puntos', {
    template: `<div>
    <nisl-score-counter [player]="playerName" [puntos]="puntos"></nisl-score-counter>
    </div>`,
    context: {
      playerName: 'Ernesto',
      puntos: 0,
    },
    styles: [style]
  })
  .add('un punto', {
    template: `<div>
    <nisl-score-counter [player]="playerName" [puntos]="puntos"></nisl-score-counter>
    </div>`,
    context: {
      playerName: 'Ernesto',
      puntos: 1,
    },
    styles: [style]
  }).add('tres puntos', {
    template: `<div>
    <nisl-score-counter [player]="playerName" [puntos]="puntos"></nisl-score-counter>
    </div>`,
    context: {
      playerName: 'Ernesto',
      puntos: 3,
    },
    styles: [style]
  })
  .add('5 puntos', {
    template: `<div>
    <nisl-score-counter [player]="playerName" [puntos]="puntos"></nisl-score-counter>
    </div>`,
    context: {
      playerName: 'Ernesto',
      puntos: 5,
    },
    styles: [style]
  });
