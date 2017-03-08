FriendFinder
# Friend Finder 
This is a Little Bear Friend Finder app. It is a compatability based Little Bear Friend Finder. 

It uses JavaScript, jQuery, npm express, node.js HTML, bootstrap and bootstrap modals feature.  This is a full-stack site. To use it the new Little Bear must register by using the link on main page. The new Friend will need to answer all questions on the survey, enter name and a link to their  photo. The app then uses the survey to compare differences in each answer between the new Friend and existing Friends in the JSON database file. The Little Bear with the lowest number of differences between new Friend and Little Bear already in the database will be selected as the most compatible Little bear. The app then dipslays the name and picture of the new Little Bear Friend and the Little Bear it is most compatible with. 


## What it looks like:
![alt text](screenshots/FriendFinderHome.png "Little Bear Friend Finder Home Screen")
![alt text](screenshots/FriendFinderSurvey.png "Little Bear Friend Finder Survey Screen")
![alt text](screenshots/FriendFoundModalScreen.png "Little Bear Friend Found Modal Screen")
![alt text](screenshots/AllFriends.png "Little Bear ALL Friends API Screen")
![alt text](screenshots/APIAllFriends.png "All Friends api/friends")

## Technologies Used:
- HTML 
- JavaScript
- jQuery 
- Bootstrap (also used modals feature to display a Dialog with Friend Compatability Information)
- node.js 
- JSON 
- AJAX 
- npm packages used:<br>
**express** used for routing and middleware functions(request-req and response-res object) <br>
**body-parser** used to parse the text as URL encoded data and shows the resulting object(key: value)<br> 
on req.body. bodyParser.json(): Parses the text as JSON then shows the resulting object on req.body<br>
**path** used to have the ability to locate a file<br>

## Built With:
* Sublime Text

## Links: 	
- https://ivonnek.github.io/FriendFinder/<br>
- https://github.com/IvonneK/FriendFinder/


## Author: 
**Ivonne Komis**<br>
Member: Rutgers Coding Bootcamp
