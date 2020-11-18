import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmailService } from 'src/app/shared/services/email.service';
import { DetailsModel } from '../../models/detailsModel';
import { ServerResponse } from '../../models/serverResponseEnum';

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

			this.emailService.sendDetails(this.detailsForm.value as DetailsModel).subscribe(sendDetailsStatus => {
				this.spinner.hide()
				switch (sendDetailsStatus) {
					case ServerResponse.SUCCESS: {
						this.addSendEmailStatusToQueryParams("success")
						this.successfullSignup = true
						break
					}
					case ServerResponse.DUPLICATE_EMAIL: {
						this.duplicateEmailError = true
						this.addSendEmailStatusToQueryParams("duplicateEmail")
						break
					}
					case ServerResponse.INVALID_BODY || ServerResponse.INVALID_RESOURCE || ServerResponse.EMAIL_MISSING_IN_BODY: {
						this.rejectedEmailError = true
						this.addSendEmailStatusToQueryParams("serverError")
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
