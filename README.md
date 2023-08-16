# Formula 1 Pitstop

## About
Deployed on Vercel at: https://formula-1-pitstop.vercel.app/
#
This application provides users with real time information related to Formula 1's standings and schedule. A user can sign up for a SMS notification for notification before a race is about to begin. Additional information can be found about each driver, team, and track from the current 2023 season. The latest news for drivers, teams, and f1 as whole can be viewed via the embedded X(Twitter) timelines. The application was designed with a mobile first approach and is highly responsive.

## Technologies Used:
NextJS 13 (Using app router)
Twilio API
Twitter Embed Api
Tailwind Css
Jest

## Usage and Features:
1. Users can view the current standings for the 2023 season.
2. Users can view the current schedule for the 2023 season.
3. Users can view information about each driver, team, and track.
4. Users can sign up for a SMS notification before the race starts.
5. Users can see the latest tweet via the drivers, teams, and f1 twitter accounts.

## Images of the application:
# Dark Mode:
![Dark Mode]()

# Light Mode:
![Light Mode]()

## How to run locally:
You will need a .env folder with the following information.
A Google Maps API Key can be aquired here:

NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
MONGODB_URI=
NEXT_PUBLIC_BASE_URL=http://localhost:3000

## Testing:
Unit tests were created using jest for core features that have more complex working logic. To run unit tests use the command: `npm test`


## Future Improvements:
1. Add additional story information for some tracks. Current blocker: API does not provide this information.

Please feel free to reach out to me at bmklei8p@gmail.com if you have any feature requests or bug reports.



