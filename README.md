# Flight Search Coding Challenge Introduction

##### Author : ChihYing Chang (Jill)
##### Date: Jun-30-2019

## 0. How to run the application

Before running the application, Please make sure you have Angular(8.0.6), Node(10.16.0) and Express installed.

1. Backend



2. Frontend


## 1. Task:

This programming task consists of building a simple web application to search for flights. Fork this repository and create your application. It should take this input from the user:

(Flight Number ||  (Origin && Destination)) && Date

The application will call a service that you create using either Node with Express or Java with Spring MVC. I have provided some sample data for the application in this file 

[Flight Documents](./flight-docs/flight-sample.json)

The file contains an array whose elements represent flights. The data should be defined as a constant in your service. 

You must use Angular 4 or higher. Style however you would like. You have total freedom to do what you want but make sure it can do these two things:

	• Validate that the user has provided the right criteria to make a search 
	• Neatly display the results

Create a pull request once you have it working. I will clone your repository, verify that it works, and evaluate it.

## 2. Functionality:

1. [Search Screen](https://ibb.co/s3HZMzX)

This search form takes this input rule  ``` (Flight Number ||  (Origin && Destination)) && Date ``` from the user and validates the input to make a search.

2. [Result Screen](https://ibb.co/LNFrpDq) 

This page displays the results of flights. Click the header of the table changes the sort order of the results.

## 3. Technology Stack:
3.1 Frontend
- JavaScript ES6
- Angular 8
- Bootstrap
- Angular material
- HttpClient
    
3.2 Backend
- Node.js 10
- Express
- CORS

## 4. Referance 
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
