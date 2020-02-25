import { Component, Input } from '@angular/core';
import { Board }            from './board';

@Component({

    selector: 'board',

    template: `

        <div class="wrapper"
             [style.background-color]="board.backgroundColor"
             [style.width]="board.width">

            <div class="inside">

                <div class="button-elements">

                    <board-button *ngFor="let button of board.buttons"
                                  [item]="button"></board-button>

                </div>

                <div class="button-static"
                     [style.border-top-color]="board.borderTopColor">

                    <studio-button *ngFor="let button of board.bottomButtons"
                                   [button]="button"></studio-button>

                </div>

            </div>

        </div>

    `,

    styleUrls: [ 'board.component.scss' ]

})
export class BoardComponent {

    @Input() public board: Board;

}
