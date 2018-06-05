function calcInterest()
{
    var principal = parseInt(document.getElementById("principal").value);
    var interest = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    
    
    if (isNaN(principal) || principal < 0 || principal == null || isNaN(interest) || interest < 0 || interest == null ||
       isNaN(years) || years < 0 || years == null)
    {
        document.getElementById("results").innerHTML = 
            "Please enter valid numbers";
    }
    else if (!isNaN(principal) || !isNaN(interest) || !isNaN(years))
        {
            var investment = principal * (1 + rate * years);
            
            document.getElementById("results").innerHTML = investment;
        }
    
}