export class DetailsModel {
    firstname?: String
    lastname?: String
    email: String

    constructor(email: String, firstname?: String, lastname?:String) {
        this.email = email
        this.firstname = firstname
        this.lastname = lastname
    }
}