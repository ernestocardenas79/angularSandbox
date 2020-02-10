import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropItemComponent } from './drop-item/drop-item.component';

@NgModule({
    declarations: [DropItemComponent],
    imports: [CommonModule],
    exports: [DropItemComponent],
    // entryComponents: [DropItemComponent],
})
export class SharedModule {}
