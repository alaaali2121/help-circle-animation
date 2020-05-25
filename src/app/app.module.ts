import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelpCircleComponent } from './help-circle/help-circle/help-circle.component';
import { HelpCircleDirective } from './help-circle/help-circle.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelpCircleComponent,
    HelpCircleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
