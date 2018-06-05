function countString()
{
    var string = document.getElementById("string").value;
    var length = string.length;
    
    document.getElementById("countedString").innerHTML = 
        "The length of " + string + " is " + length;
        
}
