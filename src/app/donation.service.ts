import { Injectable } from '@angular/core';
import {User} from "./model/User";
import {Donation} from "./model/Donation";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  users = [
    new User("Ognen", "Todorovski", "asd@asd.com", "qwerty"),
    new User("asd", "Todorovski", "asd@asd.com", "qwerty"),
    new User("dsa", "Todorovski","asd@asd.com", "qwerty"),
    new User("bcs", "Todorovski", "asd@asd.com", "qwerty"),
    new User("qwe", "Todorovski", "asd@asd.com", "qwerty"),
  ]

  donationRequests = [
    new Donation("Kaput", "Ubav crn kaput za vo zima, nosen 6 meseci"),
    new Donation("Kaput", "Ubav crn kaput za vo zima, nosen 6 meseci"),
    new Donation("Kaput", "Ubav crn kaput za vo zima, nosen 6 meseci"),
    new Donation("Kaput", "Ubav crn kaput za vo zima, nosen 6 meseci")
  ]

  donationsToClaim = [
    new Donation("Tanktop", "crn tanktop za bilderi odlichen pogotovo so dobro ramo"),
    new Donation("Maica", "Ubav crn kaput za vo zima, nosen 6 meseci"),
    new Donation("Bluza po dolgi", "Ubav crn kaput za vo zima, nosen 6 meseci"),
  ]

  constructor(private router: Router) { }

  login(loginInfo: User) {
    console.log(loginInfo)
    if(this.users[0].name == loginInfo.name && this.users[0].password == loginInfo.password) {
      console.log("Navigate!")
      this.router.navigateByUrl("/home")
    }
  }
}
