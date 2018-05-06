"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Logan Halloran
   Date:  05/03/2018 15:05:00
*/

//sets day to minute to second to 1/1000 of a second 24*60*60*1000
var thisDay = new Date(2018, 9, 30);
var tableHTML = "<table id='eventTable'> <caption>Upcoming Events</caption> <tr> <th>Date</th> <th>Event</th> <th>Price</th> </tr>";
var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);

for(var i = 0; i<eventDates.length(); i++)
{
	var eventDate = eventDates[i];
	var eventDay = eventDate.toString();
	var eventTime = eventDate.toLocaleTimeString();

	//checks if the event date is past the end date and if current day is past event date
	if(thisDay > eventDate && eventDate > endDate)
	{
		tableHTML += "<tr> <td>" + eventDay + "@" + eventTime + "</td> <td>" + eventDescriptions[i] + "</td> <td>" + eventPrices[i] + "</td> </tr>";
	}
}

tableHTML += "</table>";

document.getElementById("eventList").innerHTML = tableHTML;
