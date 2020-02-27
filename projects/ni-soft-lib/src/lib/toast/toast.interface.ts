import { TemplateRef } from '@angular/core';

export type ToastType = 'warning' | 'info' | 'success';

export class ToastData {
    type: ToastType;
    text: string;
    template?: TemplateRef<any>;
    templateContext?: {};
    message: string;
}
