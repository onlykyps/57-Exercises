var rm = 0.73;
var rf = 0.66;
var limit = 0.08;

var male = document.getElementById("male");
var female = document.getElementById("female");



function checkLevel()
{
    var volum = parseInt(document.getElementById("volum").value);
    var mass = parseInt(document.getElementById("mass").value);
    var time = parseInt(document.getElementById("time").value);
    
    if (male.checked)
        {
            var BAC = (volum*5.14/mass*rm) - 0.015*time;
            if (BAC>limit)
                {
                    document.getElementById("results").innerHTML = 
                        "You are drunk!!!!"
                }
            else
                {
                    document.getElementById("results").innerHTML = 
                        "Do not stop drinking!!!";
                }
        }
    else if (female.checked)
        {
            var BAC = (volum*5.14/mass*rf) - 0.015*time;
            if (BAC>limit)
                {
                    document.getElementById("results").innerHTML = 
                        "You are drunk!!!!"
                }
            else
                {
                    document.getElementById("results").innerHTML = 
                        "Do not stop drinking!!!";
                }
        }
}