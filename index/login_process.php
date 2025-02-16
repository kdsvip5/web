<?php
session_start();

// הנתונים שהמשתמש הזין בטופס
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

// אתחול חיבור לבסיס נתונים (לדוגמה עם MySQL)
$conn = new mysqli('localhost', 'username', 'password', 'dbname');

// אם החיבור לא מצליח
if ($conn->connect_error) {
    die("חיבור נפל: " . $conn->connect_error);
}

// בדיקה אם יש משתמש עם פרטי ההתחברות
$sql = "SELECT * FROM users WHERE email='$email' AND username='$username' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // אם יש התאמה, נכנס למערכת
    $_SESSION['username'] = $username;
    header("Location: home.php");  // הפנה את המשתמש לדף הבית
} else {
    echo "שם המשתמש או הסיסמה שגויים.";
}

$conn->close();
?>
