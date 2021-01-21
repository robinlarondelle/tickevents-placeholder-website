import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { Event } from "./EventModel";

export class CreateEventForm {
    eventName = new FormControl()
    eventStartDate = new FormControl()
    eventEndDate = new FormControl()
    eventStartTime = new FormControl()
    eventEndTime = new FormControl()
    eventLocation = new FormGroup({})
    multiDayEvent = new FormControl()
    onlineEvent = new FormControl()
    tickets = new FormArray([])
    personalDetails = new FormGroup({})

    constructor(event?: Event) {
        if (event) {
            if (event.eventName) this.eventName.setValue(event.eventName)
            if (event.eventStartDate) this.eventStartDate.setValue(event.eventStartDate)
            if (event.eventEndDate) this.eventEndDate.setValue(event.eventEndDate)
            if (event.eventStartTime) this.eventStartTime.setValue(event.eventStartTime)
            if (event.eventEndTime) this.eventEndTime.setValue(event.eventEndTime)
            if (event.eventLocation) this.eventLocation.setValue(event.eventLocation)
            if (event.multiDayEvent) this.multiDayEvent.setValue(event.multiDayEvent)
            if (event.onlineEvent) this.onlineEvent.setValue(event.onlineEvent)
            if (event.tickets) this.tickets.setValue(event.tickets)
            if (event.personalDetails) this.personalDetails.setValue(event.personalDetails)
        }
    }
}