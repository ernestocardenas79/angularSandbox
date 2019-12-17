import {
    Component,
    OnInit,
    ViewChild,
    ViewContainerRef,
    AfterViewInit,
    ComponentFactoryResolver,
} from '@angular/core';
import {
    FormBuilder,
    FormControl,
    Validators,
    FormGroup,
    FormArray,
} from '@angular/forms';
import { DropItemComponent } from '../shared/drop-item/drop-item.component';

@Component({
    selector: 'app-game-config',
    templateUrl: './game-config.component.html',
    styleUrls: ['./game-config.component.scss'],
})
export class GameConfigComponent implements OnInit, AfterViewInit {
    constructor(
        private formBuilder: FormBuilder,
        private cfr: ComponentFactoryResolver
    ) {}

    get players(): FormArray {
        return this.configuracion.get('players') as FormArray;
    }
    configuracion: FormGroup;
    limitOfPlayers = 4;

    @ViewChild('playersContainer', { static: false, read: ViewContainerRef })
    _vcr: ViewContainerRef;

    ngOnInit() {
        this.configuracion = this.formBuilder.group({
            winScore: [''],
            players: this.formBuilder.array([
                new FormControl('', Validators.required),
                new FormControl('', Validators.required),
            ]),
        });
    }

    AddPlayer() {
        if (this.players.controls.length < 4) {
            this.players.push(new FormControl('', Validators.required));
        } else {
            alert('El numero maximo de jugadores es 4');
        }

        const factory = this.cfr.resolveComponentFactory(DropItemComponent);
        // 1
        // let containerRef = this._vcr.createComponent(factory);
        // const viewRef = this._vcr.get(this._vcr.length - 1);
        // viewRef.detach();
        // containerRef = null;

        // 2
        // const component = factory.create(this._vcr.parentInjector);
        // this._vcr.insert(component.hostView);
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit', this._vcr);
    }
}
