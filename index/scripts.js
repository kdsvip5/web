const translations = {
  he: {
    welcome: "ברוכים הבאים ל-IPTV GOLD",
    home: "דף הבית",
    channels: "ערוצים",
    about: "אודות החברה",
    login: "התחברות",
    signup: "הרשמה",
    welcome_message: "ברוכים הבאים ל-IPTV GOLD",
    description: "היכנסו למגוון ערוצים, סרטים ועוד עם IPTV GOLD.",
    rights: "© 2025 IPTV GOLD - כל הזכויות שמורות.",
    signup_title: "הירשם ל-IPTV GOLD",
    signup: "הירשם",
    login_title: "התחבר לחשבון שלך",
    channels_title: "הערוצים שלנו",
    channels_description: "גלה את כל הערוצים הזמינים ב-IPTV GOLD.",
    company_description: "IPTV GOLD מציעה שירותי סטרימינג של ערוצים וסרטים באיכות גבוהה.",
    login_description: "התחבר לחשבונך כדי לגשת לשירותים שלנו.",
    signup_description: "הצטרף ל-IPTV GOLD עם הרשמה קלה ומהירה."
  },
  en: {
    welcome: "Welcome to IPTV GOLD",
    home: "Home",
    channels: "Channels",
    about: "About Us",
    login: "Login",
    signup: "Sign Up",
    welcome_message: "Welcome to IPTV GOLD",
    description: "Enter a variety of channels, movies, and more with IPTV GOLD.",
    rights: "© 2025 IPTV GOLD - All rights reserved.",
    signup_title: "Sign up to IPTV GOLD",
    signup: "Sign Up",
    login_title: "Log in to your account",
    channels_title: "Our Channels",
    channels_description: "Discover all the available channels on IPTV GOLD.",
    company_description: "IPTV GOLD offers high-quality streaming services for channels and movies.",
    login_description: "Log in to your account to access our services.",
    signup_description: "Join IPTV GOLD with easy and quick registration."
  }
};

// פונקציה לשינוי שפה
function setLanguage(language) {
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[language] && translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  // שמירה בהעדפות המקומיות
  localStorage.setItem('language', language);

  // עדכון הקישורים להוסיף את השפה ב-URL
  updateLinksWithLanguage(language);
}

// עדכון קישורים להוסיף את השפה ב-URL
function updateLinksWithLanguage(language) {
  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    const url = new URL(link.href);
    url.searchParams.set('lang', language);
    link.href = url.toString();
  });
}

// טעינת השפה ששמורה בהעדפות המקומיות או מה-URL
window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const savedLanguage = urlParams.get('lang') || localStorage.getItem('language') || 'he'; // ברירת מחדל עברית
  setLanguage(savedLanguage);
}

// פונקציה לאימות הרשמה
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  // קבלת ערכים מהטופס
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // אימות סיסמאות
  if (password !== confirmPassword) {
    alert('הסיסמאות אינן תואמות');
    return;
  }

  // אם הכל תקין, נוכל להגיש את הטופס (במציאות, יש לשלוח לשרת)
  alert('ההרשמה בוצעה בהצלחה');
});
const translations = {
  he: {
    welcome: "ברוכים הבאים ל-IPTV GOLD",
    home: "דף הבית",
    channels: "ערוצים",
    about: "אודות החברה",
    login: "התחברות",
    signup: "הרשמה",
    welcome_message: "ברוכים הבאים ל-IPTV GOLD",
    description: "היכנסו למגוון ערוצים, סרטים ועוד עם IPTV GOLD.",
    rights: "© 2025 IPTV GOLD - כל הזכויות שמורות.",
    signup_title: "הירשם ל-IPTV GOLD",
    signup: "הירשם",
    login_title: "התחבר לחשבון שלך",
    channels_title: "הערוצים שלנו",
    channels_description: "גלה את כל הערוצים הזמינים ב-IPTV GOLD.",
    company_description: "IPTV GOLD מציעה שירותי סטרימינג של ערוצים וסרטים באיכות גבוהה.",
    login_description: "התחבר לחשבונך כדי לגשת לשירותים שלנו.",
    signup_description: "הצטרף ל-IPTV GOLD עם הרשמה קלה ומהירה."
  },
  en: {
    welcome: "Welcome to IPTV GOLD",
    home: "Home",
    channels: "Channels",
    about: "About Us",
    login: "Login",
    signup: "Sign Up",
    welcome_message: "Welcome to IPTV GOLD",
    description: "Enter a variety of channels, movies, and more with IPTV GOLD.",
    rights: "© 2025 IPTV GOLD - All rights reserved.",
    signup_title: "Sign up to IPTV GOLD",
    signup: "Sign Up",
    login_title: "Log in to your account",
    channels_title: "Our Channels",
    channels_description: "Discover all the available channels on IPTV GOLD.",
    company_description: "IPTV GOLD offers high-quality streaming services for channels and movies.",
    login_description: "Log in to your account to access our services.",
    signup_description: "Join IPTV GOLD with easy and quick registration."
  }
};

