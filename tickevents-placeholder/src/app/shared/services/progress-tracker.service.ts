import { Injectable } from "@angular/core"
import { Router, NavigationEnd } from "@angular/router"
import { BehaviorSubject } from "rxjs"
import { CreateEventState, EventDetailsState, TicketDetailsState, PersonalDetailsState } from "src/app/shared/models/states"

// This service could be heavily improved if the State Pattern was applied in the relevant components
@Injectable({ 
  providedIn: 'root'
})

/**
 * This service watches URL updates in the "create-event" flow
 */
export class ProgressTrackerService {
  mainState: BehaviorSubject<CreateEventState>
  subState: BehaviorSubject<EventDetailsState | TicketDetailsState | PersonalDetailsState>

  constructor(
    private router: Router
  ) {
    this.mainState = new BehaviorSubject(CreateEventState.CREATE_EVENT)
    this.subState = new BehaviorSubject(EventDetailsState.EVENT_NAME)

    this.router.events.subscribe(events => {
      if (events instanceof NavigationEnd) {
        let urlSections = events.url.split("/")
        urlSections.shift()

        //First check if we're in the create-event flow
        if (urlSections[0] == "create-event") {

          //Next determine what state we're in
          switch (urlSections[1]) {
            case CreateEventState.CREATE_EVENT:
              this.mainState.next(CreateEventState.CREATE_EVENT)

              switch (urlSections[2]) {
                case EventDetailsState.EVENT_NAME:
                  this.subState.next(EventDetailsState.EVENT_NAME)
                  break
                case EventDetailsState.EVENT_DATETIME:
                  this.subState.next(EventDetailsState.EVENT_DATETIME)
                  break
                case EventDetailsState.EVENT_LOCATION:
                  this.subState.next(EventDetailsState.EVENT_LOCATION)
                  break
              }
              break 

            case CreateEventState.CREATE_TICKETS:
              this.mainState.next(CreateEventState.CREATE_TICKETS)

              switch (urlSections[2]) {
                case TicketDetailsState.TICKET_NAME:
                  this.subState.next(TicketDetailsState.TICKET_NAME)
                  break
                case TicketDetailsState.TICKET_AMOUNT:
                  this.subState.next(TicketDetailsState.TICKET_AMOUNT)
                  break
                case TicketDetailsState.TICKET_DATE:
                  this.subState.next(TicketDetailsState.TICKET_DATE)
                  break
                case TicketDetailsState.TICKET_OVERVIEW:
                  this.subState.next(TicketDetailsState.TICKET_OVERVIEW)
                  break
              }
              break

            case CreateEventState.CREATE_PERSONAL_DETAILS:
              this.mainState.next(CreateEventState.CREATE_PERSONAL_DETAILS)

              switch (urlSections[2]) {
                case PersonalDetailsState.PERSONAL_DATA:
                  this.subState.next(PersonalDetailsState.PERSONAL_DATA)
                  break
                case PersonalDetailsState.PERSONAL_OVERVIEW:
                  this.subState.next(PersonalDetailsState.PERSONAL_OVERVIEW)
                  break
              }
              break

            case CreateEventState.OVERVIEW:
              this.mainState.next(CreateEventState.OVERVIEW)

              //Overview has no substates
              break
          }
        }
      }
    })
  }
}
