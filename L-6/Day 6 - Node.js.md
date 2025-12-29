# 🚀 Express.js – Day 6

## Form Handling, Sessions & Cookies, express.json & express.urlencoded

---

## 1️⃣ Form Handling in Express.js

---

## Form Handling kya hota hai?

Form handling ka matlab:
👉 **User ke form se aane wale data ko server par receive aur process karna**

Example:

* Login form
* Contact form
* Signup form

---

### Real-life example

Socho tum ek **college admission form** bharte ho
College office us form ko:

* receive karta hai
* data check karta hai
* process karta hai

👉 Express.js me server wahi kaam karta hai

---

## 2️⃣ HTML Form ka Basic Example

```html
<form action="/submit" method="POST">
  <input type="text" name="username" />
  <input type="password" name="password" />
  <button type="submit">Login</button>
</form>
```

Important cheezein:

* `action` → kis route par data jayega
* `method` → GET ya POST
* `name` → server ko key milti hai

---

## 3️⃣ Form Data Express me kaise aata hai?

### Problem ⚠️

By default Express:
❌ form ka data read nahi kar pata

👉 Isliye hume **middleware** chahiye

---

## 4️⃣ express.urlencoded()

---

### express.urlencoded() kya hai?

Ye ek **built-in middleware** hai jo:
👉 **HTML form data (URL encoded)** ko read karta hai

---

### Kab use hota hai?

* Jab form ka method = POST
* Jab data simple key-value me hota hai

---

### Use kaise karte hain?

```js
app.use(express.urlencoded({ extended: true }));
```

---

### Form handling example

```js
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    console.log(req.body);
    res.send("Form Submitted Successfully");
});

app.listen(3000);
```

---

### req.body kya hota hai?

* Form ke saare input values yahan milte hain
* Key = input ka `name`
* Value = user ka data

---

### Real-life example

Courier box:

* Label = name attribute
* Box ke andar saman = user data

---

## 5️⃣ express.json()

---

### express.json() kya hai?

Ye middleware:
👉 **JSON format ka data read karta hai**

Mostly use hota hai:

* APIs
* React / Mobile apps
* AJAX requests

---

### Use kaise karte hain?

```js
app.use(express.json());
```

---

### JSON request example

```js
app.post('/api/user', (req, res) => {
    console.log(req.body);
    res.json({ status: "Success" });
});
```

---

### Difference samjho (IMPORTANT)

| Middleware         | Data Type |
| ------------------ | --------- |
| express.urlencoded | HTML form |
| express.json       | JSON data |

---

## 6️⃣ Cookies (Theory Only)

---

## Cookies kya hoti hain?

Cookie ek **small data** hota hai jo:
👉 **Browser me store hota hai**

Server browser ko cookie deta hai
Browser har request ke sath cookie bhejta hai

---

### Cookies ka kaam kya hai?

* User ko pehchanna
* Login status store karna
* Preferences save karna

---

### Real-life example

Mall ka stamp:

* Entry par stamp lagta hai
* Baar-baar ticket nahi dikhani padti

---

### Cookies ke features

* Client side store hoti hai
* Size small hota hai
* Expiry hoti hai

---

### Cookies ke types

1. Session Cookie
2. Persistent Cookie

---

## 7️⃣ Session (Theory Only)

---

## Session kya hota hai?

Session ek **server-side storage** hota hai jo:
👉 User ke related data ko temporarily store karta hai

---

### Session ka flow

1. User login karta hai
2. Server session create karta hai
3. Session ID browser ko milti hai
4. Browser har request me session ID bhejta hai

---

### Cookies vs Sessions (IMPORTANT 🔥)

| Cookies      | Sessions    |
| ------------ | ----------- |
| Client side  | Server side |
| Less secure  | More secure |
| Small data   | Large data  |
| Easy to hack | Safer       |

---

### Real-life example

Hotel room key:

* Key = session ID
* Room data = server ke paas

---

## 8️⃣ express.json & express.urlencoded kyun zaroori hain?

### Without middleware ❌

```js
req.body === undefined
```

---

### With middleware ✅

```js
req.body = { username: "Ravi", password: "123" }
```

---

## 9️⃣ Complete Simple Example (Form + JSON)

```js
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/form', (req, res) => {
    res.send(req.body);
});

app.post('/json', (req, res) => {
    res.json(req.body);
});

app.listen(3000, () => {
    console.log("Server running");
});
```

---

## 🔥 Interview Questions (Day 6)

**Q1:** express.urlencoded kya karta hai?
👉 HTML form data read karta hai

**Q2:** express.json ka use kab hota hai?
👉 Jab client JSON data bheje

**Q3:** Cookies kya hoti hain?
👉 Browser me store hone wala small data

**Q4:** Session cookies se better kyun hai?
👉 Kyunki server side store hota hai

---

## ✅ Day 6 Summary

✔ Form handling clear
✔ express.urlencoded samjha
✔ express.json samjha
✔ Cookies theory clear
✔ Sessions theory clear
✔ Real-life examples ke sath understanding