function calculateRetirement()
{
    var age = parseInt(document.getElementById("age").value);
    var retAge = parseInt(document.getElementById("retAge").value);
    var d = new Date()
    var currYear = d.getFullYear();
    var retYear = currYear + retAge - age;
    
    if (isNaN(age)||isNaN(retAge)||age<0||retAge<0||age==null||retAge==null)
        {
            document.getElementById("resultsRetirement").innerHTML = 
                "Please enter valid numbers, FFS!"
        }
    else if (!isNaN(age) && !isNaN(retAge))
        {
            document.getElementById("resultsRetirement").innerHTML = 
                "You have " + (retAge - age) + " years left until retirement." + "\n" 
            + "<br />"+"It is " + currYear + " so you have to wait until " + retYear +".";
        }
}