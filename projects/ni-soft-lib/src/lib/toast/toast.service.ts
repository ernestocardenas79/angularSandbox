import { Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ToastComponent } from './toast.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private overlay: Overlay) { }

  show() {
    const overlayRef = this.overlay.create();
    const toartPortal = new ComponentPortal(ToastComponent);
    overlayRef.attach(toartPortal);
  }
}
