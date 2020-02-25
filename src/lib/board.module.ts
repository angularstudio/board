import { BoardButtonModule } from '@angular.studio/board-button';
import { CommonModule }      from '@angular/common';
import { NgModule }          from '@angular/core';
import { BoardComponent }    from './board.component';

@NgModule({

    declarations: [ BoardComponent ],

    imports: [

        BoardButtonModule,
        CommonModule,

    ],

    exports: [ BoardComponent ]

})
export class BoardModule {
}
