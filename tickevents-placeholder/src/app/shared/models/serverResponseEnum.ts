export enum ServerResponse {
    MAILCHIMP_ERROR = "mailchimpError",
    INVALID_BODY = "invalidBody",
    EMAIL_MISSING_IN_BODY = "emailMissingInBody",
    DUPLICATE_EMAIL = "Member Exists",
    INVALID_RESOURCE = "Invalid Resource",
    SUCCESS = "Success"
}