import { NgModule, ModuleWithProviders } from '@angular/core';

import { ToastComponent } from './toast.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { defaultToastConfig, TOAST_CONFIG_TOKEN } from './toast.config';

// https://blog.angularindepth.com/creating-a-toast-service-with-angular-cdk-a0d35fd8cc12

@NgModule({
    imports: [CommonModule, MatIconModule, BrowserAnimationsModule],
    declarations: [ToastComponent],
    entryComponents: [ToastComponent],
    exports: [OverlayModule],
})
export class ToastModule {
    public static forRoot(
        config = defaultToastConfig
    ): ModuleWithProviders<ToastModule> {
        return {
            ngModule: ToastModule,
            providers: [
                {
                    provide: TOAST_CONFIG_TOKEN,
                    useValue: { ...defaultToastConfig, ...config },
                },
            ],
        };
    }
}
