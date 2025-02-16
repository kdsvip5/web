<?php
// כאן תוכל להוסיף את הקוד לשליחת דוא"ל עם קישור לשחזור סיסמה

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    
    // בדוק אם האימייל קיים בבסיס הנתונים
    $conn = new mysqli('localhost', 'username', 'password', 'dbname');
    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // אם האימייל קיים, שלח קישור לשחזור סיסמה
        // בקוד זה ניתן להוסיף שליחה של דוא"ל
        echo "קישור לשחזור סיסמה נשלח לאימייל שלך.";
    } else {
        echo "לא נמצא משתמש עם האימייל הזה.";
    }

    $conn->close();
}
?>
