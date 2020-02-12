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
import { Router } from '@angular/router';
import { GameConfigService } from '../services/game-config.service';

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
    playerCollection: {
        [id: number]: {
            subscription;
            viewRef;
            position: number;
        };
    } = {};
    playerSubscription: Subscription[];
    private playersCounter = 1;

    configuracion: FormGroup;
    limitOfPlayers = 4;

    @ViewChildren('playerContainer', { read: ViewContainerRef })
    playerVCR: QueryList<ViewContainerRef>;

    private componentsReferences = [];
    private viewContainer: ViewRef;
    private pendigControl = false;

    ngOnDestroy(): void {
        this.playerVCRSubscription.unsubscribe();
        this.unsubscribeAllPlayers();
    }

    ngOnInit() {
        this.playerSubscription = [];

        const { winScore, players } = this.gameConfigService.loadConfig;

        this.configuracion = this.formBuilder.group({
            winScore: [winScore, Validators.required],
            players: this.formBuilder.array(this.PlayerControlCtor(players)),
        });
    }

    constructor(
        private formBuilder: FormBuilder,
        private cfr: ComponentFactoryResolver,
        private vcr: ViewContainerRef,
        private router: Router,
        private gameConfigService: GameConfigService
    ) {}

    private PlayerControlCtor(players: any[]) {
        let defaultPlayers = [];

        if (players) {
            players.forEach(player => {
                defaultPlayers.push(
                    new FormControl(player, Validators.required)
                );
            });

            this.pendigControl = true;
        } else {
            defaultPlayers = [
                new FormControl('', Validators.required),
                new FormControl('', Validators.required),
            ];
            this.pendigControl = false;
        }
        return defaultPlayers;
    }

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
        if (this.pendigControl) {
            const playerVCRtmp = this.playerVCR.toArray();
            const controlCounter = playerVCRtmp.length;
            const clicleCounter = this.playersCounter;
            console.log('controlCounter', controlCounter, clicleCounter);
            for (
                let index = clicleCounter;
                index < controlCounter - 1;
                index++
            ) {
                console.log('Creando DroP??', index + 1);
                this.asociateDropControl(playerVCRtmp[index + 1], {
                    playerNumber: index + 1,
                });
            }
            this.pendigControl = false;
        }

        this.playerVCRSubscription = this.playerVCR.changes.subscribe(
            (i: QueryList<ViewContainerRef>) => {
                // const playerControls = this.playerVCR.length - 2;
                // if (this.playersConunter <= playerControls) {
                //     const factory = this.cfr.resolveComponentFactory(
                //         DropItemComponent
                //     );

                //     const containerRef = i.last.createComponent(factory);

                //     const currentComponent = containerRef.instance;

                //     const playerNumber = i.length - 1;
                //     currentComponent.referencia = playerNumber;
                //     currentComponent.selfRef = currentComponent;

                //     this.playerCollection[playerNumber] = {
                //         subscription: {},
                //         viewRef: {},
                //         position: 0,
                //     };

                //     this.playerCollection[
                //         playerNumber
                //     ].subscription = containerRef.instance.deleteItem.subscribe(
                //         player => {
                //             this.deletePlayer(player);
                //         }
                //     );

                //     const viewRef = i.last.get(i.last.length - 1);

                //     this.playerCollection[playerNumber].viewRef = viewRef;
                //     this.playerCollection[playerNumber].position =
                //         this.playerVCR.length - 1;

                //     this.playersConunter = playerControls;
                // } else {
                //     this.playersConunter = playerControls;
                // }
                // console.log('Afetr ', playerControls, this.playerCollection);
                this.asociateDropControl(this.playerVCR.last);
            }
        );
    }

    private asociateDropControl(viewContainer: ViewContainerRef, load) {
        console.log('viewContainer', viewContainer, this.playerVCR);
        if (!load) {
            const playerControls = this.playerVCR.length - 2;
            if (this.playersCounter <= playerControls) {
                const factory = this.cfr.resolveComponentFactory(
                    DropItemComponent
                );

                const containerRef = viewContainer.createComponent(factory);

                const currentComponent = containerRef.instance;

                const playerNumber = playerControls + 1;
                currentComponent.referencia = playerNumber;
                currentComponent.selfRef = currentComponent;

                this.playerCollection[playerNumber] = {
                    subscription: {},
                    viewRef: {},
                    position: 0,
                };

                this.playerCollection[
                    playerNumber
                ].subscription = containerRef.instance.deleteItem.subscribe(
                    player => {
                        this.deletePlayer(player);
                    }
                );

                const viewRef = viewContainer.get(viewContainer.length - 1);

                this.playerCollection[playerNumber].viewRef = viewRef;
                this.playerCollection[playerNumber].position = playerNumber;

                this.playersCounter = playerControls;
            } else {
                this.playersCounter = playerControls;
            }
            console.log('if ');
        } else {
            console.log('else ');
            const factory = this.cfr.resolveComponentFactory(DropItemComponent);
            const containerRef = viewContainer.createComponent(factory);
            const currentComponent = containerRef.instance;
            const playerNumber = load.playerNumber;

            currentComponent.referencia = playerNumber;
            currentComponent.selfRef = currentComponent;

            this.playerCollection[playerNumber] = {
                subscription: {},
                viewRef: {},
                position: 0,
            };

            this.playerCollection[
                playerNumber
            ].subscription = containerRef.instance.deleteItem.subscribe(
                player => {
                    this.deletePlayer(player);
                }
            );

            const viewRef = viewContainer.get(viewContainer.length - 1);

            this.playerCollection[playerNumber].viewRef = viewRef;
            this.playerCollection[playerNumber].position = load.playerNumber;
        }
        console.log('Afetr ', this.playerCollection);
    }

    deletePlayer(player) {
        console.log('Delete player', player);
        const playerControls = this.playerVCR.length - 2;

        setTimeout(() => {
            this.playerCollection[player].viewRef.destroy();
            this.playerCollection[player].subscription.unsubscribe();

            let indexCollection = player;
            for (let index = player; index <= playerControls; index++) {
                indexCollection++;
                try {
                    this.playerCollection[indexCollection].position =
                        this.playerCollection[indexCollection].position - 1;
                } catch (error) {}
            }
            this.players.removeAt(this.playerCollection[player].position);
            delete this.playerCollection[player];
        }, 300);
    }

    unsubscribeAllPlayers() {
        // tslint:disable-next-line: forin
        for (const player in this.playerCollection) {
            this.playerCollection[player].subscription.unsubscribe();
        }
    }

    startGame() {
        if (this.configuracion.invalid) {
            return;
        }

        this.gameConfigService.start(this.configuracion.value);
    }

    loadConfig() {}
}
