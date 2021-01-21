export class Ticket {
    ticketName: string
    ticketPriceInCents: number
    ticketAmount: number
    ticketValidDate: moment.Moment[]
    whoPays: "organiser" |  "customer"
}