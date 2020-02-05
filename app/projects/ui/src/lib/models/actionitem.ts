import { HorizontalAlignment } from "../enums/horizontalalignment.enum";
import { VerticalAlignment } from "../enums/verticalalignment.enum";
import { Subject } from 'rxjs';

export class ActionItem {

    horizontalAlignment : HorizontalAlignment = HorizontalAlignment.Left;
    verticalAlignment : VerticalAlignment = VerticalAlignment.Middle;
    title : string = '';
    icon : string ='';
    subTitle : string = '';

}
