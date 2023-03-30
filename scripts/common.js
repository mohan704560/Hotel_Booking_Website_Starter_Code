// Hreader template
var headerTemplate = `<a href="index.html" target="_self"><img id="logo" src="assests/images/logo.png" alt="logo" /></a>
      <button type="button" id="login-btn" class="btn btn-light mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="loginfunc()">LOGIN</button>`;
document.getElementById("header").innerHTML = headerTemplate;

//Footer template
var Footertemplate = `<button type="button" class="btn btn-info contact text-white" data-bs-toggle="modal"
   data-bs-target="#exampleModal1">
   Contact Us
 </button>
 <section>
   <a href="https://www.facebook.com" target="_blank"><img src="assests/images/facebook.png" height="20px"
       width="22px" /></a>
   <a href="https://www.instagram.com" target="_blank"><img src="assests/images/instagram.png" height="20px"
       width="22px" /></a>
   <a href="https://twitter.com" target="_blank"><img src="assests/images/twitter.png" height="20px"
       width="22px" /></a>
 </section>
 <div>
   &copy; 2020 ROOM SEARCH PVT. LTD.
 </div>`;
document.getElementById("footer").innerHTML = Footertemplate;

//Modal template index.html target="_self"
var modalTemplate = ` <div class="modal fade displaypro" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Please Login</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <form id="form1" onSubmit="adminLogin(event,username,password)" autocomplete="off">
      <label for="username" class="my-3" style="width:40% ;text-align: center">Username:</label>
      <input type="text" id="username" name="username" style="width:50%" placeholder="Enter Username" required /><br />
      <label for="password" class="my-3" style="width:40%; text-align: center">Password: </label>
      <input type="password" id="password" name="password" style="width:50%" placeholder="Enter Password" required /><br />
    </form>
  </div>
  <div class="modal-footer">
    <button type="submit" class="btn btn-primary mx-auto" form="form1">Login</button>
  </div>
</div>
</div>
</div>
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Get in touch</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <p>Thank you for reaching out!!!<br />
        Please enter you email and we will get back to you</p>
      <form id="form2" action="index.html" method="get" target="_self">
        <label for="email">Email:</label>
        <input type="email" placeholder="Enter your email id" name="email" id="email" required /><br />
      </form>
    </div>
    <div class="modal-footer">
      <button type="submit" class="btn btn-primary" form="form2">Submit</button>
    </div>
  </div>
</div>
</div>`;
document.getElementById("modalDiv").innerHTML = modalTemplate;

// store user-detail in session storage after login.
var adminLogin = (e,username1, password1) => {
  e.preventDefault();
  if (username1.value === 'admin' && password1.value === 'admin') {
      var detail = {
          username: 'admin',
          password: 'admin'
      }
      sessionStorage.setItem('user-Detail', JSON.stringify(detail));
      alert('Successfully logged in');
      location.reload();
  }
}

// perform login and logout operation on the login button.
var loginfunc=()=>{
  let payButton = document.getElementById('pay-btn');
  if(document.getElementById('login-btn').innerText==='LOGIN'){
      var detail1=JSON.parse(sessionStorage.getItem('user-Detail'));
     if(detail1 && detail1.username==='admin'&& detail1.password==='admin'){
       document.getElementById('login-btn').innerText='LOGOUT';
       document.getElementById('login-btn').setAttribute('data-bs-target','');
       
       payButton?payButton.disabled=true:"";
     } 
  }
  else{   
      document.getElementById('login-btn').innerText='LOGIN';
      document.getElementById('login-btn').setAttribute('data-bs-target','#exampleModal');
      sessionStorage.setItem('user-Detail',"");
       payButton?payButton.disabled=false:"";
  }
}