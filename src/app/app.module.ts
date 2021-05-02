import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesModule,
    AuthModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
