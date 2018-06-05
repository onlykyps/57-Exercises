function paintMath()
{
    
    var length = parseInt(document.getElementById("length").value);
    var width = parseInt(document.getElementById("width").value);
    var gallonSqFeet = 350;
    
    if (isNaN(length) || length < 0 || length == null || 
        isNaN(width) || width < 0 || width == null)
        {
            document.getElementById("results").innerHTML = 
                "Please enter valid numbers or please fuck off :)";
        }
    else if (!isNaN(length) && !isNaN(width))
        {
            var area = length * width;
            var neededGallons = Math.ceil(area / gallonSqFeet);
            
            document.getElementById("results").innerHTML = 
                "You will need " + neededGallons + " gallons of paint!";
        }
    
}

function checkVisibility()
{
    var c = document.getElementById("circleForm");
    var s = document.getElementById("squareForm");
    
    if(document.getElementById("rect").checked == true)
        {
//            c.style.visibility = "none";
            s.style.visibility = "visible";
        }
    else if (document.getElementById("circle").checked == true)
        {
            c.style.visibility = "visible";
//            s.style.display = "none";
        }
}
