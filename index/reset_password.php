<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "globaltv";

// יצירת חיבור למסד הנתונים
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $token = $_POST['token'];
    $new_password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    // בדוק אם הסיסמאות תואמות
    if ($new_password !== $confirm_password) {
        echo "הסיסמאות לא תואמות.";
        exit();
    }

    // הצפנת הסיסמה החדשה
    $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);

    // בדוק אם הטוקן תקף
    $sql = "SELECT * FROM users WHERE reset_token = '$token' AND reset_expiration > NOW()";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // עדכון הסיסמה במסד הנתונים
        $update_sql = "UPDATE users SET password = '$hashed_password', reset_token = NULL, reset_expiration = NULL WHERE reset_token = '$token'";
        if ($conn->query($update_sql) === TRUE) {
            echo "הסיסמה שונתה בהצלחה!";
        }
    } else {
        echo "הקישור לאיפוס הסיסמה לא תקף או שפג תוקפו.";
    }

    $conn->close();
}
?>
