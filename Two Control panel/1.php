<?php

$ro1 = $_POST['M1'];
$ro2 = $_POST['M2'];
$ro3 = $_POST['M3'];
$ro4 = $_POST['M4'];
$ro5 = $_POST['M5'];
$ro6 = $_POST['M6'];

// connection

$conn = new mysqli('localhost', 'smartmethods' , '' ,'robotArm');
if($conn->connect_error){
  die('Connection Failed  :'.$conn->connect_error);

}else {

  if(isset($_POST['save'])){

  $stmt = $conn->prepare("insert into sliders Motors_1(M1,M2, M3, M4, M5, M6) values(?,?,?,?,?,?)");
  $stmt->bind_param("iiiiii",$ro1,$ro2,$ro3,$ro4,$ro5,$ro6);
  $stmt->execute();
  echo "Save successfully -_|_- ";
  $stmt->close();
  $conn->close();
}
}

 ?>
