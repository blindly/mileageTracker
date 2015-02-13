
function setListings()
{
    var date = new Date();
    
    if (localStorage.myListings)
    {
        var myListings = JSON.parse(localStorage.myListings)
    }
    else
    {
        var myListings = [];
    }

    if (myListings.length > 0)
    {
        for (listing in myListings)
        {
            var listings = document.getElementById("listings");
            listings.innerHTML += "<p>Date: " + date + "<br>Odometer: " + document.getElementById("odo").value + "<br>Price/Gallon: " + document.getElementById("ppg").value + "<br>Total: " + document.getElementById("total").value + "</p>";
        }
    }
}

document.getElementById("save").onclick = function()
{
    if (localStorage.myListings)
    {
        myListings = JSON.parse(localStorage.myListings)
    }
    else
    {
        myListings = [];
    }

    var date = new Date();

    var entry = {
        date:date,
        odo:document.getElementById("odo").value, 
        ppg:document.getElementById("ppg").value, 
        total:document.getElementById("total").value
    };

    myListings.push(entry);

    var listings = document.getElementById("listings");
    listings.innerHTML += "<p>Date: " + date + "<br>Odometer: " + document.getElementById("odo").value + "<br>Price/Gallon: " + document.getElementById("ppg").value + "<br>Total: " + document.getElementById("total").value + "</p>";

    localStorage.myListings = JSON.stringify(myListings);
};

$(document).ready ( function()
{
    setListings();
});
