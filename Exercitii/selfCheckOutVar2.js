var subTotal = 0;
var tax = 5.5;

function itemQueue()
{
    
    var itemPrice = parseInt(document.getElementById("price").value);
    var itemQuantity = parseInt(document.getElementById("quantity").value);
    
    if (isNaN(itemPrice) || itemPrice < 0 || itemPrice == null ||
       isNaN(itemPrice) || itemPrice < 0 || itemPrice == null)
        {
            document.getElementById("results").innerHTML = 
                "Enter valid numbers or I will eat your face!";
        }
    else if (!isNaN(itemPrice) && !isNaN(itemQuantity))
        {
            alert("check");
            subTotal = subTotal + itemPrice*itemQuantity;
            alert(subTotal);
        }
}

function checkTotal()
{
    alert("check");
    var total = subTotal * tax;
    document.getElementById("results").innerHTML = 
        "total is " + total;
}