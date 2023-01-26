$(document).ready(function () {
  //Moment.js code
  let NowMoment = moment().format("MMMM Do YYYY, h:mm:ss a");
  let displayDate = document.getElementById("currentDay");
  displayDate.innerHTML = NowMoment;
  let currentHour = moment().format("HH");

  // show live updating time
function displayTime() {
  var time = moment().format("MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").html(time);
}
setInterval(displayTime, 1000);

  // Function to clear content and local storage
  $("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });

  // Alert message for when clearFieldsBtn is clicked
  $("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    alert("Workday Cleared!");
  });

  //check the hour from each time slot and compares it to the actual current time
  $(".timeDiv").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    
    if (currentHour == timeDiv) {
      $(this).addClass("present");
    } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

  //grabs values from time and value divs and saves them to local storage
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".timeblock").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });

// Alert message for when saveBtn is clicked
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    alert("Timeblock Saved!");
  });

  //retrieves items from local storage
  $("#hour-09 .timeblock").val(localStorage.getItem("09"));
  $("#hour-10 .timeblock").val(localStorage.getItem("10"));
  $("#hour-11 .timeblock").val(localStorage.getItem("11"));
  $("#hour-12 .timeblock").val(localStorage.getItem("12"));
  $("#hour-13 .timeblock").val(localStorage.getItem("13"));
  $("#hour-14 .timeblock").val(localStorage.getItem("14"));
  $("#hour-15 .timeblock").val(localStorage.getItem("15"));
  $("#hour-16 .timeblock").val(localStorage.getItem("16"));
  $("#hour-17 .timeblock").val(localStorage.getItem("17"));
});


