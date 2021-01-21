import * as moment from "moment"
import { EventLocation } from "./EventLocationModel"
import { PersonalDetails } from "./PersonalDetailsModel"
import { Ticket } from "./TicketModel"

export class Event {
    eventName: string
    eventStartDate: Date
    eventEndDate: Date
    eventStartTime: moment.Moment
    eventEndTime: moment.Moment
    eventLocation: EventLocation | undefined
    multiDayEvent: boolean
    onlineEvent: boolean
    tickets: Ticket[]
    personalDetails: PersonalDetails

    constructor() {
        this.multiDayEvent = false
        this.onlineEvent = false
    }
}