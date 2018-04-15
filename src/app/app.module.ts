import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SafePipe } from './pipes/safe/safe.pipe';
import { DynamicContentIframeComponent } from './components/dynamic-content-iframe/dynamic-content-iframe.component';


@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    DynamicContentIframeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
