import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {DonationService} from "../donation.service";
import {Donation} from "../model/Donation";

@Component({
  selector: 'app-ask-for-donation',
  templateUrl: './ask-for-donation.component.html',
  styleUrls: ['./ask-for-donation.component.css']
})
export class AskForDonationComponent implements OnInit {

  askForDonationForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder,
              private donationService: DonationService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.askForDonationForm.value)
    this.donationService.donationRequests.push(new Donation(this.askForDonationForm.value.title, this.askForDonationForm.value.description))
  }

}
