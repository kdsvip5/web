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
    $email = $_POST['email'];

    // לבדוק אם הדוא"ל קיים במסד הנתונים
    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // יצירת טוקן איפוס אקראי
        $token = bin2hex(random_bytes(50));

        // זמן תפוגה של הקישור (30 דקות)
        $expiration = date("Y-m-d H:i:s", strtotime("+30 minutes"));

        // עדכון הטוקן והפניה למסד הנתונים
        $update_sql = "UPDATE users SET reset_token = '$token', reset_expiration = '$expiration' WHERE email = '$email'";
        if ($conn->query($update_sql) === TRUE) {
            // שליחת מייל עם קישור לאיפוס סיסמה
            $reset_link = "https://yourdomain.com/reset_password.php?token=$token";
            $subject = "בקשה לאיפוס סיסמה";
            $message = "שלום,\n\nעל מנת לאפס את הסיסמה שלך, לחץ על הקישור הבא: $reset_link\n\nאם לא ביקשת איפוס סיסמה, אנא התעלם מהמייל.";
            $headers = "From: no-reply@yourdomain.com";

            mail($email, $subject, $message, $headers);

            echo "קישור לאיפוס הסיסמה נשלח אליך!";
        }
    } else {
        echo "לא נמצא משתמש עם דוא"ל זה.";
    }
}

$conn->close();
?>
