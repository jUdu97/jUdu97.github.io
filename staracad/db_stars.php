<?php
    // define variables to get data from
    $date = $_POST["app_date"];
    $fName = $_POST["first_name"];
    $lName = $_POST["last_name"];
    $home = $_POST["planet"];
    $system = $_POST["star_sys"];
    $class = $_POST["rank"];
    $school = $_POST["dep_major"];
    $grade = $_POST["grading"];

    //append each variable to one variable
    $info = $date . "\n" $fName . "\n" $lName . "\n" $home . "\n" $system . "\n" $class . "\n" $school . "\n" $grade;

    //open text file
    $txt = file_put_contents('/tmp/starout.txt', $info, FILE_APPEND | LOCK_EX);

    //check if file exists
    if($txt === false) {
        die('Error occurred');
    }
    else {
        echo "$txt bytes written to file";
    }
 ?>
