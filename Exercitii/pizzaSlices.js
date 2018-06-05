function pizzaMath()
{
    var people = parseInt(document.getElementById("people").value);
    var slices = parseInt(document.getElementById("slices").value);
    var pizza = parseInt(document.getElementById("pizza").value);
    
    if (isNaN(people) || people < 0 || people == null ||
       isNaN(slices) || slices < 0 || slices == null ||
       isNaN(pizza) || pizza < 0 || pizza == null)
        {
            document.getElementById("results").innerHTML = 
                "Please enter valid numbers or I will have your balls!!!!";
        }
    else if (!isNaN(people) && !isNaN(slices) && !isNaN(pizza))
        {
            var availableSlices = pizza * slices;
            var sliceShare = Math.round(availableSlices / people);
            var sliceLeftOver = availableSlices % people;
            
            document.getElementById("results").innerHTML = 
                people + " people will eat " + pizza + " pizzas" + 
                "<br />" +
                "Which means that each person will get " + sliceShare + 
                "<br />" +
                "And there will be " + sliceLeftOver + " leftover slices of za...";
        }
}