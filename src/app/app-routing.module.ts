import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";
import {LoginComponent} from "./login/login.component";
import {AboutComponent} from "./about/about.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {UserViewComponent} from "./user-view/user-view.component";
import {AskForDonationComponent} from "./ask-for-donation/ask-for-donation.component";
import {DonateComponent} from "./donate/donate.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user-view/:id', component: UserViewComponent },
  { path: 'ask-for-donation', component: AskForDonationComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
