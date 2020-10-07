import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { DetailsService } from '../services/details.service';
import {NgsRevealConfig} from 'ngx-scrollreveal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  detailsForm: FormGroup
  checkForm: boolean
  successfullSignup: boolean
  duplicateEmailError: boolean
  rejectedEmailError: boolean

  constructor(
    private detailsService: DetailsService,
    private spinner: NgxSpinnerService,
    private config: NgsRevealConfig
  ) {
    this.successfullSignup = false
    this.checkForm = false
    this.duplicateEmailError = false
    this.rejectedEmailError = false
    this.detailsForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required])
    })
    config.duration = 500;
    config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    config.reset = true
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  redirectTo = (website) => {
    console.log(website);
    
    
    switch(website) {
      case "linkedIn":  
        window.open('https://www.linkedin.com/company/tickevents', '_blank')
        break;
      case "facebook":
        window.open("https://www.facebook.com/TickEvents-109045754247458/?view_public_for=109045754247458", "_blank")
        break;
    }
  }

  sendDetais = () => {
    this.checkForm = true;
    this.duplicateEmailError = false
    this.rejectedEmailError = false

    if (this.detailsForm.valid) {
      this.spinner.show()

      this.detailsService.sendDetails(this.detailsForm.value).subscribe(result => {
        this.spinner.hide()
        this.successfullSignup = true

      }, error => {
        this.spinner.hide()

        if (error.error.type == "MailchimpError") {
          
          switch (error.error.message) {
            case "Member Exists": {
              this.duplicateEmailError = true
              break
            }
            case "Invalid Resource": {
              this.rejectedEmailError = true
              break
            }
          }
        }
      })
    }
  }

  get email() { return this.detailsForm.get('email') }
  get firstname() { return this.detailsForm.get('firstname') }
  get lastname() { return this.detailsForm.get('lastname') }

}
