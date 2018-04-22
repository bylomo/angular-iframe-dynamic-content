import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SafePipe } from './pipes/safe/safe.pipe';
import { DynamicContentIframeComponent } from './components/dynamic-content-iframe/dynamic-content-iframe.component';
import { WebPagesHubConfigService } from './services/WebPagesHubConfig.service';


@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    DynamicContentIframeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    WebPagesHubConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
