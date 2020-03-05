import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { ToastData } from './toast.interface';
import { TOAST_CONFIG_TOKEN, TOAST_DATA, ToastConfig } from './toast.config';
import { ToastRef } from './toast-ref';
import { toastAnimations, ToastAnimationState } from './toast-animations';
import { AnimationEvent } from '@angular/animations';

@Component({
    selector: 'nisl-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.css'],
    animations: [toastAnimations.fadeToast],
})
export class ToastComponent implements OnInit, OnDestroy {
    iconType;
    private intervalId;
    animationState: ToastAnimationState = 'default';

    constructor(
        readonly ref: ToastRef,
        @Inject(TOAST_DATA) readonly data: ToastData,
        @Inject(TOAST_CONFIG_TOKEN) readonly toastConfig: ToastConfig
    ) {
        this.iconType = data.type === 'success' ? 'done' : data.type;
    }

    ngOnInit() {
        this.intervalId = setTimeout(
            () => (this.animationState = 'closing'),
            5000
        );
    }

    ngOnDestroy() {
        clearTimeout(this.intervalId);
    }

    close() {
        this.ref.close();
    }

    onFadeFinished(event: AnimationEvent) {
        const { toState } = event;
        const isFadeOut = (toState as ToastAnimationState) === 'closing';
        const itFinished = this.animationState === 'closing';

        if (isFadeOut && itFinished) {
            // this.close();
        }
    }
}
