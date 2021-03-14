var currentDay = document.getElementById("currentDay");
var currentTime = moment().format("h a");

currentDay.textContent = moment().format("dddd, MMMM Do YYYY");

var scheduleTime = (document.getElementsByClassName("hour"));

for (i = 0; i < scheduleTime.length; i++) {
    if (currentTime < scheduleTime[i].innerHTML && scheduleTime[i] != scheduleTime[0]) {
        scheduleTime[i].nextElementSibling.className = "future col-10";
    } else if (currentTime === scheduleTime[i].innerHTML) {
        scheduleTime[i].nextElementSibling.className = "present col-10";
    } else {
        scheduleTime[i].nextElementSibling.className = "past col-10";
    }
}

var inputData = [];

$("#parent").click(function (e) {
    if (e.target.matches(".fa-save")) {
        console.log("success");

        var timeBlock = $(e.target).parent().siblings();
        var hour = $(timeBlock[0].textContent);
        var textInput = $(timeBlock[1]).children();
        var textValue = $(textInput.val());
        console.log(textValue);

    //     var newAppt = {time: hour, appt: textValue};

    //     inputData.push(newAppt);

    //     localStorage.setItem("appts", JSON.stringify(inputData));
    // }
    }
})


