import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LastResultF1Component } from './last-result-f1/last-result-f1.component';
import { HttpClientModule } from '@angular/common/http'
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    LastResultF1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent, LastResultF1Component]
})
export class AppModule { 
  constructor(private injector: Injector){
    const customElement = createCustomElement(
      LastResultF1Component,
      {
        injector: this.injector
      }
    );
    customElements.define('last-result-f1-widget', customElement);
  }

  ngDoBootstrap() {}
}
