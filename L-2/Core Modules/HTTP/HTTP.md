# 🟢 Node.js – HTTP Module / HTTP Model (Complete Detailed Notes)

---

## 1️⃣ HTTP kya hota hai? (Bilkul Basic se)

**HTTP = HyperText Transfer Protocol**

Simple words me:

👉 HTTP ek **rule / language** hai
jiske through **client aur server baat karte hain**

---

### Real-life example (Phone Call)

* Tum call karte ho → Request
* Samne wala sunta hai → Server
* Reply deta hai → Response

👉 HTTP bhi isi tarah kaam karta hai

---

## 2️⃣ Client & Server kya hota hai?

### 🔹 Client

Client wo hota hai jo **request bhejta hai**

Examples:

* Browser (Chrome)
* Mobile App
* Postman

---

### 🔹 Server

Server wo hota hai jo:

* Request sunta hai
* Process karta hai
* Response bhejta hai

👉 Node.js se hum **server banate hain**

---

## 3️⃣ HTTP Request–Response Cycle (MOST IMPORTANT 🔥)

### Step-by-Step Flow

```
Client → Request → Server → Process → Response → Client
```

---

### Step 1️⃣ Client Request bhejta hai

User browser me likhta hai:

```
http://localhost:3000
```

Browser bolta hai:

> “Mujhe data chahiye”

---

### Step 2️⃣ Request Server tak jati hai

Server sunta hai:

> “Kisne request bheji?”
> “Kya chahiye?”

---

### Step 3️⃣ Server Process karta hai

Server check karta hai:

✔ URL kya hai
✔ Method kya hai
✔ Data chahiye ya page

---

### Step 4️⃣ Server Response bhejta hai

Server bolta hai:

> “Ye lo tumhara data”

---

### Step 5️⃣ Client Response receive karta hai

Browser:

* Text dikhata hai
* HTML page render karta hai
* JSON show karta hai

---

## 4️⃣ HTTP Module kya hota hai?

`http` Node.js ka **core module** hai
jo hume **server banane** deta hai.

```js
const http = require("http");
```

👉 Iske bina backend possible nahi

---

## 5️⃣ Basic HTTP Server (Line-by-Line Explanation)

### Full Code

```js
const http = require("http");

const server = http.createServer((req, res) => {

  res.write("Hello World");
  res.end();

});

server.listen(3000);
```

---

### Line by line samjho 👇

#### 1️⃣ http module import

```js
const http = require("http");
```

👉 Server banane ke tools milte hain

---

#### 2️⃣ Server create karna

```js
http.createServer((req, res) => {
```

* `req` = request (client se aayi)
* `res` = response (client ko bhejni)

---

#### 3️⃣ Response likhna

```js
res.write("Hello World");
```

👉 Client ko data bhej rahe ho

---

#### 4️⃣ Response end karna

```js
res.end();
```

👉 Bol rahe ho:

> “Response complete ho gaya”

---

#### 5️⃣ Server start karna

```js
server.listen(3000);
```

👉 Port 3000 par server chalu

---

## 6️⃣ Port kya hota hai? (Confusion clear)

### Simple example

Building = Computer
Room number = Port

👉 Port ek **entry gate** hota hai

Common ports:

* 80 → HTTP
* 443 → HTTPS
* 3000 → Development

---

## 7️⃣ HTTP Methods kya hote hain?

Methods batate hain:

> “Client kya karna chahta hai?”

---

### Common HTTP Methods

| Method | Use         |
| ------ | ----------- |
| GET    | Data lena   |
| POST   | Data bhejna |
| PUT    | Data update |
| DELETE | Data delete |

---

### Real-life example (Form)

* Form open → GET
* Form submit → POST
* Edit → PUT
* Remove → DELETE

---

## 8️⃣ req object (Request) – Deep Explanation

`req` ke andar hota hai:

✔ URL
✔ Method
✔ Headers
✔ Body (data)

---

### Important req properties

```js
req.url      // kis route par request
req.method   // GET / POST
```

Example:

```js
if (req.url === "/about") {
  res.write("About Page");
}
```

---

## 9️⃣ res object (Response) – Deep Explanation

`res` se hum client ko reply bhejte hain

---

### Important res methods

```js
res.write()       // data bhejo
res.end()         // response end
res.setHeader()  // header set
```

---

### Content-Type samjho (IMPORTANT)

```js
res.setHeader("Content-Type", "text/html");
```

| Type             | Use         |
| ---------------- | ----------- |
| text/plain       | Simple text |
| text/html        | HTML        |
| application/json | API         |

---

## 🔟 Routing kya hota hai?

Routing =
**Different URL par different response**

---

### Example

```js
if (req.url === "/") {
  res.write("Home Page");
}
else if (req.url === "/about") {
  res.write("About Page");
}
```

---

## 1️⃣1️⃣ Status Codes kya hote hain?

Status batata hai:

> “Request ka result kya hua”

---

### Common Status Codes

| Code | Meaning        |
| ---- | -------------- |
| 200  | Success        |
| 404  | Page not found |
| 500  | Server error   |

---

### Example

```js
res.statusCode = 200;
```

---

## 1️⃣2️⃣ Full HTTP Server Example (All Concepts)

```js
const http = require("http");

const server = http.createServer((req, res) => {

  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/" && req.method === "GET") {
    res.write("Home Page");
  }
  else if (req.url === "/about") {
    res.write("About Page");
  }
  else {
    res.statusCode = 404;
    res.write("Page Not Found");
  }

  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

## 1️⃣3️⃣ Why HTTP is Stateless?

Stateless =
Server ko **yaad nahi rehta** previous request

👉 Har request nayi hoti hai

---

### Real-life example

Shopkeeper:

> “Har baar naam batao”

---

## 1️⃣4️⃣ HTTP vs HTTPS (Basic idea)

| HTTP         | HTTPS     |
| ------------ | --------- |
| Unsecure     | Secure    |
| Data visible | Encrypted |
| Port 80      | Port 443  |

---

## 🔹 Interview Questions (HTTP)

### Q1. HTTP kya hai?

**Answer:**
HTTP ek protocol hai jo client aur server ke beech communication karta hai.

---

### Q2. Request-Response cycle explain karo

**Answer:**
Client request bhejta hai, server process karta hai aur response bhejta hai.

---

### Q3. HTTP module ka use?

**Answer:**
Node.js me server create karne ke liye.

---

### Q4. Port kya hota hai?

**Answer:**
Server ka entry point hota hai.

---

## ✅ HTTP Module Final Summary

✔ HTTP basics clear
✔ Client–Server samjha
✔ Request–Response flow
✔ req & res deep clear
✔ Routing & status codes
✔ Backend foundation strong 🚀