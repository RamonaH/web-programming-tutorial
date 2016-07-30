<?php

function getContacts ($conn)
{
    $result = pg_query($conn, 'select *from "Agenda"');
    $records = array();

    while ($row = pg_fetch_array($result)) {
        $person = array(
            "id" => $row["ID"],
            "firstName" => $row["nume"],
            "lastName" => $row["prenume"],
            "phone" => $row["telefon"]
        );
        $records[] = $person;
    }
    return ($records);
}

function getConnection(){
    return $conn = pg_connect("host=54.93.65.5 port=5432 dbname=4_Ramona user=fasttrackit_dev password=fasttrackit_dev");
    //connect to a database named "mary" on the host "sheep" with a username and password
}


//var_dump($result);
//var_dump(pg_fetch_all($result));

?>

