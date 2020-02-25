import { BoardButton }  from '@angular.studio/board-button';
import { StudioButton } from '@angular.studio/button';

export class Board {

    public buttons: Array<BoardButton>;
    public bottomButtons?: Array<StudioButton>;
    public borderTopColor?: string;

    public width: string;
    public backgroundColor: string;

}
