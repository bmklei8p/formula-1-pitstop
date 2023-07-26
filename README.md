## Project Description


## To Do:
6/26 - When I open the sidebar, I want the title and logo to be centered above the sidebar - Completed 6/27
#
6/26 - The links should have a box or line to denote spacing between them on desktop
#
6/26 - The entire div (logo, link title, and whitespace to the right) should all have an onClick to the link instead of just the Link tag - Completed 6/27
#
6/27 - Image size of podium to change based on screensize. It is very small on 4k screens.
     - Overall typography responsive changes to for larger screens - links in particular
#
6/27 - Either body dim on sidebar-active or slightly darker background: when sidebar active on whitespace heavy pages not enough incentive for the eye's to move to the sidebar
#
6/27 - Consider ease in animation for sidebar, animations for logo's placing on podium
#
6/27 - On mobile screen, the podium does not display or is cut off on drivers standings due to length of list: consider podium move on top of the table? @media (max-width: 1024px) .standings-block {flex-direction: column-reverse;} would achieve this. - Completed 6/27
    - I feel tablets may look better still at column? Consider for later.
#
6/28 - Move arrow button's on mobile track list to the sides of the box for better viewing. Makes these arrows better looking icons.
#
6/28 - Set up a mongodb collection and the util's associated with it for a connectToDB function. Store all tracks in mongoDB instead of a list so I can keep a running list of all tracks if new tracks are added, instead of a static list. Need to set up the models for this as well for TrackModel.
#
6/28 - My tacks component is very complicated and a lot of different things going on at once. Consider breaking down into smaller components. Additionally, map resource on load takes a good amount of time. I need a loading spinner/icon to hold the position until it comes in instead of just Loading... for better UX.
#
6/28 - BUG: When I click on a marker, then use the arrow on the track list, it resets the map position to the default. I find this jarring and need to look into a fix.


#
7/9 - Need to update at least on mobile when I go to a marker, the map should be centered on the marker. - Completed with new state centerMobile and updated onClick's to setMobile to the marker's lat/lng.

7/9 - Update font to the font used on f1 page: font is titillium-web on google fonts. Updated it following next.js doc to work with one font-weight/variable. Know that i need to use array for importing but how to denote the variable that will be pulled into tailwind config. Use the font-weight class before the font-family in the tailwind className to specific which font-weight to use. - Complete

7/10 - Sprint races are causing errors as they do not have the same keys as the other races for the results: may need to loop over the shcedule, flag the sprint vs regular, and then have each sent to its own result component.


7/11 need a back button on the result/schedule detail pages
signapore track needs layout or link fixed



7/19
- sprint races - Performed a check on the race to see if it was a sprint race, and conditionally rendered a new SprintRaceTime component. -fixed

- navbar gap - complete

- home page

- i broke the trackslist for mobile - fixed by updating name to use but officialRaceName from track parser may be broken - leaving issue open

- image carousel div's for buttons off placement - fixed transform

- track detail page: needs map component, needs styling for paragraphs -fixed

- schedule list page: flags in containers to fix size to a max for uniformity -fixed

- images for schedule result page needs to be fixed to prevent strecthing, need title row for qualifying results - qualifying results fixed

- image carousel needs to have an indicator to show that it is a carousel and to show the image that is displayed currently -fixed

- generate static params on all non-client dynamic pages

- need to update parser to not work on the marina bay circuit due to the website not having any information about that race- updated manually

- need to update driver image with de vries X not being responsive on mobile sizes: works on desktop

- on full race results page, when the driver is a lap down showing as a DNF - fixed


7/26 -
- Need track model to have both circuit name and official name for race - track pages will use circuit name for display.  - fixed




- { next: {revalidate: 60}} vs { next: {revalidate: 60}} for fetches