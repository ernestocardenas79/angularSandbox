import {
    Component,
    OnInit,
    ViewChild,
    ViewContainerRef,
    AfterViewInit,
    ComponentFactoryResolver,
    ViewChildren,
    QueryList,
    OnDestroy,
    OnChanges,
} from '@angular/core';
import {
    FormBuilder,
    FormControl,
    Validators,
    FormGroup,
    FormArray,
} from '@angular/forms';
import { DropItemComponent } from '../shared/drop-item/drop-item.component';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-game-config',
    templateUrl: './game-config.component.html',
    styleUrls: ['./game-config.component.scss'],
})
export class GameConfigComponent implements OnInit, OnDestroy, AfterViewInit {
    playerVCRSubscription: Subscription;
    playerSubscription: { [id: number]: Subscription } = {};

    configuracion: FormGroup;
    limitOfPlayers = 4;

    @ViewChildren('playerContainer', { read: ViewContainerRef })
    playerVCR: QueryList<ViewContainerRef>;

    ngOnDestroy(): void {
        this.playerVCRSubscription.unsubscribe();

        this.unsubscribeAllPlayers();
    }

    constructor(
        private formBuilder: FormBuilder,
        private cfr: ComponentFactoryResolver
    ) {}

    get players(): FormArray {
        return this.configuracion.get('players') as FormArray;
    }

    ngOnInit() {
        this.playerSubscription = {};

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
            const newControl = new FormControl('', Validators.required);
            this.players.push(newControl);
        } else {
            alert('El numero maximo de jugadores es 4');
        }
    }

    ngAfterViewInit() {
        this.playerVCRSubscription = this.playerVCR.changes.subscribe(
            (i: QueryList<ViewContainerRef>) => {
                const factory = this.cfr.resolveComponentFactory(
                    DropItemComponent
                );

                let containerRef = i.last.createComponent(factory);
                containerRef.instance.referencia = i.length - 1;

                console.log('Se crea objeto', i.length - 1);
                containerRef.instance.deleteItem.subscribe(player => {
                    console.log('Subcribe DeleteItem', player);
                    // this.playerSubscription[player].unsubscribe();
                    this.deletePlayer(player);
                });

                // console.log(
                //     'es undefined ',
                //     i.length - 1,
                //     this.playerSubscription[i.length - 1]
                // );
                // this.playerSubscription[i.length - 1].unsubscribe();

                const viewRef = i.last.get(i.last.length - 1);
                viewRef.detach();
                containerRef = null;
            }
        );
    }

    deletePlayer(player) {
        console.log('removinedo player', player);
        this.players.removeAt(player);
    }

    unsubscribeAllPlayers() {
        for (let i = 2; i < this.players.length; i++) {
            this.playerSubscription[i].unsubscribe();
        }
    }
}
