# Formula 1 Pitstop
Deployed on Vercel at: https://formula-1-pitstop.vercel.app/

## About
This application provides users with real time information related to Formula 1's standings and schedule. A user can sign up for a SMS notification for notification before a race is about to begin. Additional information can be found about each driver, team, and track from the current 2023 season. The latest news for drivers, teams, and f1 as whole can be viewed via the embedded X(Twitter) timelines. The application was designed with a mobile first approach and is highly responsive.

## Technologies Used:
NextJS 13 (Using app router),
Twilio API,
Twitter Embed Api,
Tailwind Css,
Jest

## Usage and Features:
1. Users can view the current standings for the 2023 season.
2. Users can view the current schedule for the 2023 season.
3. Users can view information about each driver, team, and track.
4. Users can sign up for a SMS notification before the race starts.
5. Users can see the latest tweet via the drivers, teams, and f1 twitter accounts.

# Images of the application:
## Mobile View:
## Dark:
![Dark Mode](https://github.com/bmklei8p/formula-1-pitstop/blob/main/public/assets/images/misc/mobile_dark.png)
## Light:
![Light Mode](https://github.com/bmklei8p/formula-1-pitstop/blob/main/public/assets/images/misc/mobile_light.png)

## Desktop View:
## Dark:
![Dark Mode](https://github.com/bmklei8p/formula-1-pitstop/blob/main/public/assets/images/misc/desktop_dark.png)
## Light:
![Light Mode](https://github.com/bmklei8p/formula-1-pitstop/blob/main/public/assets/images/misc/desktop_light.png)

## How to run locally:
Local development for all features will require some manual setup. The application is currently using a MongoDB database to store driver, constructor, and track information. A Twilio account is required to send SMS messages. A Google Maps API key is required to display the track location on the track page. Please see the file below for the required steps to run the application locally.

[Installation Instructions](local_install.md)

## Testing:
Unit tests were created using jest for core features that have more complex working logic. To run unit tests use the command: `npm test`


## Future Improvements:
1. Add additional story information for some tracks. Current blocker: ChatGPT will not provide this information for these newer tracks.
2. Improved caching for the driver twitter timelines. Current blocker: revalidate tag after patch request not working as expected.

# Contact
Please feel free to reach out to me at bmklei8p@gmail.com if you have any feature requests, bug reports, or comments!
My portfolio of projects can be found at https://bk-portfolio.azurewebsites.net/



