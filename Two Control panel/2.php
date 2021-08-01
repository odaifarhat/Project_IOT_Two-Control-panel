<?php
  if(isset($_POST['on'])) {
$servername = "localhost";
$username = "smartmethods";
$password = "123456789";
$dbname = "robotArm";

  $conn= mysqli_connect($servername, $username, $password,$dbname);

  $insert="insert into sliders Motors_1 values(1)";
}
 ?>
