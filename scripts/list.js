var hotelData;
// call location API to provide location details.
var cities = async() => {
    const url = window.location.search;
    const urlParam = new URLSearchParams(url);
    const city = urlParam.get("city");
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': "4277182aa4msh17a698a755d5e95p18ba1djsnf40a199b44bc",
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };

    const response = await fetch(`https://travel-advisor.p.rapidapi.com/locations/search?query=${city}&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`, options)
    const  data = await response.json();
    hotelData = data.data;
    console.log(data);

    const sectionTag=document.querySelector("#list>section");

    hotelData.map(data =>{
     if(data.result_object.category.key=="hotel" && data.result_object.rating && data.result_object.address){
        const hotelcard = `<div class="divhotelImg">
        <a href="detail.html?location_id=${data.result_object.location_id}" target="_self">
          <div class="container2">
            <img src=${data.result_object.photo.images.medium.url} class="hotelImg" />
          </div>
          <div class="discription pt-3">
            <h3>${data.result_object.name}</h3>
            <p>${data.result_object.rating} <i class="fa-solid fa-star" style="color:orange"></i></p>
            <p>${data.result_object.address}</p>
          </div>
        </a>
      </div>`

      sectionTag.innerHTML+=hotelcard;
     }})
}

cities();


