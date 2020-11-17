import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { SendEmailStatuses } from 'src/app/shared/models/sendEmailStatusesEnum';
import { EmailService } from 'src/app/shared/services/email.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  detailsForm: FormGroup
  checkForm: boolean
  successfullSignup: boolean
  duplicateEmailError: boolean
  rejectedEmailError: boolean
  serverError: boolean
  constructor(
    private emailService: EmailService,
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

    if (this.detailsForm.valid) {
      this.spinner.show()

      this.emailService.sendEmail(this.detailsForm.value).subscribe(sendEmailStatus => {
        this.spinner.hide()

        switch (sendEmailStatus) {
          case SendEmailStatuses.SUCCESS: {
            this.addSendEmailStatusToQueryParams("success")
            this.successfullSignup = true
            break
          }
          case SendEmailStatuses.DUPLICATE_EMAIL: {
            this.duplicateEmailError = true
            this.addSendEmailStatusToQueryParams("duplicateEmail")   
            break
          }
          default: {
            this.rejectedEmailError = true
            this.addSendEmailStatusToQueryParams("serverError")
            break
          }
        }
      })
    }
  }

  // This piece of code is responsible for triggering a Google Tag Manager event
  private addSendEmailStatusToQueryParams = (status: String) =>
    (window as any).dataLayer.push({ event:'Send Email', sendEmail: status })

  get email() { return this.detailsForm.get('email') }
  get privacystatement() { return this.detailsForm.get('privacystatement') }
}
