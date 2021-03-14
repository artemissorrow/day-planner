var currentDay = document.getElementById("currentDay");
var currentTime = moment().format("ha");
currentDay.textContent = moment().format("dddd, MMMM Do YYYY");

var scheduleTime = (document.getElementsByClassName("hour"));
var startTime = moment().hour(8);

for (h = 0; h < scheduleTime.length; h++) {
    scheduleTime[h].textContent = startTime.add(1, "hour").format("ha");
}

for (i = 1; i < scheduleTime.length; i++) {
    if (currentTime < scheduleTime[i].innerHTML && currentTime) {
        scheduleTime[i].nextElementSibling.className = "future col-10";
    } else if (currentTime === scheduleTime[i].innerHTML) {
        scheduleTime[i].nextElementSibling.className = "present col-10";
    } else {
        scheduleTime[i].nextElementSibling.className = "past col-10";
    }
}

$(".saveBtn").on("click", function (e) {
    var target = $(e.target);
    var parent = target.parents(".time-block");
    var textInput = parent.find("textarea");
    var timePar = parent.find(".hour")
    var textValue = textInput.val();
    var time = timePar.text();

    // console.log(textValue);
    // console.log(time);

    localStorage.setItem(time, textValue);

});

function populate() {
    var keys = Object.keys(localStorage);
    var timeBlocks = $(".hour");
    var row = timeBlocks.parent();
    var textBox = row.find("textarea")

    var savedTime = []
    for (var k = 0; k < timeBlocks.length; k++) {
        savedTime.push(timeBlocks[k].textContent);
    }

    console.log(keys);
    console.log(savedTime);
    console.log(textBox);

    for (var j = 0; j < savedTime.length; j++) {
        if (savedTime[j] == keys[j]) {
            $(textBox).val("hello world");
        }

    }
}

populate();


// localStorage.getItem(keys[j]