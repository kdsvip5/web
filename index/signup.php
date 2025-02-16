<?php
// חיבור למסד נתונים (MySQL)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "globaltv";

$conn = new mysqli($servername, $username, $password, $dbname);

// בדוק אם חיבור למסד הנתונים מצליח
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    // אם הסיסמאות לא תואמות
    if ($password !== $confirm_password) {
        echo "<script>alert('הסיסמאות לא תואמות!'); window.location.href = 'signup.html';</script>";
        exit();
    }

    // הצפנת סיסמה
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // הכנת שאילתת SQL
    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$hashed_password')";

    if ($conn->query($sql) === TRUE) {
        // הפנה לעמוד התחברות לאחר הרשמה מוצלחת
        echo "<script>alert('ההרשמה בוצעה בהצלחה!'); window.location.href = 'login.html';</script>";
    } else {
        echo "<script>alert('שגיאה: לא ניתן ליצור את המשתמש. נסה שנית.'); window.location.href = 'signup.html';</script>";
    }

    $conn->close();
}
?>
