const totalSelectedSeats = document.getElementById('count');
const totalTicketsPrice = document.getElementById('total');
const movie = document.getElementById('movie');

let ticketPrice = parseInt(movie.value)
let selectedSeats = 0;
let totalPrice = ticketPrice*selectedSeats;


movie.addEventListener('input',function()
{
    updateTotalPrice();
});

const seats = document.querySelectorAll('.container .row .seat');
let seatsArr = [];
let selectedSeatsArr = [];
seats.forEach((i) => seatsArr.push(i));

for(let seat of seatsArr)
{
    if(!(seat.classList.contains('occupied')))
    {
        seat.addEventListener('click',function(e)
    {
        if(!(seat.classList.contains('selected')))
        {
            seat.classList.add('selected');
            updateSelectedSeats(1,seat);
        }
        else
        {
            seat.classList.remove('selected');
            updateSelectedSeats(-1,seat);
        };
    }
)}};

let updateSelectedSeats = (amount , seat) =>
{
    selectedSeats+=amount;
    amount === 1 ? selectedSeatsArr.push(seat) : selectedSeatsArr.pop(seat);
    updateTotalPrice();
    displayResults();
}

let updateTotalPrice = () => 
{
    ticketPrice = parseInt(movie.value);
    totalPrice = ticketPrice*selectedSeats;
    displayResults();
};

let displayResults = () =>
{
    totalSelectedSeats.innerText = selectedSeats;
    totalTicketsPrice.innerText = totalPrice;
};