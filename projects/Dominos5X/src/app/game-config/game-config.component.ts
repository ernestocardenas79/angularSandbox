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

@Component({
    selector: 'app-game-config',
    templateUrl: './game-config.component.html',
    styleUrls: ['./game-config.component.scss'],
})
export class GameConfigComponent implements OnInit, OnDestroy, AfterViewInit {
    playerVCRSubscription: Subscription;
    // playerSubscription: { [id: number]: Subscription } = {};
    playerSubscription: Subscription[];

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
        this.playerSubscription = [new Subscription()];

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
        private cfr: ComponentFactoryResolver
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
        // let componentFactory = this.CFR.resolveComponentFactory(ChildComponent);
        const factory = this.cfr.resolveComponentFactory(DropItemComponent);

        let containerRef = i.last.createComponent(factory);
                // let componentRef: ComponentRef<ChildComponent> = this.VCR.createComponent(componentFactory);

        this.viewContainer= containerRef.hostView;
        const currentComponent = containerRef.instance;

        currentComponent.referencia = i.length - 1;
        currentComponent.selfRef = currentComponent;


        // prividing parent Component reference to get access to parent class methods
        currentComponent.compInteraction = this;

        // add reference for newly created component
        this.componentsReferences.push(containerRef);

        this.playerSubscription.push(
                    containerRef.instance.deleteItem.subscribe(player => {
                        this.playerSubscription[player - 2].unsubscribe();
                        this.deletePlayer(player);
                    })
                );

        // const viewRef = i.last.get(i.last.length - 1);
        // viewRef.detach();
        containerRef = null;
            }
        );
      }

    deletePlayer(player) {
        console.log('removinedo player', player,this.viewContainer);
        this.viewContainer.destroy();
        this.players.removeAt(player);
        // this.remove(player);
    }

    unsubscribeAllPlayers() {
        this.playerSubscription.forEach(ps => ps.unsubscribe());
    }

  remove(index: number) {

    console.log('remove gameCOnfig', this.componentsReferences);
    const componentRef: ComponentRef<DropItemComponent> = this.componentsReferences.filter(x => x.instance.referencia === index)[0];
    const component: DropItemComponent =  componentRef.instance as DropItemComponent;

    // const vcrIndex: number = this.playerVCR.toArray().indexOf(componentRef);

    // console.log('remove', vcrIndex, this.playerVCR[vcrIndex], component);
    // // removing component from container
    // this.playerVCR[vcrIndex].remove(vcrIndex);
    // (componentRef.hostView._viewContainerRef).remove(1);

    this.componentsReferences = this.componentsReferences.filter(x => x.instance.referencia !== index);
  }
}
