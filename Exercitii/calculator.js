function calculator()
{
    
    var first = document.getElementById("first").value;
    var second = document.getElementById("second").value;
    if(isNaN(first) || first<0 || first==null || isNaN(second) || second<0 || second==null)
    {
        document.getElementById("results").innerHTML="<p>Please enter a valid numbers.</p>"
    } 
    else if (!isNaN(first) && !isNaN(second))
    {

    var firstNumber = parseInt(first);
    var secondNumber = parseInt(second);
    
    var sum = firstNumber + secondNumber;
    var diff = firstNumber - secondNumber;
    var multiply = firstNumber * secondNumber;
    var sub = firstNumber / secondNumber;
    
    document.getElementById("results").innerHTML = 
        sum + " " + diff + " " + multiply + " " + sub;
    }
}