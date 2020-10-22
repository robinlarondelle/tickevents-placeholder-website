import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { DetailsService } from '../services/details.service';
import { Title } from '@angular/platform-browser';
import { tns } from "tiny-slider/src/tiny-slider"

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css']
})
export class GettingStartedComponent implements OnInit  {
  detailsForm: FormGroup
  checkForm: boolean
  successfullSignup: boolean
  duplicateEmailError: boolean
  rejectedEmailError: boolean

  constructor(
    private detailsService: DetailsService,
    private titleService: Title,
    private spinner: NgxSpinnerService
  ) {
    this.successfullSignup = false
    this.checkForm = false
    this.duplicateEmailError = false
    this.rejectedEmailError = false
    this.detailsForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      privacystatement: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.titleService.setTitle("Tickevents | Aan de slag")

    tns({
      container: '.my-slider',
      items: 1,
      slideBy: 1,
      controls: false,
      nav: false,
      speed: 300,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayButton: false,
      autoplayButtonOutput: false,
      axis: 'vertical' 
    });    
  }

  sendDetais = () => {
    console.log(this.privacystatement.value);
    
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
  get privacystatement() { return this.detailsForm.get('privacystatement') }
}
