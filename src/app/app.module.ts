import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemanComponent } from './teman/teman.component';
import { TemanAddComponent } from './teman/teman-add/teman-add.component';
import { TemanListComponent } from './teman/teman-list/teman-list.component';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AnggotaListComponent} from "./anggota/anggota-list/anggota-list.component";
import { AnggotaComponent } from './anggota/anggota.component';
import {HttpClientModule} from "@angular/common/http";
import { AnggotaAddComponent } from './anggota/anggota-add/anggota-add.component';
import { AuthComponent } from './auth/auth.component';
import {AuthService} from "./auth/auth.service";


@NgModule({
  declarations: [
    AppComponent,
    TemanComponent,
    TemanAddComponent,
    TemanListComponent,
    HoverHighlightDirective,
    ContactUsComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    AnggotaListComponent,
    AnggotaComponent,
    AnggotaAddComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
