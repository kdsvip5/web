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
    $email = $_POST['email'];
    $password = $_POST['password'];

    // שאילתת SQL למציאת המשתמש
    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // נמצא משתמש עם הדוא"ל הזה
        $row = $result->fetch_assoc();
        $hashed_password = $row['password'];

        // השוואת הסיסמאות
        if (password_verify($password, $hashed_password)) {
            echo "ההתחברות הצליחה!";
            session_start();
            $_SESSION['user_id'] = $row['id'];
            header("Location: index.html"); // הפנה לדף הבית לאחר התחברות מוצלחת
        } else {
            echo "סיסמה שגויה!";
        }
    } else {
        echo "לא נמצא משתמש עם דוא"ל זה!";
    }

    $conn->close();
}
?>
