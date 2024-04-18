<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Got</title>
  <link rel="stylesheet" href="gotcss.css">
  <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="orderform.css">
  <link rel="stylesheet" href="navbar.css">
  <link rel="stylesheet" href="gotbox.css">

  


</head>

<body>

  <header>
    <nav class="navbar">
      <ul class="navbar-list">
        <h6>+40728353769</h6>
        <li class="navbar-logo"><a href="Got-home.html"><img
              src="the-logo-atestat.png">
          </a></li>
        <p>DracoBazaar</p>
        <li class="navbar-item"><a href="Tresure.html">Treasures</a></li>
        <li class="navbar-item"><a href="http://127.0.0.1:5500/Atestat-Coderdojo/Our%20Legend.html">Our Legend</a></li>

        <!--<li class="navbar-item"><a href="http://127.0.0.1:5500/Atestat-Coderdojo/Account.html">Account</a></li>-->
        <li class="navbar-item"><a href="GotCart.html"><img src="pngimg.com - treasure_chest_PNG76.png">

            <div id="cartAmount" class="cartAmount">0</div>
          </a>
        </li>
      </ul>
    </nav>
  </header>


  <div class="shop" id="shop">

  </div>



  <div class="container">

    <div class="title">
      <h2>Product Order Form</h2>
    </div>
    <div class="d-flex">
      <form action="" method="POST">
        <label>
          <span class="fname">First Name <span class="required">*</span></span>
          <input type="text" name="fname" id="fname">
        </label>
        <label>
          <span class="lname">Last Name <span class="required">*</span></span>
          <input type="text" name="lname" id="lname">
        </label>
        <label>
          <span>Street Address <span class="required">*</span></span>
          <input type="text" name="street" id="street" required>
        </label>

        <label>
          <span>Town / City <span class="required">*</span></span>
          <input type="text" name="city" id="city">
        </label>
        <!--
        <label>
          <span>State / County <span class="required">*</span></span>
          <input type="text" name="city2" id="city2">
        </label>
      -->
        <label>
          <span>Phone <span class="required">*</span></span>
          <input type="tel" name="phone" id="phone">
        </label>
        <label>
          <span>Email Address <span class="required">*</span></span>
          <input type="email" name="email" id="email">
        </label><br>
        <button type="submit" id="submit">Place Order</button>
        <!--<button type="button">Place Order</button>-->
        
      </form>

         </div>



  
</div>
<style>

p-col{color:black;}

</style>

<?php
$servername = "localhost";
$username = "ilibotean";
$password = "98865";
$dbname = "ilibotean";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

error_reporting(0);

$fname=$_POST['fname'];
$lname=$_POST['lname'];
$street=$_POST['street'];
$city=$_POST['city'];
$phone=$_POST['phone'];
$email=$_POST['email'];


if ($fname !=NULL)
    if ($lname !=NULL)
        if ($street !=NULL)
            if ($city !=NULL)
                if ($phone !=NULL)
                    if ($email !=NULL)
                       { $sql="INSERT INTO `ORDER` (lname,fname,street,city,phone,email) VALUES('$fname','$lname','$street','$city','$phone','$email')";
$result = $conn->query($sql);
if ($result == TRUE)
{
    echo "Thank you for your order!";
    echo "<br>";
    echo "<br>";
    echo "<p-col> Last Name: ".$lname."</p>";
    echo "<p-col>First Name: ".$fname."</p>";
    echo "<p-col>Email: ".$email."</p>";
    echo "<p-col>Phone: ".$phone."</p>";



}
else
{
    echo $conn->error;
}

}

$conn->close();
?>



  <footer>

    <div class="cr">
      Copyright&copy; 2023 DracoBazaar. All Rights ReservedÂ®. <br> This website may contain mature content.
    </div>
    <p>Libotean Ingrid Silvia È™i Ghiocel Andrei</p>
  </footer>


</body>

</html>