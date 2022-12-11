// perform viewmore operation on viewmore button.
var viewMore=()=>{
    var id=document.getElementById('view-btn');
   if(id.innerText==='View Less'){
   Array.from(document.getElementsByClassName('hidden')).forEach(element => {
        element.style.display="none";
     });
     id.innerText='View More';
   }
   else{
    Array.from(document.getElementsByClassName('hidden')).forEach(element => {
        element.style.display="inline";
     });
     id.innerText='View Less';
   }
}

// perform search operation
var onSearch=async()=>{
   const input = document.getElementsByClassName("search")[0].value;
   console.log(input);
   if(input.length>=3){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '01c8aeafbamsh9a2f4beaf2b7c8dp1a87c4jsn6f7eb97ed1c1',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };
    
    const response = await fetch(`https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=${input.toLowerCase()}&lang=en_US&units=km`, options);
    const data = await response.json();
    let locationArr = [];
    let result = data.data.Typeahead_autocomplete.results;
    for(var i=0;i<result.length;i++){
        if(result[i].__typename=="Typeahead_LocationItem" && result[i].detailsV2.placeType=="CITY" ){
            locationArr.push(result[i].detailsV2.names.name);
        }
    }
     let searchDivtext = "";
    locationArr.map(city=>{
        searchDivtext+=`<input class="searchList" type="text" value=${city} onclick="onSearchCity(event)" readonly/>`;
    })
    document.querySelector("#divsearch>div").innerHTML = searchDivtext;
   }
}

const onSearchCity=(e)=>{
   let city = e.target.value;
   window.location.href = `list.html?city=${city}`;
}

