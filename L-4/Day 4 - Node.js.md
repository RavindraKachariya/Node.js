# 🌐 Node.js L-4 – Creating a Custom HTTP Server

---

## 1️⃣ HTTP Module kya hota hai?

### Simple words me

`http` module Node.js ko **server banane ki power** deta hai.

Isse hum:

* Request receive kar sakte hain
* Response send kar sakte hain
* Web pages serve kar sakte hain

👉 Browser ↔ Server communication possible hoti hai

---

## 2️⃣ fs Module yahan kyun use ho raha hai?

Is project me `fs` ka use ho raha hai:

* User log file me save karne ke liye
* HTML files read karke response me bhejne ke liye

---

## 3️⃣ Folder Structure (IMPORTANT)

```
custom-server/
│
├── server.js
├── userLog.txt
│
├── index.html
├── contact.html
├── blog.html
├── gallary.html
└── 404.html
```

---

## 4️⃣ Complete Server Code (server.js)

```js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    // favicon request ignore
    if (req.url === '/favicon.ico') {
        res.end();
        return;
    }

    // user log message
    const msg = `New User | Time: ${new Date().toLocaleString()} | IP: ${req.socket.remoteAddress}\n`;

    fs.appendFile('userLog.txt', msg, () => {});

    console.log("Request URL:", req.url);

    let fileName = "";

    switch (req.url) {
        case '/':
            fileName = "index.html";
            break;

        case '/contact':
            fileName = "contact.html";
            break;

        case '/blog':
            fileName = "blog.html";
            break;

        case '/gallary':
            fileName = "gallary.html";
            break;

        default:
            fileName = "404.html";
            break;
    }

    fs.readFile(fileName, (err, result) => {
        if (err) {
            res.end("Error loading page");
            return;
        }
        res.end(result);
    });

});

server.listen(8000, () => {
    console.log("✅ Server started at http://localhost:8000");
});
```

---

## 5️⃣ Code Explanation (Step-by-Step)

### 🔹 http.createServer

* Browser request receive karta hai
* Callback me `req` & `res` milta hai

### 🔹 req.url

* URL ka path batata hai
* Example: `/`, `/contact`

### 🔹 Logging system

* Har visitor ka:

  * Time
  * IP Address
* `userLog.txt` me save hota hai

### 🔹 switch case routing

* URL ke hisaab se HTML file select hoti hai
* Ye **basic routing system** hai

### 🔹 fs.readFile

* HTML file read karta hai
* Browser ko send karta hai

---

## 6️⃣ Tailwind CSS HTML Files

> ⚠️ Tailwind CDN use kiya gaya hai (Beginner-friendly)

---

### 📄 index.html

```html
<!DOCTYPE html>
<html>
<head>
  <title>Home</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">

  <div class="text-center p-10">
    <h1 class="text-4xl font-bold text-blue-600">Home Page</h1>
    <p class="mt-4 text-gray-600">Welcome to our Node.js Custom Server</p>
  </div>

</body>
</html>
```

---

### 📄 contact.html

```html
<!DOCTYPE html>
<html>
<head>
  <title>Contact</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-green-100">

  <div class="text-center p-10">
    <h1 class="text-4xl font-bold text-green-700">Contact Page</h1>
    <p class="mt-4">Email: contact@nodeapp.com</p>
  </div>

</body>
</html>
```

---

### 📄 blog.html

```html
<!DOCTYPE html>
<html>
<head>
  <title>Blog</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-yellow-100">

  <div class="text-center p-10">
    <h1 class="text-4xl font-bold text-yellow-700">Blog Page</h1>
    <p class="mt-4">Read latest Node.js blogs</p>
  </div>

</body>
</html>
```

---

### 📄 gallary.html

```html
<!DOCTYPE html>
<html>
<head>
  <title>Gallery</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-purple-100">

  <div class="text-center p-10">
    <h1 class="text-4xl font-bold text-purple-700">Gallery</h1>
    <p class="mt-4">Beautiful Images Collection</p>
  </div>

</body>
</html>
```

---

### 📄 404.html

```html
<!DOCTYPE html>
<html>
<head>
  <title>404</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-red-100">

  <div class="text-center p-10">
    <h1 class="text-5xl font-bold text-red-600">404</h1>
    <p class="mt-4">Page Not Found</p>
  </div>

</body>
</html>
```

---

## 7️⃣ How to Run

```bash
node server.js
```

Open browser:

* [http://localhost:8000/](http://localhost:8000/)
* [http://localhost:8000/contact](http://localhost:8000/contact)
* [http://localhost:8000/blog](http://localhost:8000/blog)
* [http://localhost:8000/gallary](http://localhost:8000/gallary)

---

## 8️⃣ Interview Important Points 🔥

**Q:** Is server Express ka use karta hai?
👉 Nahi, ye pure Node.js HTTP module par based hai

**Q:** Routing kaise ho rahi hai?
👉 switch-case + req.url

**Q:** Logging ka use kya hai?
👉 User activity track karna

---

## ✅ L-4 Summary

✔ Custom HTTP server bana
✔ Routing samjhi
✔ File system use hua
✔ Logging implemented
✔ Tailwind CSS pages serve hue