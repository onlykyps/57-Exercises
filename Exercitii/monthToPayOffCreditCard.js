function checkMonth()
{
    var balance = parseInt(document.getElementById("balance").value);
    var apr = parseInt(document.getElementById("apr").value);
    var payment = parseInt(document.getElementById("payment").value);
    
    var rate = apr/365;
    var months = 0;
    
    function upper(balance, payment, rate)
    {
        var power = Math.pow((1+rate),30);
        var brackets = 1 + balance/payment*(1 - power);
        alert(brackets);
        var upperResult = Math.log(brackets);
        alert(upperResult);
        return upperResult;
    }
    
    function lower(rate)
    {
        var lowerResult = Math.log(1+rate);
        alert(lowerResult);
        return lowerResult;
    }
    
    months = -1/30*upper(balance,payment,rate)/lower(rate);
    alert(months);
    
    document.getElementById("main").innerHTML = 
        "You need " + months + " to pay off this card.";
}