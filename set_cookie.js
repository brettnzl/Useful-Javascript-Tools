 // Set a Cookie // 1 Day = 24 Hrs = 24*60*60 = 86400.
var expires = (new Date(Date.now()+ 86400*1000)).toUTCString();
document.cookie = "cookieName=cookieValue; expires=" + expires + ";path=/;"


// JQuery Alternative: 
// REF: https://plugins.jquery.com/cookie/
// 30 minutes is 30 * 60 * 1000 miliseconds. Add that to the current date to specify an expiration date 30 minutes in the future.

 var date = new Date();
 var minutes = 30;
 date.setTime(date.getTime() + (minutes * 60 * 1000));
 $.cookie("example", "foo", { expires: date });
