import { Component, OnInit } from '@angular/core';
import {DonationService} from "../../service/donation.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedIn = undefined

  constructor(private donationService: DonationService) { }

  ngOnInit(): void {
    this.loggedIn = this.donationService.isLoggedIn;
  }

}
