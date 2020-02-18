import { AppleftmenuComponent } from './../../projects/ui/src/lib/appleftmenu/appleftmenu.component';
import { AppbarComponent } from './../../projects/ui/src/lib/appbar/appbar.component';
import { AppbodyComponent } from 'projects/ui/src/lib/appbody/appbody.component';
import { ApploginComponent } from './../../projects/ui/src/lib/applogin/applogin.component';
import { AppfooterComponent } from 'projects/ui/src/lib/appfooter/appfooter.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApprightmenuComponent } from 'projects/ui/src/lib/apprightmenu/apprightmenu.component';



@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    AppfooterComponent,
    AppbodyComponent,
    ApploginComponent,
    AppleftmenuComponent,
    ApprightmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
