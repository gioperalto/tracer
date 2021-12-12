# Tracer

Tracer is a COVID-19 contact tracing application designed for patients (users) to self-report their visited locations. If a patient has caught the COVID-19 virus they can report an exposure, then all users at shared locations within a week of that exposure are alerted.

## Tech stack

This app is decoupled, meaning the frontend, backend, and database, of the application can live independently. However, instead of putting the frontend and API subdomains into separate repository it made more sense to consolidate them. The app also uses the Google Maps Geocoding API and provides the ability for a user to populate the latitude/longitude data based on the location name/address.

### Backend
- [NodeJS](https://nodejs.org/en/) - This project was built using Node v16.13.0
- [NestJS](https://nestjs.com/) - NestJS is a NodeJS framework that fully supports TypeScript and uses Express under the hood.
- [TypeORM](https://typeorm.io/) with MySQL - NestJS has TypeORM support, which allows one to use object-relational mapping as a way to interact with a relational DB without having to use SQL directly.

### Frontend
- [AngularJS](https://angularjs.org/) - The project was built using Angular v13.0.1
- [Angular Material](https://material.angular.io/) - Angular Material is Material design applied to AngularJS. It contains a myriad of components and style options for an elegant user experience.

## Startup (Initialization)

### Prereqs
1. You'll need [NPM](https://www.npmjs.com/) to install dependencies and launch the API
2. You'll also need [Angular CLI](https://angular.io/cli) to launch the UI
3. You may want to configure the JWT secret in `api/src/auth/constants.ts`

### API (NestJS)
1. Navigate to the `api` folder
2. Run `npm install`
2. Run `npm start` (prod) or `npm run start:dev` (dev) to launch the API
5. The API will be available at http://localhost:3000

### Database (MySQL)
1. Configure the database options in `api/src/config/constants.ts`
2. This project has been tested and works with MySQL (results may vary with others)
3. Ensure your MySQL server is running

### Frontend (AngularJS)
1. Navigate to the `api` folder
2. Run `npm install`
2. Run `ng serve` to launch the UI
5. The API will be available at http://localhost:4200

### Google Maps (Geocoding) API
1. Set up a Google Cloud Platform project (if you don't have one already)
2. Generate a Geocoding API key (if you don't have one already)

### Configuration
Go into `frontend/environments` and update:
  - `frontend/environments/environment.ts`
  - `frontend/environments/environment.prod.ts`

These files contain configuration information for both the Tracer API and the Google Geocoding API. In development, the Tracer API will point to `http://localhost:3000` (default URL).

The `environment.ts` files will look like this (image below). Replace `GEOCODING-API-KEY` with your API key.
![Alt](/images/google-maps-config.png "Google Maps configuration")

## Splash Page
By clicking "Get Started" or "Login" a patient can create an account if they do not have one already.
![Alt](/images/splash-page.png "Splash Page")

## Home Page (User 1)
Once logged in, the "Home" page shows a patient's profile information in addition to whether or not they've been exposed to COVID-19. Patients can also click "Update Info" or "Change Password" to make changes to their accounts.
![Alt](/images/home-page-1.png "Home Page (User 1)")

## Locations Page
Patients can add previously visited locations to the "Locations" page. This will create the location in the database and record all patients who have to the location on that day.
![Alt](/images/locations-page.png "Locations Page")

## Exposures Page
If a patient has tested positive for COVID-19, they can report this on the "Exposures" page. By reporting an exposure, Tracer will notify all other patients that were at the same place on the same day within the past week of catching the virus.
![Alt](/images/exposures-page.png "Exposures Page")

## Home Page (User 2)
Our other patient, Jane Doe, who was at Google HQ on the same day as John Doe, has been notified that she may have been exposed to COVID-19 after John reported his exposure to COVID-19.
![Alt](/images/home-page-2.png "Home Page (User 2")
