<?php

include ("functions.php");
$conn=getConnection();

$id = $_POST["id"];
$nume = $_POST ["firstName"];
$prenume= $_POST ["lastName"];
$telefon = $_POST ["phone"];

$resultEdit = pg_query_params($conn, 'UPDATE "Agenda" SET nume=$1 ,prenume=$2, telefon=$3 WHERE "ID"= $4', array($nume, $prenume, $telefon, $id));

//$sql = "UPDATE \"Agenda\" SET ( \"firstName\" =$nume ,\"lasName\"=$prenume,\"phone\"=$telefon) WHERE \"ID\"=$id";
//$resultEdit= pg_query($conn, $sql);

//echo $sql;
//if ($conn->query($resultEdit) === TRUE) {
//    echo "Record updated successfully $nume.";
//    echo 'Record updated successfully ' . $nume . '.';
//} else {
//    echo "Error updating record: " . $conn->error;
//}


pg_close($conn);


?>