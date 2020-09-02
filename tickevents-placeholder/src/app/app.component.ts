import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { DetailsService } from './services/details.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  detailsForm: FormGroup
  checkForm: boolean
  successfullSignup: boolean
  duplicateEmailError: boolean
  rejectedEmailError: boolean

  constructor(
    private detailsService: DetailsService,
    private spinner: NgxSpinnerService
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
          switch (error.error.message.title) {
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