// פונקציה לשינוי שפה
function setLanguage(language) {
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[language] && translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  // שמירה בהעדפות המקומיות
  localStorage.setItem('language', language);

  // עדכון הקישורים להוסיף את השפה ב-URL
  updateLinksWithLanguage(language);
}

// עדכון קישורים להוסיף את השפה ב-URL
function updateLinksWithLanguage(language) {
  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    const url = new URL(link.href);
    url.searchParams.set('lang', language);
    link.href = url.toString();
  });
}

// טעינת השפה ששמורה בהעדפות המקומיות או מה-URL
window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const savedLanguage = urlParams.get('lang') || localStorage.getItem('language') || 'he'; // ברירת מחדל עברית
  setLanguage(savedLanguage);
}

// פונקציה לאימות הרשמה
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  // קבלת ערכים מהטופס
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // אימות סיסמאות
  if (password !== confirmPassword) {
    alert('הסיסמאות אינן תואמות');
    return;
  }

  // אם הכל תקין, נוכל להגיש את הטופס (במציאות, יש לשלוח לשרת)
  alert('ההרשמה בוצעה בהצלחה');
});
// פונקציה לשינוי שפה
function setLanguage(language) {
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[language] && translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  // שמירה בהעדפות המקומיות
  localStorage.setItem('language', language);
  
  // עדכון הקישורים להוסיף את השפה ב-URL
  updateLinksWithLanguage(language);
}

// עדכון קישורים להוסיף את השפה ב-URL
function updateLinksWithLanguage(language) {
  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    const url = new URL(link.href);
    url.searchParams.set('lang', language);
    link.href = url.toString();
  });
}

// טעינת השפה ששמורה בהעדפות המקומיות או מה-URL
window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const savedLanguage = urlParams.get('lang') || localStorage.getItem('language') || 'he'; // ברירת מחדל עברית
  setLanguage(savedLanguage);
}
// פונקציה לשינוי צבעים
function setColorTheme(color) {
  document.body.classList.remove('gold', 'blue', 'green', 'red');
  document.body.classList.add(color);
  localStorage.setItem('colorTheme', color);

  // הצגת באנר לנגישות
  document.querySelector('.accessibility-banner').classList.add('active');

  setTimeout(function() {
    document.querySelector('.accessibility-banner').classList.remove('active');
  }, 3000);
}

// טעינת צבעים מהעדפות המשתמש
window.onload = function() {
  const savedColorTheme = localStorage.getItem('colorTheme') || 'gold';
  setColorTheme(savedColorTheme);
};

// פונקציה לשינוי שפה
function setLanguage(language) {
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[language] && translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  localStorage.setItem('language', language);
  updateLinksWithLanguage(language);
}

// עדכון קישורים להוסיף את השפה ב-URL
function updateLinksWithLanguage(language) {
  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    const url = new URL(link.href);
    url.searchParams.set('lang', language);
    link.href = url.toString();
  });
}

// טעינת השפה ששמורה בהעדפות המקומיות או מה-URL
window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const savedLanguage = urlParams.get('lang') || localStorage.getItem('language') || 'he'; 
  setLanguage(savedLanguage);
}
// פונקציה להסתיר את הבאנר
function hideBanner() {
  document.querySelector('.accessibility-banner').classList.remove('active');
}

// הצגת באנר לנגישות
window.onload = function() {
  document.querySelector('.accessibility-banner').classList.add('active');
  setTimeout(function() {
    document.querySelector('.accessibility-banner').classList.remove('active');
  }, 3000);  // הבאנר יוסר אחרי 3 שניות
};
/* סגנון כללי */
body {
  font-family: Arial, sans-serif;
  direction: rtl;
  text-align: right;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
}

