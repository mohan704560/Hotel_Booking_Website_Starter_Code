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