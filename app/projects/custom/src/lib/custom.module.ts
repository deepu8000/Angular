import { NgModule } from '@angular/core';
import { CustomComponent } from './custom.component';
import { ButtonComponent } from './controls/button/button.component';
import { TextboxComponent } from './controls/textbox/textbox.component';
import { SelectComponent } from './controls/select/select.component';
import { CheckboxComponent } from './controls/checkbox/checkbox.component';
import { LabelComponent } from './controls/label/label.component';
import { TopbarComponent } from './controls/topbar/topbar.component';
import { BottombarComponent } from './controls/bottombar/bottombar.component';
import { LeftnavComponent } from './controls/leftnav/leftnav.component';
import { RightnavComponent } from './controls/rightnav/rightnav.component';
import { GridComponent } from './controls/grid/grid.component';
import { LandingComponent } from './screens/landing/landing.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { LoginComponent } from './screens/login/login.component';
import { RegisterComponent } from './screens/register/register.component';
import { PromotionsComponent } from './screens/promotions/promotions.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { CashierComponent } from './screens/cashier/cashier.component';
import { LobbyComponent } from './screens/lobby/lobby.component';
import { TableComponent } from './screens/table/table.component';



@NgModule({
  declarations: [CustomComponent, ButtonComponent, TextboxComponent, SelectComponent, CheckboxComponent, LabelComponent, TopbarComponent, BottombarComponent, LeftnavComponent, RightnavComponent, GridComponent, LandingComponent, DashboardComponent, LoginComponent, RegisterComponent, PromotionsComponent, ProfileComponent, CashierComponent, LobbyComponent, TableComponent],
  imports: [
  ],
  exports: [CustomComponent]
})
export class CustomModule { }
