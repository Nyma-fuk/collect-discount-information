import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';  // <-- 追加
import { MatToolbarModule } from '@angular/material/toolbar';  // <-- 追加
import { MatSidenavModule } from '@angular/material/sidenav';  // <-- 追加
import { MatListModule } from '@angular/material/list';  // <-- 追加
import { HeaderComponent } from './header/header.component';



registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,  // <-- 追加
    MatToolbarModule,  // <-- 追加
    MatSidenavModule,  // <-- 追加
    MatListModule,  // <-- 追加

    
  ],
  
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
