import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import  localEsNI  from "@angular/common/locales/es-NI";
import  localFrCA  from "@angular/common/locales/fr-CA";

import { registerLocaleData } from "@angular/common";

registerLocaleData(localEsNI);
registerLocaleData(localFrCA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    {
      provide : LOCALE_ID,useValue: "es-NI"
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
