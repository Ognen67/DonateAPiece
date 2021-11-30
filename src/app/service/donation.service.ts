import { Injectable } from '@angular/core';
import {User} from "../model/User";
import {Donation} from "../model/Donation";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  isLoggedIn = false

  users = [
    new User("Ognen", "Todorovski", "asd@asd.com", "qwerty"),
    new User("asd", "Todorovski", "asd@asd.com", "qwerty"),
    new User("dsa", "Todorovski","asd@asd.com", "qwerty")
  ]

  donationRequests = [
    new Donation("Kaput", "Enter Description Here"),
    new Donation("Kaput", "Enter Description Here"),
    new Donation("Kaput", "Enter Description Here"),
    new Donation("Kaput", "Enter Description Here")
  ]

  donationsToClaim = [
    new Donation("Tanktop", "Enter Description Here"),
    new Donation("Maica", "Enter Description Here"),
    new Donation("Bluza po dolgi", "Enter Description Here"),
  ]

  constructor(private router: Router) { }

  login(loginInfo: User) {
    console.log(loginInfo)
    if(this.users[0].name == loginInfo.name && this.users[0].password == loginInfo.password) {
      this.isLoggedIn = true
      this.router.navigateByUrl("/home")
    }
  }
}
