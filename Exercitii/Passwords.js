var users = {"clau", "bau", "mau"};
var passwords = {"happy", "1234", "%$#@!"};
Object.freeze(users);
Object.freeze(passwords);

function logIn()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username == null || password == null)
        {
            alert("debuged");
            document.getElementById("results").innerHTML = 
                "please enter stuff into stuff or else stuff";
        }
    else if (username != null && password != null)
        {
            switch (username | password)
            {
                case users.clau | passwords.happy:
                    document.getElementById("results").innerHTML = "Logged In!";
                    
            }
        }
}