/* עיצוב לחלק הצטרפות */
.join-us-section {
  padding: 40px;
  background-color: #ffd700;
  text-align: center;
  color: #fff;
  border-radius: 10px;
  margin-top: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.join-us-section h2 {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
}

.join-us-section p {
  font-size: 18px;
  line-height: 1.6;
}

.join-now-button {
  display: inline-block;
  background-color: #000;
  color: #ffd700;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
  transition: all 0.3s ease;
}

.join-now-button:hover {
  background-color: #ffd700;
  color: #000;
}

.join-us-image {
  width: 80%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  margin-top: 30px;
}

/* עיצוב לחלקים אחרים */
.about-section, .team-section {
  padding: 40px;
  background-color: #fff;
  text-align: center;
  margin-top: 40px;
}

.about-section h2, .team-section h2 {
  font-size: 28px;
  font-weight: bold;
}

.team-member {
  display: inline-block;
  width: 45%;
  padding: 10px;
  margin: 10px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.team-member img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.team-member p {
  font-size: 16px;
  margin-top: 10px;
  color: #333;
}
// פונקציה להחלפת מצב צבע
function toggleTheme() {
  document.body.classList.toggle('dark-mode'); // מוסיף/מסיר את מחלקת dark-mode
  const sections = document.querySelectorAll('.login-section, .signup-section');
  sections.forEach(section => {
    section.classList.toggle('dark-mode'); // משנה גם את צבע הרקע של האזורים האלו
  });
  const header = document.querySelector('header');
  header.classList.toggle('dark-mode'); // משנה את הצבע בכותרת
  const footer = document.querySelector('footer');
  footer.classList.toggle('dark-mode'); // משנה את הצבע בכותרת
}
// פונקציה להחלפת מצב צבע
function toggleTheme() {
  document.body.classList.toggle('dark-mode'); // מוסיף/מסיר את מחלקת dark-mode
  const sections = document.querySelectorAll('.login-section, .signup-section');
  sections.forEach(section => {
    section.classList.toggle('dark-mode'); // משנה גם את צבע הרקע של האזורים האלו
  });
  const header = document.querySelector('header');
  header.classList.toggle('dark-mode'); // משנה את הצבע בכותרת
  const footer = document.querySelector('footer');
  footer.classList.toggle('dark-mode'); // משנה את הצבע בכותרת
}

// פונקציה להסתרת באנר הנגישות
function hideBanner() {
  const banner = document.querySelector('.accessibility-banner');
  banner.style.display = 'none';
}
// פונקציה להחלפת מצב צבע
function toggleTheme() {
  document.body.classList.toggle('dark-mode'); // מוסיף/מסיר את מחלקת dark-mode
  const sections = document.querySelectorAll('.channel-card');
  sections.forEach(section => {
    section.classList.toggle('dark-mode'); // משנה גם את צבע הרקע של האזורים האלו
  });
  const header = document.querySelector('header');
  header.classList.toggle('dark-mode'); // משנה את הצבע בכותרת
  const footer = document.querySelector('footer');
  footer.classList.toggle('dark-mode'); // משנה את הצבע בכותרת
}

// פונקציה להסתרת באנר הנגישות
function hideBanner() {
  const banner = document.querySelector('.accessibility-banner');
  banner.style.display = 'none';
}
/* CSS לעיצוב דפי הרשמה והתחברות */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
}

header {
  background-color: #000000;
  color: #FFD700;
  padding: 10px 20px;
  text-align: center;
}

form {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: auto;
}

form input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
}

