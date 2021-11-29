import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {DonationService} from "../../service/donation.service";

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  donateForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder,
              private donationService: DonationService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.donationService.donationsToClaim.push(this.donateForm.value)
  }

}
