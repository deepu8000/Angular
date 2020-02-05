import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { AppbarComponent } from './appbar/appbar.component';



@NgModule({
  declarations: [UiComponent, AppbarComponent],
  imports: [
  ],
  exports: [UiComponent]
})
export class UiModule { }
