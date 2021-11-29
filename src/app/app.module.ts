import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatSliderModule} from "@angular/material/slider";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserListComponent } from './components/user-list/user-list.component';
import { DonationRequestComponent } from './components/donation-request/donation-request.component';
import { DonationRequestsListComponent } from './components/donation-requests-list/donation-requests-list.component';
import { TopContributorsComponent } from './components/top-contributors/top-contributors.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { AskForDonationComponent } from './components/ask-for-donation/ask-for-donation.component';
import { DonateComponent } from './components/donate/donate.component';
import { DonationClaimsListComponent } from './components/donation-claims-list/donation-claims-list.component';
import { DonationClaimComponent } from './components/donation-claim/donation-claim.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    AboutComponent,
    PageNotFoundComponent,
    HeaderComponent,
    UserListComponent,
    DonationRequestComponent,
    TopContributorsComponent,
    DonationRequestsListComponent,
    UserViewComponent,
    AskForDonationComponent,
    DonateComponent,
    DonationClaimsListComponent,
    DonationClaimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatSliderModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
