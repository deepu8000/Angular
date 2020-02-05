import { AppLogo } from './applogo.model';
import { ActionItem } from './actionitem';

export class AppBar
{
    appTitle : string = '';

    appLogo : AppLogo = null;

    actionItems : Array<ActionItem> = new Array<ActionItem>();

}

