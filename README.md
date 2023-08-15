# Formula 1 Pitstop

## About
Deployed on Vercel at: https://formula-1-pitstop.vercel.app/
This application provides users with real time information related to Formula 1's standings and schedule. Additional information can be found about each driver, team, and track from the current 2023 season. The application was designed with a mobile first approach and is highly responsive

## Technologies Used:
NextJS 13 (Using app router)
Tailwind Css
Jest

## How to run locally:
You will need a .env folder with the following information.
A Google Maps API Key can be aquired here:

NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
MONGODB_URI=
NEXT_PUBLIC_BASE_URL=http://localhost:3000

## Testing:
Unit tests were created using jest for core features that have more complex working logic. To run unit tests use the command: `npm test`


## Future Improvements:
1. Integrate real time twitter or threads API to provide a more dynamic feel to website. Current blocker: API pricing is too high currently.
2.