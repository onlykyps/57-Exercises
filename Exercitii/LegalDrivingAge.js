function checkAge()
{
    var age = parseInt(document.getElementById("age").value);
    
    
    if (isNaN(age) || age < 0 || age == null)
        {
            document.getElementById("results").innerHTML = 
                "Please enter valid age";
        }
    else if (!isNaN(age))
    {
        if (age >= 16)
            {
                document.getElementById("results").innerHTML = 
                    "You are old enough to legally drive";
            }
        else if (age < 16)
            {
                document.getElementById("results").innerHTML = 
                    "You are not old enough to drive";
            }
    }
}