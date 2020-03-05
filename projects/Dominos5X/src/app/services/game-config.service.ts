import {
    Injectable,
    ElementRef,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'ni-soft-lib';
import { TemplatePortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';

@Injectable({
    providedIn: 'root',
})
export class GameConfigService {
    get loadConfig(): { winScore: number; players: any[] } {
        return this.gameConfig;
    }
    constructor(private router: Router, private overlay: Overlay) {
        this.gameConfig = {
            winScore: 55,
            players: ['Ernesto', 'Fashi', 'Sheko', 'virotirno'],
        };
    }
    private gameConfig;
    private overlayContainer: ElementRef<any>;
    private templateGlobalPortals: TemplateRef<any>;
    private viewContainerRef: ViewContainerRef;
    private modalRef: OverlayRef;
    private winnerPlayer: string;

    winner(nombre?: string) {
        this.winnerPlayer = this.winnerPlayer || nombre;

        const tmp = new TemplatePortal(
            this.templateGlobalPortals,
            this.viewContainerRef,
            { $implicit: this.winnerPlayer }
        );

        const config = new OverlayConfig({
            hasBackdrop: true,
            width: '50%',
            positionStrategy: this.overlay
                .position()
                .flexibleConnectedTo(this.overlayContainer.nativeElement)
                .withPositions([
                    {
                        originX: 'center',
                        originY: 'center',
                        overlayX: 'center',
                        overlayY: 'top',
                        offsetX: 0,
                        offsetY: 0,
                    },
                ]),
        });
        const overlayRef = this.overlay.create(config);
        overlayRef.attach(tmp);
        this.modalRef = overlayRef;
    }

    start(config) {
        this.router.navigate(['score']);

        this.gameConfig = config;
    }

    setTemplate(
        overlayContainer: ElementRef<any>,
        templateGlobalPortals: TemplateRef<any>,
        viewContainerRef: ViewContainerRef
    ) {
        this.overlayContainer = overlayContainer;
        this.templateGlobalPortals = templateGlobalPortals;
        this.viewContainerRef = viewContainerRef;
    }

    closeModal() {
        this.modalRef.detach();
    }
}
