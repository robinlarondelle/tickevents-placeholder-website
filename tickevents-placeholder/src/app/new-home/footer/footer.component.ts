import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { DetailsService } from 'src/app/services/details.service';

@Component({
  selector: 'app-new-home-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class NewHomeFooterComponent {
  
  detailsForm: FormGroup
  checkForm: boolean
  successfullSignup: boolean
  duplicateEmailError: boolean
  rejectedEmailError: boolean
  serverError: boolean
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
    })
  }

  sendDetails = () => {
    this.checkForm = true;
    this.duplicateEmailError = false
    this.rejectedEmailError = false
    this.serverError = false

    if (this.detailsForm.valid) {
    console.log(1);
    this.spinner.show()

      this.detailsService.sendDetails(this.detailsForm.value).subscribe(result => {
        console.log(result);
        
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
        } else {
          this.serverError = true
        }
      })
    }
  }

  get email() { return this.detailsForm.get('email') }
  get privacystatement() { return this.detailsForm.get('privacystatement') }
}
