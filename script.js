// subtotal function
function calculateSubTotal(perTicketPrice, operation)
{
    const previousSubTotal = parseFloat(document.getElementById('subTotal').innerText);
    var currentSubTotal;
    if(operation == 'plus') // checks if it was called from plus or minus button
        currentSubTotal = previousSubTotal + perTicketPrice;
    else
        currentSubTotal = previousSubTotal - perTicketPrice;
    document.getElementById('subTotal').innerText = currentSubTotal;
    return currentSubTotal;
}

// calculate vat
function calculateVat(currentSubTotal)
{
    const vat = (currentSubTotal * 10) / 100; // adding 10% vat to sub total
    document.getElementById('vat').innerText = vat;
    return vat;
}

// calculate total
function calculateTotal(currentSubTotal, vat)
{
    const total = currentSubTotal + vat;
    document.getElementById('total').innerText = total;
    return total;
}

// get ticket amount
function getTicketAmount(id)
{
    const ticketAmount = parseInt(document.getElementById(id).value);
    return ticketAmount;
}

// get button id
function getButtonId(id)
{
    return document.getElementById(id);
}

// first class plus button implementation
const firstClassPlusButton = getButtonId('firstClassPlus');
firstClassPlusButton.addEventListener('click', function(){
    var firstClassTicketAmount = getTicketAmount('firstClassInput');
    firstClassTicketAmount++;
    document.getElementById('firstClassInput').value = firstClassTicketAmount;

    // calculate subtotal
    const currentSubTotal = calculateSubTotal(150, 'plus');

    // calculate vat
    const vat = calculateVat(currentSubTotal);

    // calculate total
    const total = calculateTotal(currentSubTotal, vat);
});




// first class minus button implementation
const firstClassMinusButton = getButtonId('firstClassMinus');
firstClassMinusButton.addEventListener('click', function(){
    var firstClassTicketAmount = getTicketAmount('firstClassInput');
    if(firstClassTicketAmount > 0) // prevents ticket amount to be negative
    {
        firstClassTicketAmount--;
        document.getElementById('firstClassInput').value = firstClassTicketAmount;

        // calculate subtotal
        const currentSubTotal = calculateSubTotal(150, 'minus');

        // calculate vat
        const vat = calculateVat(currentSubTotal);

        // calculate total
        const total = calculateTotal(currentSubTotal, vat);
    }
});

// economy plus button implementation
const economyPlusButton = getButtonId('economyPlus');
economyPlusButton.addEventListener('click', function(){
    var economyTicketAmount = getTicketAmount('economyInput');
    economyTicketAmount++;
    document.getElementById('economyInput').value = economyTicketAmount;

    // calculate subtotal
    const currentSubTotal = calculateSubTotal(100, 'plus');

    // calculate vat
    const vat = calculateVat(currentSubTotal);

    // calculate total
    const total = calculateTotal(currentSubTotal, vat);
});

// economy minus button implementation
const economyMinusButton = getButtonId('economyMinus');
economyMinusButton.addEventListener('click', function(){
    var economyTicketAmount = getTicketAmount('economyInput');
    if(economyTicketAmount > 0) // prevents ticket amount to be negative
    {
        economyTicketAmount--;
        document.getElementById('economyInput').value = economyTicketAmount;

        // calculate subtotal
        const currentSubTotal = calculateSubTotal(100, 'minus');

        // calculate vat
        const vat = calculateVat(currentSubTotal);

        // calculate total
        const total = calculateTotal(currentSubTotal, vat);
    }   
});

// implement book button
const bookButton = getButtonId('bookButton');
bookButton.addEventListener('click', function(){
    const total = parseInt(document.getElementById('total').innerText);
    if(total>0) // checks whether book button was pressed without purchasing ticket
    {
        document.getElementById('form-area').style.display = "none";
        document.getElementById('booking-cost').innerText = total;
        document.getElementById('booking-done').style.display = "block";
    }
    else
    {
        alert("You have not purchased any ticket!");
    }
});
