function roomArea()
{
    var length = parseInt(document.getElementById("length").value);
    var width = parseInt(document.getElementById("width").value);
    var c = 0.09290304;
    
    
    
    if (isNaN(length) || isNaN(width) || length < 0 || width < 0 || length == null || width == null )
    {
        document.getElementById("results").innerHTML = 
            "Please enter valid numbers"
    }
    else if (!isNaN(length) && !isNaN(width))
        {
            if (document.getElementById("feet").checked == true)
                {
                     var area = length * width;
                     document.getElementById("results").innerHTML = 
                        "You entered dimensions of " + length + " feet by " + width + " feet." +
                        "<br />" +
                        "The area in feet is " + 
                        "<br />" +
                        area + " square feet"
                }
            else if (document.getElementById("meters").checked == true)
                {
                    var area = length * width;
                    var areaMetric = Math.sqrt(area * area * c); 
                    document.getElementById("results").innerHTML = 
                        "You entered dimensions of " + length + " feet by " + width + " feet." +
                        "<br />" +
                        "The area in meters is " + 
                        "<br />" +
                        areaMetric + " meters";
                }
           
           
                    
                
        }
            
        
}