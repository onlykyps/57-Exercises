function checkOut()
{
    var subTotal = 0;
    var tax = 5.5;
    
    for (i=1; i<4; i++)
        {
            var itemPrice = prompt("Enter the price of item " + i,"");
            var itemPriceInt = parseInt(itemPrice);
            var itemQuantity = prompt("Enter the quantity of item " + i,"");
            var itemQuantityInt = parseInt(itemQuantity);
            
            subTotal = subTotal + itemPriceInt*itemQuantityInt;
        }
    
    document.getElementById("results").innerHTML = 
        "subtotal e " + subTotal + " si totalul e " + (subTotal * tax);
}