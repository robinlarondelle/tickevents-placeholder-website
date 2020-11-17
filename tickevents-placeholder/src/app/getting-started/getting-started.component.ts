import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { Title } from '@angular/platform-browser';
import { tns } from "tiny-slider/src/tiny-slider"
import { SendEmailStatuses } from '../shared/models/sendEmailStatusesEnum';
import { EmailService } from '../shared/services/email.service';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css']
})
export class GettingStartedComponent implements OnInit {
  detailsForm: FormGroup
  checkForm: boolean
  successfullSignup: boolean
  duplicateEmailError: boolean
  rejectedEmailError: boolean

  scrollUp = {
    origin: 'bottom',
    distance: '50%',
    scale: 1,
    duration: 700,
    reset: false,
    viewFactor: 1
  }

  constructor(
    private emailService: EmailService,
    private titleService: Title,
    private spinner: NgxSpinnerService,
  ) {
    this.successfullSignup = false
    this.checkForm = false
    this.duplicateEmailError = false
    this.rejectedEmailError = false
    this.detailsForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
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

  sendDetails = () => {
    this.checkForm = true;
    this.duplicateEmailError = false
    this.rejectedEmailError = false

    if (this.detailsForm.valid) {
      this.spinner.show()

      console.log('sending form data');
      
      this.emailService.sendEmail(this.detailsForm.value).subscribe(sendEmailStatus => {
        console.log('Received server response with error ' + sendEmailStatus);
        this.spinner.hide()

        switch (sendEmailStatus) {
          case SendEmailStatuses.SUCCESS: {
            console.log('adding success to params');
            
            this.addSendEmailStatusToQueryParams("success")
            this.successfullSignup = true
            break
          }
          case SendEmailStatuses.DUPLICATE_EMAIL: {
            console.log('adding duplicate_email to params');
            
            this.duplicateEmailError = true
            this.addSendEmailStatusToQueryParams("duplicateEmail")
            break
          }
          default: {
            console.log('adding serverError to params');

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
