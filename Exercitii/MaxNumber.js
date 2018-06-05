var numberArray = [];


function sort()
{
    var number;
    
    for(var i=0; i<5; i++)
        {
            do 
                {
                    number = prompt("Enter value for nr " + (i+1), "1");
                }
            while (isNaN(number) || (doubles(number)));
            numberArray[i]=number;
        }
    var largestNumber = maxNumber(numberArray);
    document.getElementById("results").innerHTML = 
        "The largest number is " + largestNumber;
    
}

function doubles(number)
{
    for(var i=0; i<numberArray.length; i++)
        {
            if((numberArray[i]) === number)
                {
                    return true;
                }
        }
    return false;
}


function maxNumber(numberArray)
{
    var max = numberArray[0];
    for (var i=1; i<numberArray.length; i++)
        {
            if(numberArray[i]>max)
                {
                    max=numberArray[i];
                    
                }
        }
    return max;
}