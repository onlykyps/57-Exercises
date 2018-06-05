function checkCar()
{
    var answer;
    
    do 
    {
        answer = prompt("Is the car silent when you turn the key?","y");
    }
    while (answer!=="y" && answer!=="n");
    if (answer === "y")
        {
            do
            {
                answer = prompt("Are the battery terminals corroded?","y");        
            }
            while (answer !=="y" && answer !== "n");
            if (answer === "y")
                {
                    alert("Clean terminals and try starting again");
                }
            else
                {
                    alert("Replace cables and try again");
                }
        }
    else
        {
            do 
                {
                    answer = prompt("Does the car make a clicking noise","y");
                }
            while (answer !== "y" && answer !== "n");
            if (answer === "y")
                {
                    alert ("Replace the battery");
                }
            else
                {
                do 
                    {
                    answer = prompt("Does the car crank up but fail to start?", "y");
                    }
                    while(answer!=="y" && answer!=="n");
                    if(answer === "y")
                        {
                        alert ("Check Spark plug connections.");
                        }
                    else
                        {
                        do
                            {
                            answer = prompt("Does the engine start and then die?","y");
                            }
                            while(answer!=="y" && answer !=="n");
                            
                            if(answer === "y")
                                {
                                do 
                                {
                                    answer = prompt("Does your car have fuel injection?", "y");
                                    
                                }
                                    while (answer!=="y"&&answer!=="n");
                                    if(answer==="y")
                                        {
                                            alert("Check the choke is opening and closing");
                                        }
                                    else
                                    {
                                        alert("Get it in for service");
                                        
                                    }
                                }
                                
                        }
                        
                }
        }
}