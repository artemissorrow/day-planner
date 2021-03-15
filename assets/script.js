var currentDay = document.getElementById("currentDay");
var currentTime = moment().format("ha");
currentDay.textContent = moment().format("dddd, MMMM Do YYYY");

var scheduleTime = (document.getElementsByClassName("hour"));
var startTime = moment().hour(8);

// iterate through HTMLcollection of hour blocks and fill in the times 
for (h = 0; h < scheduleTime.length; h++) {
    scheduleTime[h].textContent = startTime.add(1, "hour").format("ha");
}

// compare hour block times to current time to set the colors
for (i = 1; i < scheduleTime.length; i++) {
    if (currentTime < scheduleTime[i].innerHTML && currentTime) {
        scheduleTime[i].nextElementSibling.className = "future col-10";
    } else if (currentTime === scheduleTime[i].innerHTML) {
        scheduleTime[i].nextElementSibling.className = "present col-10";
    } else {
        scheduleTime[i].nextElementSibling.className = "past col-10";
    }

    if (currentTime === "9am"){
        scheduleTime[0].nextElementSibling.className = "present col-10";
    }  else {
        scheduleTime[0].nextElementSibling.className = "past col-10";
    }

} 

// save events to local storage
$(".saveBtn").on("click", function (e) {
    var target = $(e.target);
    var parent = target.parents(".time-block");
    var textInput = parent.find("textarea");
    var timePar = parent.find(".hour")
    var textValue = textInput.val();
    var time = timePar.text();

    localStorage.setItem(time, textValue);

});

// get events from local storage and populate textarea
function populate() {
    var keys = Object.keys(localStorage);

    if (keys.length) {
        for (var i = 0; i < keys.length; i++) {
            var textArea = document.getElementById(keys[i]);
            textArea.value = localStorage.getItem(keys[i]);
        }

    }
}

populate();