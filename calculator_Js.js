var pressed = "0";
var resultsScreen = $("#results");
var allButtons = $("button");
 

 //

$(document).ready(function(){
    allButtons.on("click", function(){
        var content = $(this).html();

        switch (content) {
            case "=":
               Answer();
                break;
            case "AC":
                pressed = "0";
                break;

            default:
                var val = $(this).attr("value");
                if (val == null) { // if its an operation
                        pressed += content;
                } else {
                        if (pressed == "0") {
                            pressed = val;
                        } else {
                            pressed += val;
                        }
                }
                break;
        }
        refreshDisplay();//for auto refresh for the result screen and show the numbers that have been pressed
    });
});

//

// post: displays the most current equation or answer
function refreshDisplay(){
    resultsScreen.html(pressed);
}

// post: calculates the answer;
function Answer() {
    // var val = 0;
        pressed = pressed.replace("x", "*");
        pressed = eval(pressed) + "";
        refreshDisplay();
    }
