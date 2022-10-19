var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

$(function ()  {
    // when save button for a row is clicked
    $(".saveBtn").on("click", function () {

        // get time id of the save buttons parent div
        var time = $(this).parent().attr("id");
        // get value typed into the description textarea for that save button 
        var text = $(this).siblings(".description").val();
        // store that text in localstorage for that time id
        localStorage.setItem(time, text);

    })

    // function to set past, present, future class to each time block. 
    function currentTime() {
        
        // current hour in military time
        var time = moment().hour();
        // inital hour on planner. tried to initially parseInt the id of the timeblock but was getting issues
        var blockTime = 9;
        
        // jquery function to iterate over every section with time-block class. initially planned to use for loop but stumbled over this thing in jquery documentation and researched it on google"
        $(".time-block").each(function () {

            // jquery function to remove class. no issue with removing non existent class or adding existing class, so i just called remove on both classes i didn't want from style.css and called add on the one i wanted.
            if (blockTime < time) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
            }
            else if (blockTime === time) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");

            }
            // increment to next time block
            blockTime++;
        })
    }

   
    //gets any locally stored values in descriptions and displays them on web page in textarea for each time block
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

    // applies past, present, future classes to each time block
    currentTime();
})