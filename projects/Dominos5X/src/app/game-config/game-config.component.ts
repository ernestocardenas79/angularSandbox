import {
    Component,
    OnInit,
    ViewContainerRef,
    AfterViewInit,
    ComponentFactoryResolver,
    ViewChildren,
    QueryList,
    OnDestroy,
    ComponentRef,
    ViewRef,
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

interface PlayerInteraction {
  susbcription: Subscription;
  viewRef: ViewRef;
}

@Component({
    selector: 'app-game-config',
    templateUrl: './game-config.component.html',
    styleUrls: ['./game-config.component.scss'],
})
export class GameConfigComponent implements OnInit, OnDestroy, AfterViewInit {
    playerVCRSubscription: Subscription;
    playerCollection: { [id: number]: { subscription, viewRef } } = {};
    playerSubscription: Subscription[];
    private playersConunter = 1;

    configuracion: FormGroup;
    limitOfPlayers = 4;

    @ViewChildren('playerContainer', { read: ViewContainerRef })
    playerVCR: QueryList<ViewContainerRef>;

    private componentsReferences = [];
    private viewContainer: ViewRef;

    ngOnDestroy(): void {
        this.playerVCRSubscription.unsubscribe();

        this.unsubscribeAllPlayers();
    }

    ngOnInit() {
        this.playerSubscription = [];

        this.configuracion = this.formBuilder.group({
            winScore: [''],
            players: this.formBuilder.array([
                new FormControl('', Validators.required),
                new FormControl('', Validators.required),
            ]),
        });
    }

    constructor(
        private formBuilder: FormBuilder,
        private cfr: ComponentFactoryResolver,
        private vcr: ViewContainerRef
    ) {}

    get players(): FormArray {
        return this.configuracion.get('players') as FormArray;
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

                const playerControls = this.playerVCR.length - 2;
                // console.log('playerControls', playerControls, this.playersConunter);
                if (this.playersConunter <= playerControls) {
                  console.log('READY TO CREATE');
                    // let componentFactory = this.CFR.resolveComponentFactory(ChildComponent);
                  const factory = this.cfr.resolveComponentFactory(DropItemComponent);

                  const containerRef = i.last.createComponent(factory);

                  const currentComponent = containerRef.instance;

                  const playerNumber = i.length - 1;
                  currentComponent.referencia = playerNumber;
                  currentComponent.selfRef = currentComponent;

                  this.playerCollection[playerNumber] = {subscription: {}, viewRef: {}};

                  this.playerCollection[playerNumber].subscription =
                                containerRef.instance.deleteItem.subscribe(player => {
                                  this.playerCollection[player].subscription.unsubscribe();
                                  this.deletePlayer(player);
                                  console.log('deleteItem.subscribe',  this.playerSubscription);
                                });

                  const viewRef = i.last.get(i.last.length - 1);

                  this.playerCollection[playerNumber].viewRef = viewRef;

                  this.playersConunter = playerControls;

                } else {
                  this.playersConunter = playerControls;
                }
                console.log('Afetr ', playerControls, this.playerCollection);

            });
      }

    deletePlayer(player) {
        this.players.removeAt(player);
        this.remove(player);
    }

    unsubscribeAllPlayers() {
        this.playerSubscription.forEach(ps => ps.unsubscribe());
    }

  remove(player: number) {

      setTimeout(() => {
        this.playerCollection[player].viewRef.destroy();

    }, 500);
  }
}
