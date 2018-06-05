var weakness = 0;
var alphabet = 
    {
        0:"a",
        1:"b",
        2:"c",
        3:"d",
        4:"e",
        5:"f",
        6:"g"
    }

function checkStrength()
{
    var password = prompt("Enter password to check strength","password");
    
    //checkConsecutive(password);
    checkAlphabetical(password);
    
    if(weakness == 1)
        {
            alert("very weak password");
        }
}

function checkConsecutive(string)
{
    consecutiveCount = 0;
    for (i=0;i<string.length;i++)
        {
            a = parseInt(string[i]);
            b = parseInt(string[i+1]);
            
            if(a+1==b)
                {
                    consecutiveCount++;
                }
        }
    if (consecutiveCount + 1 == string.length)
    {
        weakness++;
    }
}

function checkAlphabetical(string)
{
    alert("Debug 1");
    alphabetCount = 0;
    for (i=0;i<string.length;i++)
        {
            alert("Debug 4");
            for(j in alphabet)
                {
                    alert("Debug 2");
                    
                    if (string[i] == alphabet[j] && string[i+1] == alphabet[j+1])
                        {
                            alert("Debug 3");
                            alphabetCount++
                        }
                }
            
        }
    if(alphabetCount + 1 == string.length)
        {
            weakness++;
        }
}
