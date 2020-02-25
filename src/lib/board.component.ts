import { Component, Input } from '@angular/core';
import { Board }            from './board';

@Component({

    selector: 'board',

    template: `

        <div class="wrapper"
             [style.background-color]="board.backgroundColor"
             [style.width]="board.width">

            <board-button *ngFor="let button of board.buttons"
                          [item]="button"></board-button>

        </div>
    `,

    styleUrls: [ 'board.component.scss' ]

})
export class BoardComponent {

    @Input() public board: Board;

}