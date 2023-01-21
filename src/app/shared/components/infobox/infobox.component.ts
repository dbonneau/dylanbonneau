import { Component, Input} from '@angular/core';

export enum EInfoBox {
    ERROR = 'ERROR',
    WARNING = 'WARNING',
    INFO = 'INFO',
    SUCCESS = 'SUCCESS'
}

@Component({
    selector: 'app-infobox',
    templateUrl: './infobox.component.html',
    styleUrls: ['./infobox.component.scss']
})
export class InfoboxComponent {
    @Input() title: string;
    @Input() type: EInfoBox;

    constructor() {
        this.title = '';
        this.type = EInfoBox.INFO
    }
}
