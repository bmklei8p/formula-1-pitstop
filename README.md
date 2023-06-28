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