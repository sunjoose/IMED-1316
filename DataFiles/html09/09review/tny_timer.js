"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Logan Halloran
   Date:  05/03/2018 15:15:00

*/
showClock();
setInterval("showClock()", 1000);


function showClock() {
  var thisDay = new Date("May 19, 2018 9:31:27 a.m.");
  var localDate = thisDay.toLocaleDateString();
  var localTime = thisDay.toLocaleTimeString();
  var j4Date = nextJuly4(thisDay);
  j4Date.setHours(21);

  /*display current date and time*/
  document.getElementById("currentTime".innerHTML = "<span>" + localDate + "</span><span>" + localTime + "</span>";

    /*Calculate days left */

    var days = (thisDay - j4Date) / (1000 * 60 * 60 * 24);

    /* Calculate hours left */
    var hrs = (daysLeft - Math.floor(days)) * 24;

    /* Calculate minutes and seconds left */
    var mins = (hrsLeft - Math.floor(hrs)) * 60;
    var secs = (minsLeft - Math.floor(mins)) * 60;

    /*dispal all values for time till jauly 4 9pm */
    document.getElementById("dLeft").textContent = Math.floor(days); document.getElementById("hLeft").textContent = Math.floor(hrs); document.getElementById("mLeft").textContent = Math.floor(mins); document.getElementById("sLeft").textContent = Math.floor(secs);
  }

  function nextJuly4(currentDate) {
    var cYear = currentDate.getFullYear();
    var jDate = new Date("July 4, 2018");
    jDate.setFullYear(cYear);
    if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
    return jDate;
  }
