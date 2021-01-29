// first class plus button implementation
const firstClassPlusButton = document.getElementById('firstClassPlus');
firstClassPlusButton.addEventListener('click', function(){
    var firstClassTicketAmount = parseInt(document.getElementById('firstClassInput').value);
    firstClassTicketAmount++;
    document.getElementById('firstClassInput').value = firstClassTicketAmount;

    // calculate subtotal
    const previousSubTotal = parseInt(document.getElementById('subTotal').innerText);
    const currentSubTotal = previousSubTotal + 150;
    document.getElementById('subTotal').innerText = currentSubTotal;

    // calculate vat
    const vat = (currentSubTotal * 10) / 100;
    document.getElementById('vat').innerText = vat;

    // calculate total
    const total = currentSubTotal + vat;
    document.getElementById('total').innerText = total;
});

// first class minus button implementation
const firstClassMinusButton = document.getElementById('firstClassMinus');
firstClassMinusButton.addEventListener('click', function(){
    var firstClassTicketAmount = parseInt(document.getElementById('firstClassInput').value);
    if(firstClassTicketAmount > 0)
    {
        firstClassTicketAmount--;
        document.getElementById('firstClassInput').value = firstClassTicketAmount;

        // calculate subtotal
        var currentSubTotal = 0;
        const previousSubTotal = parseInt(document.getElementById('subTotal').innerText);
        if(previousSubTotal >= 150)
            currentSubTotal = previousSubTotal - 150;
        document.getElementById('subTotal').innerText = currentSubTotal;

        // calculate vat
        const vat = (currentSubTotal * 10) / 100;
        document.getElementById('vat').innerText = vat;

        // calculate total
        const total = currentSubTotal + vat;
        document.getElementById('total').innerText = total;
    }
});

// economy plus button implementation
const economyPlusButton = document.getElementById('economyPlus');
economyPlusButton.addEventListener('click', function(){
    var economyTicketAmount = parseInt(document.getElementById('economyInput').value);
    economyTicketAmount++;
    document.getElementById('economyInput').value = economyTicketAmount;

    // calculate subtotal
    const previousSubTotal = parseInt(document.getElementById('subTotal').innerText);
    const currentSubTotal = previousSubTotal + 100;
    document.getElementById('subTotal').innerText = currentSubTotal;

    // calculate vat
    const vat = (currentSubTotal * 10) / 100;
    document.getElementById('vat').innerText = vat;

    // calculate total
    const total = currentSubTotal + vat;
    document.getElementById('total').innerText = total;
});

// economy minus button implementation
const economyMinusButton = document.getElementById('economyMinus');
economyMinusButton.addEventListener('click', function(){
    var economyTicketAmount = parseInt(document.getElementById('economyInput').value);
    if(economyTicketAmount > 0)
    {
        economyTicketAmount--;
        document.getElementById('economyInput').value = economyTicketAmount;

        // calculate subtotal
        var currentSubTotal = 0;
        const previousSubTotal = parseInt(document.getElementById('subTotal').innerText);
        if(previousSubTotal >= 100)
            currentSubTotal = previousSubTotal - 100;
        document.getElementById('subTotal').innerText = currentSubTotal;

        // calculate vat
        const vat = (currentSubTotal * 10) / 100;
        document.getElementById('vat').innerText = vat;

        // calculate total
        const total = currentSubTotal + vat;
        document.getElementById('total').innerText = total;
    }   
});

// implement book button
const bookButton = document.getElementById('bookButton');
bookButton.addEventListener('click', function(){
    const total = parseInt(document.getElementById('total').innerText);
    if(total>0)
    {
        document.getElementById('form-area').style.display = "none";
        document.getElementById('booking-done').style.display = "block";
    }
    else
    {
        alert("You have not purchased any ticket!");
    }
});
