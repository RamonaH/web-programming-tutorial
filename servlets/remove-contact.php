<?php
include ("functions.php");

$conn= getConnection();
$id = $_POST["id"];
$resultDel = pg_query($conn, 'delete from "Agenda" where "ID"=' . $id);

$records=getContacts($conn);

pg_close($conn);
echo json_encode($records);

//$filename= "../js/mocks/load-contacts.json";
//$allContactsStr = file_get_contents($filename);

//echo $allContactsStr;

?>