<?php
    // define connection variables
    $server = "localhost";
    $username = "root";
    $password = "4u!XQ@WK4zk9";
    $dbname = "stars";

    // check if connection to db works
    $conn = new mysqli($server, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // define variables to get data from
    $date = $_POST["app_date"];
    $fName = $_POST["first_name"];
    $lName = $_POST["last_name"];
    $home = $_POST["planet"];
    $system = $_POST["star_sys"];
    $class = $_POST["rank"];
    $school = $_POST["dep_major"];
    $grade = $_POST["grading"];

    //make SQL statement to insert data in DB
    $sql = "INSERT INTO students (appDate, firstName, lastName, planet, starSys, ranking, major, gpa) VALUES ('$date', '$fName', '$lName', '$home', '$system', '$class', '$school', '$grade')";

    if ($conn->query($sql) === TRUE) {
        echo " Application record created successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    //close connection
    $conn->close();
 ?>
