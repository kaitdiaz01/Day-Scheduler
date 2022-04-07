$(document).ready(function (event) {
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
      // want to tell it for each class of time block look at div with class of hour and get the value so in the if statement i can compare it to currentHour
      // had to parseInt to turn the string into an interger
      var blockTime = parseInt($(this).attr("id").split("-")[1]);
      console.log(blockTime);
      if (currentHour > blockTime) {
        //add conditonal to change class
        $(this).addClass("past");
      } else if (currentHour >= blockTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
      //how do i seperate the words from the number
    });
  }

  colorUpdate();

  // var  interval = setInterval(colorUpdate, 15000);
  //need saved data from local storage
  $("#hour-9 .information").val(localStorage.getItem("hour-9"));
  $("#hour-10 .information").val(localStorage.getItem("hour-10"));
  $("#hour-11 .information").val(localStorage.getItem("hour-11"));
  $("#hour-12 .information").val(localStorage.getItem("hour-12"));
  $("#hour-13 .information").val(localStorage.getItem("hour-13"));
  $("#hour-14 .information").val(localStorage.getItem("hour-14"));
  $("#hour-15 .information").val(localStorage.getItem("hour-15"));
  $("#hour-16 .information").val(localStorage.getItem("hour-16"));
  $("#hour-17 .information").val(localStorage.getItem("hour-17"));
  $("#hour-18 .information").val(localStorage.getItem("hour-18"));
  $("#hour-19 .information").val(localStorage.getItem("hour-19"));
  $("#hour-20 .information").val(localStorage.getItem("hour-20"));

  $("#currentDay").text(moment().format("MMMM Do YYYY"));
});
