// Hreader template
`<header id="header">
      <img id="logo" src="assests\images\logo.png" alt="logo" />
      <button type="button" id="login-btn" class="btn btn-light mx-5" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="loginfunc()">
        LOGIN
      </button>
    </header>

<div class="modal fade displaypro" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Please Login</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
          <form id="form1" action="index.html" method="get" target="_self">
            <label for="username" class="mx-5 my-3">Username:</label>
            <input type="text" id="username" class="me-5" name="username" style="width:50%" placeholder="Enter Username"
              required /><br />
            <label for="password" class="mx-5 my-3">Password: </label>
            <input type="password" id="password" class="me-5" name="password" style="width:50%"
              placeholder="Enter Password" required /><br />
          </form>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary mx-auto" form="form1" onclick="adminLogin(username,password)">Login</button>
        </div>

      </div>
    </div>
  </div>`

  
// footer template

`<footer id="footer">
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-info contact text-white" data-bs-toggle="modal" data-bs-target="#exampleModal1">
        Contact Us
      </button>
      <section>
        <a href="https://www.facebook.com" target="_blank"><img src="assests\images\facebook.png" hieght="20px"
            width="22px" /></a>
        <a href="https://www.instagram.com" target="_blank"><img src="assests\images\instagram.png" hieght="20px"
            width="22px" /></a>
        <a href="https://twitter.com" target="_blank"><img src="assests\images\twitter.png" hieght="20px"
            width="22px" /></a>
      </section>
      <div>
        &copy; 2020 ROOM SEARCH PVT. LTD.
      </div>
    </footer>

<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Get in touch</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <p>Thank you for reaching out!!!<br/>
        Please enter you email and we will get back to you</p>
        <form id="form2" action="index.html" method="get" target="_self">
        <label for="email">Email:</label>
        <input type="email" placeholder="Enter your email id" name="email" id="email" required/><br/> 
      </form> 
    </div>
    <div class="modal-footer">
      <button type="submit" class="btn btn-primary" form="form2">Submit</button>
    </div>
  </div>
</div>
</div>`