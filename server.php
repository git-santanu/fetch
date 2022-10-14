<?php
$conn = mysqli_connect('localhost','root','','crud');
$query= "select * from crudtest";
$sql= mysqli_query($conn,$query);
$result= mysqli_fetch_all($sql,MYSQLI_ASSOC);
exit(json_encode($result));
?>