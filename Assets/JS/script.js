// set timer in the header
// var time = moment().format("MMMM Do YYYY")

var time = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(time);

// update in real time
var update = function () {
  document.getElementById("currentDay").innerHTML = moment().format(
    "MMMM Do YYYY, h:mm:ss a"
  );
};
setInterval(update, 1000);

//start a function using jQuery syntax
$(document).ready(function (event) {
  //listen for savebtn clicks (when we type in the text field do something to save that)
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".information").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });

  //function to update the current hour and change the colors of the time blocks
  function colorUpdate() {
    var currentHour = moment().hours();
    //create a variable that holds the current time value
    $(".time-block").each(function () {
    //   create something to loop over the time blocks
      var blockTime = $("div.hour").text();
    // want to tell it for each class of time block look at div with class of hour and get the value so in the 
    // if statement i can compare it to currentHour 
    //how do i seperate the words from the number
    });
    if (blockTime < currentHour) {
    
    } else if (currentHour >= blockTime && currentHour < blockTime) {
    }
  }

  colorUpdate();

  // var  interval = setInterval(colorUpdate, 15000);
  //need saved data from local storage
  $("#hour-nine .information").val(localStorage.getItem("#hour-nine"));
  $("#hour-ten .information").val(localStorage.getItem("#hour-ten"));
  $("#hour-eleven .information").val(localStorage.getItem("#hour-eleven"));
  $("#hour-twelve .information").val(localStorage.getItem("#hour-twelve"));
  $("#hour-thirteen .information").val(localStorage.getItem("#hour-thirteen"));
  $("#hour-fourteen .information").val(localStorage.getItem("#hour-fourteen"));
  $("#hour-fifteen .information").val(localStorage.getItem("#hour-fifteen"));
  $("#hour-sixteen .information").val(localStorage.getItem("#hour-sixteen"));
  $("#hour-seventeen .information").val(localStorage.getItem("#hour-seventeen"));
  //why is information deleting from page and not saving even though it is in local storage

  $("#currentDay").text(moment().format("MMMM Do YYYY"));
})