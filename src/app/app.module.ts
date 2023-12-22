import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';


//configuracion del local de la app
import localeEsAR from '@angular/common/locales/es-AR';
import localeFrCa from '@angular/common/locales/fr-CA';


import { registerLocaleData } from '@angular/common';



registerLocaleData(localeEsAR);
registerLocaleData(localeFrCa);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR' },
    provideClientHydration()
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
