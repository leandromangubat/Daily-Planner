// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html

$(document).ready(function () {

    
    //saves content 
    $('.saveBtn').on("click", saveDate);
    
    function saveDate(){
        var timeBlockId = $(this).closest(".time-block").attr("id");
        var userInput = $(this).siblings(".description").val();
        localStorage.setItem(timeBlockId, userInput);
    }
    //text input in for each block
    $(".time-block").each(descInput);

    function descInput(){
        var timeBlockId = $(this).attr("id");
        var userInput = localStorage.getItem(timeBlockId);
        if(userInput !==null){
            $(this).find(".description").val(userInput);
        }
    }

    var currentHour = dayjs().hour();
    //Shifts the block colors to their appropriate time
    $(".time-block").each(changeCurrent);
    
    function changeCurrent(){
        var hour = parseInt($(this).attr("id").split("hour-")[1]);
        if (hour < currentHour){
            $(this).addClass("past");
        }else if (hour == currentHour){
            $(this).addClass("present");
        }else{
            $(this).addClass("future");
        }
    }

    var currentDate = dayjs().format("dddd, MMMM D, YYYY");
    $("#currentDay").text(currentDate);
    

    //Header has appropriate background displaying outdoors for current time
    var headerBg = $("#outDoor");
     headerBackground();
     function headerBackground(){
        if (currentHour < 10){
            headerBg.addClass("morning");
        }else if (currentHour > 10 && currentHour < 15){
            headerBg.addClass("afternoon");
        }else if (currentHour > 15 && currentHour < 21){
            headerBg.addClass("night");
        }else {
            headerBg.addClass("night");
        }
        
     }

});




  // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.