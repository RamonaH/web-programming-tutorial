<?php include("header-tpl.php"); ?>

<?php //Save contact if necesary

if (isset($_POST["firstName"])) {
    include ("servlets/save-contact.php");
//    $filename= "js/mocks/load-contacts.json";
//    $allContactsStr = file_get_contents($filename);
//    $allContacts = json_decode($allContactsStr);
//
//    $lastContact = $allContacts [count ($allContacts)-1];
//
//    $newPerson = array(
//        "id" => $lastContact->id + 1,
//        "firstName" => $_POST["firstName"],
//        "lastName" => $_POST["lastName"],
//        "phone" => $_POST["phone"]
//
//    );

    echo "<p> Contact successfuly added!</p>";
}
?>

<div id="breadcrumb">HOME : welcome Ramona</div>

<h1>Agenda</h1>

<form action="" method="POST">
    <input type="hidden" name="id">
    <input type="text" name="firstName" placeholder="Nume" required="required">
    <input type="text" name="lastName" placeholder="Prenume">
    <input type="text" name="phone" placeholder="Telefon">
    <button>Add</button>
</form>
<br>

<table id="agenda">
    <thead>
    <tr>
        <th>Nume</th>
        <th>Prenume</th>
        <th>Telefon</th>
        <th width="150px"></th>
    </tr>
    </thead>
    <tbody>

    </tbody>
</table>

<?php include("footer-tpl.php"); ?>