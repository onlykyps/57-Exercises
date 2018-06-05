function convert()
{
    var euro = parseInt(document.getElementById("euros").value);
    var rate = parseFloat(document.getElementById("rate").value);
    
    
    if (isNaN(euro) || euro < 0 || euro == null ||
       isNaN(rate) || rate < 0 || rate == null)
        {
            document.getElementById("results").innerHTML = 
                "Please enter valid numbers";
        }
    else if (!isNaN(euro) && !isNaN(rate))
        {
            var dollar = euro * rate;
            document.getElementById("results").innerHTML = 
                "The equivelent in dollars is " + dollar;
         }
    
}