form button {
  width: 100%;
  padding: 10px;
  background-color: #FFD700;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

form button:hover {
  background-color: #ffcc00;
}
// פונקציה לשינוי צבעי הרקע
function changeColor(color) {
    // הסרת כל הצבעים
    document.body.classList.remove('gold', 'white', 'black', 'gray');
    // הוספת הצבע שנבחר
    document.body.classList.add(color);
}
// פונקציה לשינוי צבעי הרקע
function changeColor(color) {
    // הסרת כל הצבעים
    document.body.classList.remove('gold', 'white', 'black', 'gray');
    // הוספת הצבע שנבחר
    document.body.classList.add(color);
}
function changeColor(color) {
  document.body.className = color;
}
// דוגמת סטטוס להצלחה או שגיאה
document.querySelector('.forgot-password-container form').addEventListener('submit', function(event) {
  event.preventDefault(); // מונע את שליחת הטופס בברירת המחדל

  var email = document.querySelector('input[name="email"]').value;
  
  // בדיקה אם יש כתובת אימייל
  if (email) {
    // הצגת הודעה שהמייל נשלח בהצלחה
    document.getElementById('status').innerHTML = "הבקשה שלך לשחזור סיסמה נשלחה בהצלחה! אנא בדוק את תיבת הדואר שלך.";
    document.getElementById('status').style.color = "green";
  } else {
    // הצגת הודעה אם לא הוזן אימייל
    document.getElementById('status').innerHTML = "נא להכניס כתובת אימייל תקינה.";
    document.getElementById('status').style.color = "red";
  }
});
// דוגמת סטטוס להצלחה או שגיאה
document.querySelector('.forgot-password-container form').addEventListener('submit', function(event) {
  event.preventDefault(); // מונע את שליחת הטופס בברירת המחדל

  var email = document.querySelector('input[name="email"]').value;
  
  // בדיקה אם יש כתובת אימייל
  if (email) {
    // הצגת הודעה שהמייל נשלח בהצלחה
    document.getElementById('status').innerHTML = "הבקשה שלך לשחזור סיסמה נשלחה בהצלחה! אנא בדוק את תיבת הדואר שלך.";
    document.getElementById('status').style.color = "green";
  } else {
    // הצגת הודעה אם לא הוזן אימייל
    document.getElementById('status').innerHTML = "נא להכניס כתובת אימייל תקינה.";
    document.getElementById('status').style.color = "red";
  }
});
// פונקציה לשינוי שפה בדף
function setLanguage(language) {
  // שינוי ה- lang של ה- HTML
  document.documentElement.lang = language;

  // מתאם את הסגנון של הדף לכל שפה
  if (language === 'he') {
    document.body.style.direction = 'rtl';
    document.body.style.textAlign = 'right';
  } else {
    document.body.style.direction = 'ltr';
    document.body.style.textAlign = 'left';
  }
}
function submitForm(event) {
  event.preventDefault(); // מונע טעינה מחדש של הדף

  // קבלת הערכים מהטופס
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // שמירה ב-localStorage
  const contactMessage = {
    name: name,
    email: email,
    subject: subject,
    message: message,
    date: new Date().toISOString(), // זמן שליחת ההודעה
  };

  let messages = JSON.parse(localStorage.getItem("messages")) || []; // אם יש הודעות קיימות, נטען אותן
  messages.push(contactMessage); // נוסיף את ההודעה החדשה
  localStorage.setItem("messages", JSON.stringify(messages)); // נשמור את ההודעות ב-localStorage

  // הצגת הודעה שההודעה נשלחה
  const confirmationMessage = document.getElementById("confirmation-message");
  confirmationMessage.innerHTML = `
    <p>תודה, ${name}! ההודעה שלך נשלחה בהצלחה. אנו ניצור קשר בהקדם האפשרי.</p>
  `;

  // ניקוי הטופס
  document.getElementById("contact-form").reset();
}
	window.onload = function() {
  // קבלת ההודעות מ-localStorage
  let messages = JSON.parse(localStorage.getItem("messages")) || [];

  // אם אין הודעות
  if (messages.length === 0) {
    document.getElementById("messages-list").innerHTML = "<p>אין הודעות כרגע.</p>";
    return;
  }

  // יצירת HTML עבור כל הודעה
  let messagesHTML = messages.map(msg => {
    return `
      <div class="message">
        <p><strong>שם:</strong> ${msg.name}</p>
        <p><strong>אימייל:</strong> ${msg.email}</p>
        <p><strong>נושא:</strong> ${msg.subject}</p>
        <p><strong>הודעה:</strong> ${msg.message}</p>
        <p><strong>שלח בתאריך:</strong> ${new Date(msg.date).toLocaleString()}</p>
      </div>
      <hr>
    `;
  }).join("");

  // הצגת ההודעות
  document.getElementById("messages-list").innerHTML = messagesHTML;
};
// manageMessages.js

window.onload = function() {
  // קבלת ההודעות מ-localStorage
  let messages = JSON.parse(localStorage.getItem("messages")) || [];

  // אם אין הודעות
  if (messages.length === 0) {
    document.getElementById("messages-list").innerHTML = "<p>אין הודעות כרגע.</p>";
    return;
  }

  // יצירת HTML עבור כל הודעה
  let messagesHTML = messages.map(msg => {
    return `
      <div class="message">
        <p><strong>שם:</strong> ${msg.name}</p>
        <p><strong>אימייל:</strong> ${msg.email}</p>
        <p><strong>נושא:</strong> ${msg.subject}</p>
        <p><strong>הודעה:</strong> ${msg.message}</p>
        <p><strong>שלח בתאריך:</strong> ${new Date(msg.date).toLocaleString()}</p>
      </div>
      <hr>
    `;
  }).join("");

  // הצגת ההודעות
  document.getElementById("messages-list").innerHTML = messagesHTML;
};
