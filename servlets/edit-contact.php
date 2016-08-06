<?php

include ("function.php");
$conn=getConnection();

$id = $_POST["id"];
$nume = $_POST ["firstName"];
$prenume= $_POST ["lastName"];
$telefon = $_POST ["phone"];

$resultEdit= pg_query($conn,'UPDATE "Agenda"
        SET ($nume,$prenume,$telefon) WHERE "ID"=50');

if ($conn->query($resultEdit) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}


pg_close($conn);


?>