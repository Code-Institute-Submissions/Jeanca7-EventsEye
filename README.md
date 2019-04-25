![logo_transparent](https://user-images.githubusercontent.com/43143675/55260466-6ff25000-5260-11e9-9a4d-ad8ddc7deae6.png)  
## EventsEye
An events website that allows users to search for upcoming shows, attractions and more.  
Enjoyment, amusement and entertainment play a significant role in our lives such as improving our relationships, reducing stress and make us more enegetic and youthful (Rucker, 2016). For this reasons I decided to develop 
EventsEye which provides a solution for searching for events in different categories including sports, music, arts & theatre, film and miscellaneous. This allows users to navigate and search for events according to their fondness and profile as the site provides a large set of shows. EventsEye is built based on the Discovery API which provides access to content sourced 
from different platforms such as Ticketmaster, Universe, FrontGate and Ticketmaster Resale. There are over 230K+ events available in the API for various geographical regions inlcuding the United States, Canada, Mexico, Europe, Australia and New Zealand. 

## UX
EventsEye is a multitarget website which means that is dedicated to people of different age, social class, status, region, etc. as the events vary from sports to music shows. Our target market are people who 
are searching for entertainment for themselves, with or without friends and family.  
The following is a list of User Stories to describe the profile of some of the possible EventsEye users:  
* A college student, wants to see the national football team for the european qualifiers, visits EventsEye - selects country - selects city - selects the sports genre and consequently can see the available matches coming up. They can also click on the link to purchase ticket.  
* A young professional, wants to go to the concert of his/her favourite band, visits EventsEye - selects country - selects city - selects the music genre and consequently can see the available concerts coming up. They can also click on the link to purchase ticket.  
* An adult couple, wants to see an art exhibition at the weekend, visits EventsEye - selects country - selects city - selects the art & theater genre and consequently can see the available art exhibitions coming up. They can also click on the link to purchase tickets.  

To facilitate the navigation through the site as well as the information provided to the users, on the home page there is a youthful background with people taking part in a music event. Additionally, there are three select bars to select the country, city and event genre together with an inspirational quote from Randy Pausch at the bottom of the page.
Once the user selects the country, the city bar is populated and so the genre bar. 
Furthermore, when the user selects the country of interest, the events that will take place in such area will be displayed below the background image. Thus, the user have a deeper appreciation for the changes in the events when filtering for each select bar.  

## Features   
### Existing Features   
1. Form section - Allows users to select country, city and event type. The city and event type fiels are populated based on the upcoming events taking place in the selected country.  
2. The searched events are displayed with features including but not limted to the following: Event name, type of event, start and end time, sale status, ticket limit information, seatmap, venue address, venue image, parking details, ticket price, link to purchase tickets, etc.  
3. The event name is displayed on top of each section with an animated star on its left which is spinning to attract the attention of the user indicating the existance of an event.  
4. The artist image, seatmap and venue image - To provide a complete experience. The resolution of some images may be distorted as the result of small size images provided from the API data.  
5. Each piece of information including the images are retrieved from the API as strings of text and are put together and presentend on the page in a readable, easy-to-use and slick manner.  
6. Please note that the information provided on each event may differ from one another as this depends on the available data from the API provider.  

### Features left to implement  
EventsEye currently displays the vanue address, however, the Google Maps feature added to the site will facilitate the users to find the location.  

## Mockups
* [mobile-wireframes.pdf](https://github.com/Jeanca7/EventsEye/files/3113249/mobile-wireframes.pdf)  
* [tablet-wireframes.pdf](https://github.com/Jeanca7/EventsEye/files/3113254/tablet-wireframes.pdf)  
* [desktop-wireframes.pdf](https://github.com/Jeanca7/EventsEye/files/3113259/desktop-wireframes.pdf)  

## Technology used
<b>Built with</b>
* JavaScript
* Bootstrap 4
* CSS3
* HTML5
* JSON
* Adobe Comp (To create mockups)  

## Deployment
EventsEye is hosted on GitHub Pages. You can see the deployed website [here](https://jeanca7.github.io/EventsEye/).  
The steps taken in order to upload and deploy the site are as follows:  
1. Created a repository on GitHub.  
2. Typed the following comamnd in the console `git remote add origin https://github.com/Jeanca7/EventsEye.git` to add the code from the development environment to the remote version stored on GitHub.  
3. Entered in console `git push -u origin master`.  

Once changes are made in the development environment, we can save and update the remote version on GitHub by following these steps:  
1. In console `git add .`.
2. `git commit -m "MESSAGE GOES HERE"`.  
3. `git push`.  

To deploy site:
1. Head to the repository on GitHub.  
2. Go to settings.  
3. Head to the GitHub Pages Section.  
4. Select the master branch source.  
5. Enter custom domain (Not required).  

## Tests
Testing was executed manually to ensure the website's responsiveness and funcionality work correctly.   

* Responsiveness:
The site was tested on a 23.8" monitor and 13.3" MacBook Air, iphone X and ipad Pro. It was also tested on Firefox, Chrome and Safari. Images, select search menu and layout are responsive. 

* Functionality:
To ensure features of the site work effectively and on different operating systems.
    * Successful search by filtering by country, city/town or genre.
    * Query cities based on specific country.  
    * Query available genres for specific city and country.

## How to use?
You can select the country of interest, filter by city and event type, and the matching events will be listed below the select search menu. 
EventsEye: (https://jeanca7.github.io/EventsEye/)

## Credits
 Ticketmaster developer doccumentation (https://developer.ticketmaster.com/products-and-docs/apis/getting-started/)  
 Why You Need More Fun in Your Life, According to Science article. Author: Michael Rucker. December 2016.   
 
### Media
* Background image obtained from unsplash.com
* Icons from Fontawesome.com  
* Font from fonts.google.com
    