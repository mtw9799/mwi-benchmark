<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    /* 
    If I had a DB to push to and it were appropriate to push to a DB, I would

    1) call a PHP file containing DB credentials
    2) create the DB connection
    3) construct the MySQL INSERT statement
    4) execute the SQL
    5) close the connection

    The following uncommented code is to confirm that the PHP works in this situation.
    */

    // create a new object, write the sanatized data to the object and return a JSON.
    $finalData = new stdClass();
    $finalData->email = sanitizeData($_POST["email"]);
    $finalData->subject = sanitizeData($_POST["subject"]);
    $finalData->message = sanitizeData($_POST["message"]);
    $testOutput = json_encode($finalData);
    echo $testOutput;
}

// This functions helps stop any script injection attacks
function sanitizeData($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>