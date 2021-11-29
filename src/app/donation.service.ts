import { Injectable } from '@angular/core';
import {User} from "./model/User";

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  users = [
    new User("Ognen", "Todorovski", "asd@asd.com", "qwerty"),
    new User("Ognen", "Todorovski", "asd@asd.com", "qwerty"),
    new User("Ognen", "Todorovski","asd@asd.com", "qwerty"),
    new User("Ognen", "Todorovski", "asd@asd.com", "qwerty"),
    new User("Ognen", "Todorovski", "asd@asd.com", "qwerty"),
  ]

  constructor() { }
}
