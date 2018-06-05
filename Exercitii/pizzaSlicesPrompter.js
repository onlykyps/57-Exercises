function pizzaMath()
{
    var people = parseInt(document.getElementById("people").value);
    
    
    if (isNaN(people) || people < 0 || people == null)
        {
            document.getElementById("results").innerHTML = 
                "Please enter valid numbers or I will have your balls!!!!";
        }
    else if (!isNaN(people))
        {
            var slicesTotal = 0;
            for (i=1; i< people+1 ; i++)
                {                    
                    var person = prompt("Person " + i + " wants ", "number of slices");
                    var personInt = parseInt(person);
                    slicesTotal = slicesTotal + personInt;
                                        
                }
            var pizzasTotal = Math.floor(slicesTotal / 8);
            var pizzasRemainder = slicesTotal % 8;
            
            if (pizzasRemainder == 0)
                {
                    document.getElementById("results").innerHTML = 
                "We need " + pizzasTotal + " slices."
                }
            else
                {
                    pizzasTotal++;
                    document.getElementById("results").innerHTML = 
                "We need " + pizzasTotal + " pizzas."
                }
            
            
            
            
            
        }
}