# Quick Survey
## A Demonstration App by Joe Belmonte

[Link to the deployed app](https://quicksurvey-joe-belmonte.herokuapp.com/)

### Overview

Quick Survey is a practice application that I wrote in conjunction with a Udemy course I took called "Node with React: Fullstack Web Development."

The purpose of the application is to allow a user to send a 1 question yes or no survey to an arbitray number of respondents.  Each survey costs 1 credit, and credits can be purchased via Stripe at $5 increments ($5 for 5 credits).  Since the app is for demonstration purposes only, the Stripe API is in test mode only and will accept a credit card number of 4242-4242-4242-4242.

Upon publishing a survey, respondents will receive an email sent via [SendGrid](https://sendgrid.com) containing the question and separate links to click for responses of "yes" or "no".  Responses are recorded by SendGrid and funneled back to the application where they are saved in a MongoDB database hosted on [mlab](https://mlab.com).

Within the application, the user can review all surveys and the results as they come in.

### Technologies Used:

#### Front End

* React
* Redux
* React-router
* Redux-form
* React-easy-chart (for the pie chart)

#### Back End

* Node
* Express
* Mongoose
* MongoDB

#### Authentication and Payments

* Google OAuth
* Passport
* Stripe
* React-stripe-checkout

#### Misc.

* SendGrid
* mlab
* Prettier
* Concurrently
* LocalTunnel


### Screen Shot of the app

![Screen Shot](/quick_survey_screen_shot.png "Quick Survey Screen Shot")
