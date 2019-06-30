# simpleFlightSearch
I want to asses your ability to create a web application and web service. It truly is the bare minimum of knowledge necessary to be successful in this position. I don't want you to spend a lot of time on this. You should be able to do this in a few hours if the job is right for you.

### Flight Search

This programming task consists of building a simple web application to search for flights. Fork this repository and create your application. It should take this input from the user:

(Flight Number ||  (Origin && Destination)) && Date

The application will call a service that you create using either Node with Express or Java with Spring MVC. I have provided some sample data for the application in this file 


[Flight Documents](./flight-docs/flight-sample.json)



The file contains an array whose elements represent flights. The data should be defined as a constant in your service. 


You must use Angular 4 or higher. Style however you would like. You have total freedom to do what you want but make sure it can do these two things:

	• Validate that the user has provided the right criteria to make a search 
	• Neatly display the results

Create a pull request once you have it working. I will clone your repository, verify that it works, and evaluate it.

### Referance 
1. Bootstrap table sort
https://mdbootstrap.com/docs/jquery/tables/sort/
2. Angular material table
https://material.angular.io/components/table/overview
3. CORS problem of the server configuration
https://github.com/angular/angular/issues/6583
https://medium.com/@jpatwa/node-js-express-cors-api-call-in-angular-6-937e50a4f9ff
4. maxlength ignored for input type=“number” in Chrome
https://stackoverflow.com/questions/18510845/maxlength-ignored-for-input-type-number-in-chrome
5. Moment format
https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/
6. 21 Free Booking Form Templates To Help You Serve Better 2019
https://colorlib.com/wp/free-booking-form-templates/