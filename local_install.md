## Local Installation

# .env file Core Functionality
You will need a .env folder with the following information for the core functionality to work properly. 

A Google Maps API Key can be aquired here: https://developers.google.com/maps/
A MongoDB database can be created here: https://www.mongodb.com/

NEXT_PUBLIC_GOOGLE_MAPS_API_KEY= ** Your Google Maps API Key Here **
MONGODB_URI= ** Your MongoDB URI Here ** 
NEXT_PUBLIC_BASE_URL=http://localhost:3000

## Twilio SMS Functionality (Optional)
A Twilio account can be created here: https://www.twilio.com/
I recommend considering not using the SMS functionality as it will cost money and significant setup time to send SMS message notifications. You will have to sign up and purchase a phone number to send SMS messages. You will also need to verify your personal phone number to send SMS messages to it. Additionally, there is an application process to send SMS messages to other phone numbers. This application process can take up to 2 weeks to complete. 
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=


## Dependencies
Please run `npm install` to install all dependencies.

If you would like to run the testing suite please run `npm install --save-dev` to install all dev dependencies. Then run `npm test` to run the testing suite.

## Populating MongoDB Database with Driver, Constructor, and Track Information
In the root layout.js file(/app/layout.js), there is a function called initialConnectToDB. This function will populate the database with the driver, constructor, and track information. This function will only run if the database is empty. If you would like to run this function, please uncomment the function call in the layout.js file on line 71 and save. 

## Running the application locally
Please run `npm run dev` to run the application locally. The application will be available at http://localhost:3000

## Running the application locally with a production build
Please run `npm run build` to build the application. Then run `npm run start` to run the application locally. The application will be available at http://localhost:3000

## Lastly: enjoy!



