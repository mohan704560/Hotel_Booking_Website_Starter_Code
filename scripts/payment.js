var urlParam = new URLSearchParams(window.location.search);
 
var hotelInfo = async()=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': "4277182aa4msh17a698a755d5e95p18ba1djsnf40a199b44bc",
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };
    const locationID = urlParam.get("location_id");
    console.log(locationID);
    
    const res = await fetch(`https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${locationID}&adults=1&lang=en_US&currency=USD&nights=2`, options);
    const data = await res.json();    
    console.log(data);
    var hotel = data.data[0];
    populateDetails(hotel);
    
}
hotelInfo();

var populateDetails = (hotel)=>{
    var disContainerText = `<div id="description">
<img src=${hotel.photo.images.medium.url} id="hotelImg" />
<div>
    <h2>${hotel.name}</h2>
    <br/>
    <p>${hotel.address}</p>
</div>
</div>`
document.getElementById("disContainer").innerHTML = disContainerText;
console.log(disContainerText);

const totalDates=new Date(urlParam.get("toDate")) - new Date(urlParam.get("fromDate"));
const amount = urlParam.get("total");
var cusDetailText = ` <div id="CusDetail">
<p><b>Name:</b>${urlParam.get("name")}</p>
<p><b>Number of Adults:</b> ${urlParam.get("adult")}</p>
<p><b>Check-in Date:</b> ${urlParam.get("fromDate")}</p>
<p><b>Check-out Date:</b> ${urlParam.get("toDate")}</p>
</div>
<div id="payDetail">
<p><b>Tariff Breakdown:</b> Rs.1000 x ${urlParam.get("adult")} Adults x ${totalDates / (1000 * 60 * 60 * 24)} Nights</p>
<p><b>Total Amount:</b> ${urlParam.get("total")}</p>
</div>
<div id="pbutton">
<button class="btn btn-success" id="pay-btn" onclick="alert('Hi your booking is successfull !!')" disabled>Pay Now</button>
</div>`
document.getElementById("plan").innerHTML = cusDetailText;
console.log(cusDetailText);
console.log(amount);
console.log(amount.split("%20"));

document.getElementById("loaderContainer").style.display = "none";
document.getElementById("container").style.display = "block";
}

