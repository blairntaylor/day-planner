$(document).ready(function(){

//save button and var for text and hour
$(".saveBtn").on("click", function(){
    var saveText = $(this).siblings(".description").val()
    var saveHour = $(this).parent().attr("id")
    localStorage.setItem(saveHour, saveText)

})

function changeHour (){
 var currentTime = moment().hours()
 $(".time-block").each(function(){
     var hourNum = parseInt($(this).attr("id").split("-")[1])
    if (hourNum < currentTime){
        $(this).addClass("past")
    }
    else if (hourNum === currentTime){
        $(this).removeClass("past")
        $(this).addClass("present")
    }
    else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
    }
 })

}

changeHour()


var interval = setInterval(changeHour, 15000)

//retrieving information
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-13 .description").val(localStorage.getItem("hour-13"))
$("#hour-14 .description").val(localStorage.getItem("hour-14"))
$("#hour-15 .description").val(localStorage.getItem("hour-15"))
$("#hour-16 .description").val(localStorage.getItem("hour-16"))
$("#hour-17 .description").val(localStorage.getItem("hour-17"))

$("#currentDay").text(moment.js) //moment in time

})