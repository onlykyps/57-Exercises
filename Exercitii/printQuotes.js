function formQuote()
{
    var quoter = document.getElementById("quoter").value;
    var quote = document.getElementById("quote").value;
    
    document.getElementById("printQuote").innerHTML = 
        "It was " + quoter + " who said \"" + quote +"\"";
}