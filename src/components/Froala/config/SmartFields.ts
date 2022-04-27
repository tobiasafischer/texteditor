const Clients = {
   'Client Full Name': 'client.name',
   'Client First Name': 'client.firstName',
   'Client Last Name': 'client.lastName',
   'Client Email': 'client.email',
   'Client  Phone': 'client.phone',
   'Client Alt Contact First': 'client.altContact.firstName',
   'Client Alt Contact Last': 'client.altContact.lastName',
   'Client Alt Email': 'client.altContact.email',
   'Client Alt Phone': 'client.altContact.phone',
   'Client Company Name': 'client.company.name',
   'Client Address': 'client.address | address',
   'Client Address - Compact': 'client.address | address : true',
   'Client Shipping Address': 'client.shippingAddress | address',
}

const Project = {
   'Project Title': 'job.title',
   'Project Start': 'job.start | mediumDate',
   'Project Start Time': 'job.start | shortTime',
   'Project End': 'job.end | mediumDate',
   'Project End Time': 'job.end | shortTime',
   'Project Address': 'job.address | address',
   'Project Location Name': 'job.address | addressLocationName',
   'Project Location Contact Name': 'job.contactName',
}

const Link = {
   'Invoice Link': 'job | invoiceLink',
   'Contract Link': 'job | contractLink',
   'Portal Link': 'client | portalLink',
}

const Form = {
   'Form Title': 'form.title',
   'Form Link': 'form | formLink',
   'Form Type': 'form.kind',
   'Form Expiration Date': 'form.expiryDate | mediumDate',
}

const Invoice = {
   'Invoice Total': 'job.invoice | total',
   'Invoice Tax Total': 'job.invoice | invoiceTaxTotalFormatted',
   'Invoice Remainder': 'job.invoice | remainder',
   'Invoice Amount Paid': 'job.invoice | paid',
   'Invoice Discount': 'job.invoice | discountTotalFormatted',
   'Invoice Item Names & Amounts': 'job.invoice | packageItems:true',
   'Invoice Item Names & Descriptions': 'job.invoice | invoiceItemNamesDesc',
   'Invoice Item Names': 'job.invoice.items | packageItemNames',
   'Invoice Number': 'job.invoice.number',
   'Invoice Payment Plan': 'paymentSchedule | paymentScheduleFilter',
   'Invoice Title': 'job.invoice.title',
}

const Payment = {
   'Payment Plan Due Date': 'scheduledPayment | paymentDueDate : job',
   'Payment Plan Due Date - Simple': 'scheduledPayment | paymentDueDate : job : true',
   'Payment Plan Amount Due':
      'scheduledPayment | paymentAmountDue : job.invoice.schedule : job.invoice',
   'Payment Plan Amount - Simple':
      'scheduledPayment | paymentAmountDueSimple : job.invoice.schedule : job.invoice',
}

const User = {
   'User Full Name': 'user.name',
   'User First Name': 'user.contact.firstName',
   'User Last Name': 'user.contact.lastName',
   'Business Email': 'brand.email',
   'Brand Phone': 'brand.phone',
   'Brand Logo': 'brand.logo | logo',
   'Brand Name': 'brand.name',
   'Brand Address': 'brand.address | address',
   'Brand Email Signature': 'brand.emailTemplate.signature',
}

const Date = {
   'Date & Time': 'curDate | medium',
   'Long Date': 'curDate | longDate',
   'Medium Date': 'curDate | mediumDate',
   'Short Date': 'curDate | shortDate',
   Time: 'curDate | shortTime',
}

const Package = {
   'Package Name': 'package.name',
   'Package Total With Tax': 'package.items | invoiceTotal : false | currency',
   'Package Total No Tax': 'package.items | invoiceTotal : true | currency',
   'Package Tax Total': 'package.items | invoiceTaxTotal | currency',
   'Package Items Names & Amounts': 'package.items | packageItems',
   'Package Item Names & Descriptions': 'package.items | packageItemNamesDesc',
   'Package Item Names': 'package.items | packageItemNames',
}

const Appointment = {
   'Appointment Name': 'appointment.title',
   'Appointment Location': 'appointment.location',
   'Appointment Duration': 'appointment.duration | duration',
   'Appointment Start Date': 'appointment.start | mediumDate',
   'Appointment End Date': 'appointment.end | mediumDate',
   'Appointment Start Time': 'appointment.start | shortTime',
   'Appointment End Time': 'appointment.end | shortTime',
   'Appointment Cancellation Reason': 'appointment.cancelled.reason',
   'Appointment Reschedule Button': 'appointment | appointmentRescheduleBtn',
   'Appointment Cancel Button': 'appointment | appointmentCancelBtn',
   'Appointment Conferencing Link': 'appointment | appointmentConferencingLink',
   'Appointment Add to Calendar Link': 'appointment | calendarLink',
}

export const fields = {
   Clients,
   Project,
   Link,
   Form,
   Invoice,
   Payment,
   User,
   Date,
   Package,
   Appointment,
}
