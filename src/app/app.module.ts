import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TeamDetailComponent } from './team-detail/team-detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import { ApiInterceptor } from './sharing/interceptor/api.interceptor';
import { LoadingInterceptor } from './sharing/interceptor/loading.interceptor';
@NgModule({
  declarations: [AppComponent, TeamDetailComponent, CountrySelectorComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
