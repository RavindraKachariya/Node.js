# 🚀 Node.js Day 1 – Express.js Complete Notes

---

## 1️⃣ Introduction to Express.js

### Express.js kya hai? (Simple words me)

**Express.js** ek **framework** hai jo **Node.js ke upar bana hota hai**.

👉 Express.js ka kaam hai:

* Server banana **easy** banana
* Routing ko simple karna
* Request–Response handling fast karna

---

### Node.js vs Express.js

| Node.js         | Express.js        |
| --------------- | ----------------- |
| Low-level       | High-level        |
| Zyada code      | Kam code          |
| Complex routing | Simple routing    |
| Manual handling | Automatic helpers |

👉 Express.js = **Node.js ka smart version**

---

### Real-life example

Socho Node.js ek **raw kitchen** hai
Express.js = **ready-made cooking setup**

---

## 2️⃣ Express.js kyun use karte hain?

* Fast development
* Clean & readable code
* Industry standard
* Middleware support
* REST API banana easy

👉 Isliye **almost saare backend jobs Express use karte hain**

---

## 3️⃣ Setting up a Basic Express Application

---

### Step 1: Project folder banao

```bash
mkdir express-app
cd express-app
```

---

### Step 2: package.json banao

```bash
npm init -y
```

---

### Step 3: Express install karo

```bash
npm install express
```

---

### Step 4: Basic server banao (index.js)

```js
const express = require('express');
const app = express();

// server start
app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});
```

👉 Ye **Express ka Hello World** hai

---

## 4️⃣ Routing in Express.js

---

### Routing kya hoti hai?

Routing ka matlab:

> **URL ke hisaab se response dena**

Example:

* `/` → Home
* `/about` → About page

---

### Basic Routing Example

```js
app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/about', (req, res) => {
    res.send("About Page");
});
```

---

### HTTP Methods samjho

| Method | Use         |
| ------ | ----------- |
| GET    | Data lena   |
| POST   | Data bhejna |
| PUT    | Update      |
| DELETE | Delete      |

---

### POST example

```js
app.post('/login', (req, res) => {
    res.send("Login successful");
});
```

---

### Real-life example

ATM:

* GET → Balance check
* POST → Withdraw
* PUT → Update info
* DELETE → Account close

---

## 5️⃣ Request & Response Handling

---

## Request (req) kya hota hai?

Client (browser / app) jo data bhejta hai → **Request**

req me hota hai:

* req.url
* req.method
* req.query
* req.params
* req.body

---

### req.query example

URL:

```
/search?product=mobile
```

```js
app.get('/search', (req, res) => {
    res.send(req.query.product);
});
```

---

### req.params example

```js
app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});
```

---

## Response (res) kya hota hai?

Server jo client ko bhejta hai → **Response**

Common methods:

* res.send()
* res.json()
* res.status()
* res.sendFile()

---

### res.json example

```js
app.get('/api', (req, res) => {
    res.json({ name: "Ravindra", role: "Developer" });
});
```

---

## 6️⃣ Middleware (IMPORTANT 🔥)

---

### Middleware kya hota hai?

Middleware ek **function** hota hai jo:
👉 Request aur Response ke **beech me run hota hai**

---

### Middleware ka flow

```
Request → Middleware → Route → Response
```

---

### Real-life example

Airport security:

* Ticket check
* Security check
* Boarding

Har step = middleware

---

### Custom Middleware Example

```js
const myMiddleware = (req, res, next) => {
    console.log("Middleware executed");
    next(); // next step
};

app.use(myMiddleware);
```

---

### Built-in Middleware

```js
app.use(express.json());
```

👉 JSON data read karne ke liye

---

### Third-party Middleware

```js
npm install morgan
```

```js
const morgan = require('morgan');
app.use(morgan('dev'));
```

---

## 7️⃣ Error Handling in Express.js

---

### Error handling kyun zaroori hai?

* Server crash avoid karne ke liye
* Proper error message dene ke liye
* Production ready app ke liye

---

### Normal error example

```js
app.get('/error', (req, res) => {
    throw new Error("Something went wrong");
});
```

---

### Error Handling Middleware

```js
app.use((err, req, res, next) => {
    res.status(500).send("Internal Server Error");
});
```

⚠️ Error middleware me **4 parameters hote hain**

---

### 404 Error Handling

```js
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});
```

---

## 8️⃣ Complete Simple Express App (Final Code)

```js
const express = require('express');
const app = express();

app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/user/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`);
});

// error route
app.get('/error', (req, res) => {
    throw new Error("Error occurred");
});

// error handler
app.use((err, req, res, next) => {
    res.status(500).send("Server Error");
});

// server
app.listen(3000, () => {
    console.log("Server running...");
});
```

---

## 🔥 Interview Questions (Day 5)

**Q1:** Express.js kya hai?
👉 Node.js ka framework

**Q2:** Middleware kya hota hai?
👉 Request–Response ke beech ka function

**Q3:** Express Node.js se fast kyun hai?
👉 Built-in helpers + routing system

**Q4:** Error middleware me 4 params kyun?
👉 Express ko error identify karne ke liye

---

## ✅ Day 5 Summary

✔ Express.js intro clear
✔ Basic server setup
✔ Routing samjha
✔ Middleware concept clear
✔ Request & response handling
✔ Error handling ready