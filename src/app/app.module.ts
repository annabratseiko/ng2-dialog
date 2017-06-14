import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { Ng2DialogComponent } from './ng2-dialog/ng2-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    Ng2DialogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
