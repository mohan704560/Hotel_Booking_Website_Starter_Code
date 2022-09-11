// store user-detail in session storage after login.
var adminLogin = (username1, password1) => {
    if (username1.value === 'admin' && password1.value === 'admin') {
        var detail = {
            username: 'admin',
            password: 'admin'
        }
        sessionStorage.setItem('user-Detail', JSON.stringify(detail));
        alert('Successfully logged in');
    }
}

// perform login and logout operation on the login button.
var loginfunc=()=>{
    if(document.getElementById('login-btn').innerText==='LOGIN'){
        var detail1=JSON.parse(sessionStorage.getItem('user-Detail'));
       if(detail1.username==='admin'&& detail1.password==='admin'){
         document.getElementById('login-btn').innerText='LOGOUT';
         document.getElementById('login-btn').setAttribute('data-bs-target','');
       } 
    }
    else{   
        document.getElementById('login-btn').innerText='LOGIN';
        document.getElementById('login-btn').setAttribute('data-bs-target','#exampleModal');
        sessionStorage.setItem('user-Detail',"");
    }
}

// calculate the price of the hotel.
var price=()=>{
    var adults=document.getElementById('number').value;
    var date1=new Date(document.getElementById('toDate').value);
    var   date2= new Date(document.getElementById('fromDate').value);
    document.getElementById('total').value='Rs. '+ adults*(date1-date2)*1000/(1000*60*60*24);

    console.log(date1);
}
