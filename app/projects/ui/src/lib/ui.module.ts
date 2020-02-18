import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { AppbarComponent } from './appbar/appbar.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { AppbodyComponent } from './appbody/appbody.component';
import { ApploginComponent } from './applogin/applogin.component';
import { AppleftmenuComponent } from './appleftmenu/appleftmenu.component';
import { ApprightmenuComponent } from './apprightmenu/apprightmenu.component';



@NgModule({
  declarations: [UiComponent, AppbarComponent, AppfooterComponent, AppbodyComponent, ApploginComponent, AppleftmenuComponent, ApprightmenuComponent],
  imports: [
  ],
  exports: [UiComponent]
})
export class UiModule { }
