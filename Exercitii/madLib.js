function madLib()
{
    var noun = document.getElementById("noun").value;
    var verb = document.getElementById("verb").value;
    var adjective = document.getElementById("adjective").value;
    var adverb = document.getElementById("adverb").value;
    
    document.getElementById("madLibText").innerHTML= 
        "Do you " + verb + " your " + adjective + " " + noun + " " + adverb + "? That is funny!";
}