const calendar = {
                "January" : 1,
                "February": 2,
                "March": 3,
                "April": 4,
                "May": 5,
                "June": 6,
                "July": 7,
                "August": 8,
                "September": 9,
                "October": 10,
                "November": 11,
                "December": 12
            }
        
function getMonths(Integer obj) 
    {
        
        alert("Debug 4");
        for (key in object)
        {
            alert("Debug 5");
            if (object[key] == month)
            {
        document.getElementById("results").innerHTML = 
            "The month is " + obj[key];
            }
        }
    }



function checkMonth()
{
    var month = parseInt(document.getElementById("number").value);
    
    alert("debug 1");
    
    if (isNaN(month) || month < 0 || month == null)
        {
            document.getElementById("results").innerHTML = 
                "for fuck sake not this no-valid-number bullshit.... I will find out where you live and I will kill your dog...";
        }
    else (!isNaN(month))
    {
        alert("debug 3");
        getMonths(month);
    }
}