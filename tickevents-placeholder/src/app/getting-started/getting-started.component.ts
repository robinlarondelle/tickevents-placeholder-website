import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { Title } from '@angular/platform-browser';
import { EmailService } from '../shared/services/email.service';
import { DetailsModel } from '../shared/models/detailsModel';
import { animate, style, transition, trigger } from '@angular/animations';
import { ServerResponse } from '../shared/models/serverResponseEnum';
declare var Rellax
@Component({
	selector: 'app-getting-started',
	templateUrl: './getting-started.component.html',
	styleUrls: ['./getting-started.component.css'],
	animations: [
		trigger(
			'inOutAnimation',
			[
				transition(
					':enter',
					[
						style({ height: 0, opacity: 0 }),
						animate('0.3s ease-out',
							style({ height: "*", opacity: 1, margin: "*" })
						)
					]
				),
				transition(
					':leave',
					[
						style({ height: "*", opacity: 1 }),
						animate('0.3s ease-in',
							style({ height: 0, opacity: 0, margin: "*" })
						)
					]
				)
			]
		)
	]
})
export class GettingStartedComponent implements OnInit {
	detailsForm: FormGroup
	checkForm: boolean
	successfullSignup: boolean
	duplicateEmailError: boolean
	rejectedEmailError: boolean
	serverError: boolean;

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
			firstname: new FormControl('', [Validators.required]),
			lastname: new FormControl('', [Validators.required]),
		})
	}

	ngOnInit(): void {
		this.titleService.setTitle("Tickevents | Aan de slag")
		var rellax = new Rellax('.rellax');
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
					case ServerResponse.INVALID_RESOURCE: {
						this.rejectedEmailError = true
						this.addSendEmailStatusToQueryParams("invalidResource")
						break
					}
					case ServerResponse.INVALID_BODY || ServerResponse.EMAIL_MISSING_IN_BODY: {
						this.serverError = true
						this.addSendEmailStatusToQueryParams("serverError")
						break
					}
				}
			})
		}
	}

	// This piece of code is responsible for triggering a Google Tag Manager event
	private addSendEmailStatusToQueryParams = (status: String) =>
		(window as any).dataLayer.push({ event: 'Send Email', sendEmail: status })

	get email() { return this.detailsForm.get('email') }
	get firstname() { return this.detailsForm.get('firstname') }
	get lastname() { return this.detailsForm.get('lastname') }
}
