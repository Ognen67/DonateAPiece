import { Component, OnInit } from '@angular/core';
import {DonationService} from "../donation.service";
import {Donation} from "../model/Donation";

@Component({
  selector: 'app-donation-requests-list',
  templateUrl: './donation-requests-list.component.html',
  styleUrls: ['./donation-requests-list.component.css']
})
export class DonationRequestsListComponent implements OnInit {

  donationRequests: Donation[] = []

  constructor(private donationService: DonationService) { }

  ngOnInit(): void {
    this.donationRequests = this.donationService.donationRequests
  }

}
