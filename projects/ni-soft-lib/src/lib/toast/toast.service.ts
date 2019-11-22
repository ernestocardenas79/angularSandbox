import { Injectable, Injector, Inject } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ToastComponent } from './toast.component';
import { ToastData } from './toast.interface';
import { TOAST_CONFIG_TOKEN, ToastConfig, TOAST_DATA } from './toast.config';
import { ToastRef } from './toast-ref';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  overlayRef: OverlayRef;
  private lastToast: ToastRef;
  constructor(private overlay: Overlay,
              private parentInjector: Injector,
              @Inject(TOAST_CONFIG_TOKEN) readonly toastConfig: ToastConfig) { }

  show(data: ToastData) {
    const positionStrategy = this.overlay
                                .position()
                                .global()
                                .right()
                                .top(this.getPosition());

    this.overlayRef = this.overlay.create({positionStrategy });

    const toastRef = new ToastRef(this.overlayRef);
    this.lastToast = toastRef;

    const injector = this.getInjectors(data, toastRef, this.parentInjector);
    const toastPortal = new ComponentPortal(ToastComponent, null, injector);
    this.overlayRef.attach(toastPortal);

    return toastRef;
  }

  getInjectors(data: ToastData, toastRef: ToastRef, parentInjector: Injector) {
    const tokens = new WeakMap();
    tokens.set(TOAST_DATA, data);
    tokens.set(ToastRef, toastRef);
    tokens.set(TOAST_CONFIG_TOKEN, this.toastConfig);

    return new PortalInjector(this.parentInjector, tokens);
  }

 getPosition() {
  const lastToastIsVisible = this.lastToast && this.lastToast.isVisible();
  const position = lastToastIsVisible
    ? this.lastToast.getPosition().bottom
    : this.toastConfig.position.top;

  return position + 'px';
}
}

