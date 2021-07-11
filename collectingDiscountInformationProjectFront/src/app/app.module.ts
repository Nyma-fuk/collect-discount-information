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
import { LoginComponent } from './login/login.component';

//追加 7/11
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { RouterModule, Routes } from '@angular/router';

const ROUTE_TABLE: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'login', component: LoginComponent },
];
//

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent
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
    
    RouterModule.forRoot(ROUTE_TABLE), // 追加. routing の情報を登録する

    // add this!
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    
  ],
  
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
