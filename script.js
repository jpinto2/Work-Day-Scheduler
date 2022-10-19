var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

$(function ()  {
    $(".saveBtn").on("click", function () {

        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();
        localStorage.setItem(time, text);

    })
   
    function currentTime() {
        
        var time = moment().hour();
        var blockTime = 9;
 
        $(".time-block").each(function () {

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
            blockTime++;
        })
    }

   
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

    currentTime();
})