# Node.js Day 2 – Modules & Core Modules

---

## 1. Node.js Modules kya hote hain?

### Module ka simple matlab

Module ek **alag file / block of code** hota hai jo kisi ek specific kaam ke liye bana hota hai.

Simple words me:

* Poora code ek file me likhna = bad practice
* Code ko chhote‑chhote parts me todna = module

---

### Real‑life example

Socho ek mobile phone:

* Camera alag module
* Music alag module
* Calling alag module

Har feature apna kaam karta hai.
Node.js me bhi aise hi modules hote hain.

---

## 2. Types of Modules in Node.js

Node.js me mainly **3 types ke modules** hote hain:

1. Core Modules
2. Local Modules
3. Third‑Party Modules

---

## 2.1 Core Modules

### Core Modules kya hote hain?

Core Modules wo modules hote hain jo **Node.js ke sath by default aate hain**.

Inhe install karne ki zaroorat nahi hoti.

Examples:

* fs
* path
* os
* http

Use karne ka tarika:

```js
const fs = require("fs");
```

---

## 2.2 Local Modules

### Local Modules kya hote hain?

Local modules wo hote hain jo **hum khud banate hain**.

---

### Example

**math.js**

```js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

**app.js**

```js
const add = require("./math");
console.log(add(5, 3));
```

---

### Real‑life example

Jaise tum apni notebook me formulas likhte ho aur exam me use karte ho.

---

## 2.3 Third‑Party Modules

### Third‑Party Modules kya hote hain?

Ye wo modules hote hain jo **npm se install kiye jate hain**.

Example:

* express
* nodemon

Install karne ke liye:

```bash
npm install express
```

---

### Real‑life example

Play Store se app download karna = Third‑party module

---

## 🔹 Interview Questions & Answers (Day 2)

### Q1. Module kya hota hai?

**Answer:**
Module ek reusable block of code hota hai jo kisi ek kaam ke liye use hota hai.

---

### Q2. Core module aur third‑party module me kya difference hai?

**Answer:**
Core module Node.js ke sath aata hai, third‑party module npm se install hota hai.

---

### Q3. fs module ka use kyun hota hai?

**Answer:**
fs module file system operations ke liye use hota hai jaise read aur write.

---

### Q4. Local module kya hota hai?

**Answer:**
Local module wo hota hai jo hum khud banate hain.

---

## ✅ Day 2 Summary

✔ Modules ka concept clear
✔ Core, Local, Third‑party modules samjhe
✔ Interview questions prepared
✔ Practice tasks complete