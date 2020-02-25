import { BoardButtonModule }  from '@angular.studio/board-button';
import { StudioButtonModule } from '@angular.studio/button';
import { CommonModule }       from '@angular/common';
import { NgModule }           from '@angular/core';
import { BoardComponent }     from './board.component';

@NgModule({

    declarations: [ BoardComponent ],

    imports: [

        BoardButtonModule,
        CommonModule,
        StudioButtonModule,

    ],

    exports: [ BoardComponent ]

})
export class BoardModule {
}
