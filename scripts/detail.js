// calculate the price of the hotel.
var price = () => {
    var adults = document.getElementById('number').value;

    var toDateElement = document.getElementById('toDate');
    var fromDateElement = document.getElementById('fromDate');
    var date1 = new Date(toDateElement.value);
    var date2 = new Date(fromDateElement.value);
    toDateElement.min=fromDateElement.value;

    document.getElementById('total').value = 'Rs. ' + adults * (date1 - date2) * 1000 / (1000 * 60 * 60 * 24);

}

var locationId;

var hotelDetail = async()=>{

    const urlParam = new URLSearchParams(window.location.search);
     locationId = urlParam.get("location_id");
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': "4277182aa4msh17a698a755d5e95p18ba1djsnf40a199b44bc",
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}};

    const response = await fetch(`https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${locationId}&adults=1&lang=en_US&currency=USD&nights=2`, options);
    
	console.log(response);
    const data = await response.json();
    var hotelData = data.data[0];
    console.log(data);
    console.log(locationId);
    const ratingData  = hotelData.rating;
    let ratingString = "";
    for(var  i=1 ; i<=Math.trunc(ratingData); i++){
         ratingString+='<i class="fa-solid fa-star" style="color:orange"></i>';
    }
    if((ratingData-Math.trunc(ratingData))!=0){
        ratingString+= '<i class="fa-solid fa-star-half-stroke" style = "color:orange"></i>'
    }
    let amenitiesString = '';
    for(var i=1;i<=10;i++){
        amenitiesString +=`<li>${hotelData.amenities[i].name}</li>`;
    }

   var descriptionText = `<h2>${hotelData.name}</h2>
   <h5>RATING</h5>
   ${ratingString}
   <br/>
   <h5>AMENITIES</h5>
   <ul style="list-style-type:disc">
   ${amenitiesString}
   </ul>
   <h5>DESCRIPTION</h5>
   <p>${hotelData.description}</p>`

   document.getElementById("description").innerHTML=descriptionText;

}

hotelDetail();

const fomrHandler=(e)=>{
    e.preventDefault();
    let adult = document.getElementById("number").value;
    let name = document.getElementById("name").value;
    let fromDate = document.getElementById("fromDate").value;
    let toDate = document.getElementById("toDate").value;
    let total = document.getElementById("total").value;

    window.location.assign(`payment.html?location_id=${locationId}&adult=${adult}&name=${name}&fromDate=${fromDate}&toDate=${toDate}&total=${total}`);
}