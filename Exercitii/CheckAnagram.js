function checkAnagram()
{
    var string1 = prompt("Enter 1st string","");
    var string2 = prompt("Enter 2nd string","");
    
    string1=string1.toLocaleLowerCase();
    string2=string2.toLocaleLowerCase();
    
    if(isAnagram(string1,string2))
        {
            alert("ANAGRAM");
        }
    else
        {
            alert("not anagram");
        }
}



function isAnagram(string1, string2)
{
    var i,j;
    var found;
    var matchNo = 0;
    
    string1=removeSpecialCharacters(string1);
    string2=removeSpecialCharacters(string2);
    
    for(i=0;i<string1.length;i++)
        {
            found=false;
            for(j=0;j<string2.length;j++)
                {
                if(string1[i]==string2[j]&&found==false)
                        {matchNo++;
                         found=true;
                         break;}
                }
        }
    if(matchNo==string1.length)
        {
            
            console.log("The two strings are anagram.");
            return true;
        }
    else
        {
            console.log("The two strings are not anagram.");
            return false;
            
        }
        
}

function removeSpecialCharacters(string)
{
    return string.replace(/[^a-zA-Z0-9]/g,"");
}