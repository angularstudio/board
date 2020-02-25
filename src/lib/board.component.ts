import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Board }                                  from './board';

@Component({

    selector: 'board',
    template: `

        <div class="wrapper"
             [class.collapsed]="collapsed"
             [style.background-color]="board.backgroundColor"
             [style.width]="board.width">

            <div class="inside">

                <div class="collapse-button" (click)="toggle()">

                    <i class="fad fa-bars"></i>

                </div>

                <div class="button-elements">


                    <board-button *ngFor="let button of board.buttons"
                                  [collapsed]="collapsed"
                                  [item]="button"></board-button>


                </div>

                <div class="button-static"
                     [style.border-top-color]="board.borderTopColor">

                    <studio-button *ngFor="let button of board.bottomButtons"
                                   [collapsed]="collapsed"
                                   [button]="button"></studio-button>

                </div>

            </div>

        </div>

    `,

    styleUrls: [ 'board.component.scss' ],

})
export class BoardComponent {

    @Input() public collapsed: boolean = true;
    @Input() public board: Board;

    @Output() public onCollapsed: EventEmitter<boolean> = new EventEmitter();

    public toggle(): void {

        this.collapsed = !this.collapsed;

        this.onCollapsed.emit(this.collapsed);

    }

}
