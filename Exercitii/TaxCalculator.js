function computeTax()
{
    var amount = parseInt(document.getElementById("amount").value);
    var state = document.getElementById("state").value.toLowerCase();

    
    if (isNaN(amount) || amount < 0 || amount == null)
        {
            document.getElementById("results").innerHTML = 
                "Please enter valid number for amount.";
        }
    else if (!isNaN(amount))
        {
            switch (state)
            {
                case "wi":
                case "wisconsin":
                    var stateTax = 5.5;
                    var orderTotal = (amount * (1 + stateTax/100)).toFixed(2);
                    document.getElementById("results").innerHTML=
                    "The subtotal is " + amount +
                    "<br />" + 
                    "The tax is " + stateTax + 
                    "<br />" +
                    "The total amount owed is " + orderTotal;
                break;
                
                case "mn":
                case "minnesota":
                    var stateTax = 4.5;
                    var orderTotal = (amount * (1 + stateTax/100)).toFixed(2);
                    document.getElementById("results").innerHTML=
                    "The subtotal is " + amount +
                    "<br />" + 
                    "The tax is " + stateTax + 
                    "<br />" +
                    "The total amount owed is " + orderTotal;
                break;    
            }
                
        }
    
}