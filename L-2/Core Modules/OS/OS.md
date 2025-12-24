# 🟢 Node.js – OS Module (Complete Detailed Notes)

---

## 1️⃣ OS Module kya hota hai? (Very Simple)

`os` Node.js ka **core module** hai jo hume **computer / system ki information** deta hai.

Matlab Node.js se hum jaan sakte hain:

✔ Kaunsa operating system hai
✔ Kitni RAM hai
✔ CPU ka type
✔ System ka naam
✔ User ka home folder
✔ Network info

👉 Ye module **system monitoring** aur **debugging** ke kaam aata hai.

---

## 2️⃣ OS Module kyun zaroori hai?

### Real-life example

Jaise phone me tum dekhte ho:

* Android version
* RAM
* Storage
* Device name

Node.js me wahi kaam **os module** karta hai 💻

---

## 3️⃣ OS Module import kaise kare?

```js
const os = require("os");
```

👉 Ye **core module** hai, install nahi karna

---

## 4️⃣ Basic OS Information

---

### 4️⃣.1️⃣ os.type() – OS ka naam

```js
console.log(os.type());
```

**Output example:**

```
Windows_NT
```

---

### 4️⃣.2️⃣ os.platform() – Platform

```js
console.log(os.platform());
```

**Examples:**

* win32 → Windows
* linux → Linux
* darwin → macOS

---

### 4️⃣.3️⃣ os.arch() – CPU Architecture

```js
console.log(os.arch());
```

**Example:**

```
x64
```

---

## 5️⃣ Memory (RAM) Information

---

### 5️⃣.1️⃣ os.totalmem() – Total RAM

```js
console.log(os.totalmem());
```

👉 Bytes me output aata hai

---

### 5️⃣.2️⃣ os.freemem() – Free RAM

```js
console.log(os.freemem());
```

---

### Convert Bytes → GB (Best Practice)

```js
function bytesToGB(bytes) {
  return (bytes / 1024 / 1024 / 1024).toFixed(2);
}

console.log("Total RAM:", bytesToGB(os.totalmem()), "GB");
console.log("Free RAM:", bytesToGB(os.freemem()), "GB");
```

---

## 6️⃣ CPU Information

---

### 6️⃣.1️⃣ os.cpus() – CPU details

```js
const cpuInfo = os.cpus();
console.log(cpuInfo);
```

👉 Har core ka detail deta hai

---

### 6️⃣.2️⃣ CPU cores count

```js
console.log("CPU Cores:", os.cpus().length);
```

---

### Real-life example

Socho factory me:

* Zyada machines → zyada kaam ek saath

CPU cores = machines

---

## 7️⃣ User & System Info

---

### 7️⃣.1️⃣ os.hostname() – Computer ka naam

```js
console.log(os.hostname());
```

---

### 7️⃣.2️⃣ os.homedir() – User ka home folder

```js
console.log(os.homedir());
```

---

### 7️⃣.3️⃣ os.userInfo() – User details

```js
console.log(os.userInfo());
```

---

## 8️⃣ OS Uptime

---

### os.uptime() – System kitni der se on hai

```js
console.log(os.uptime());
```

👉 Seconds me output aata hai

---

### Convert seconds → hours

```js
const hours = (os.uptime() / 3600).toFixed(2);
console.log("System Uptime:", hours, "hours");
```

---

## 9️⃣ Network Information

---

### os.networkInterfaces()

```js
console.log(os.networkInterfaces());
```

👉 IP address, network details deta hai

---

### Real-life example

Jaise Wi-Fi settings me IP address

---

## 🔟 OS Module ka Real Use Case

✔ Server load check
✔ Memory usage monitor
✔ Platform based logic
✔ Logging & debugging

---

### Example: Platform based message

```js
if (os.platform() === "win32") {
  console.log("Running on Windows");
} else {
  console.log("Running on other OS");
}
```

---

## 🔹 Common OS Methods (Quick Table)

| Method               | Use                 |
| -------------------- | ------------------- |
| os.type              | OS name             |
| os.platform          | OS platform         |
| os.arch              | CPU architecture    |
| os.totalmem          | Total RAM           |
| os.freemem           | Free RAM            |
| os.cpus              | CPU info            |
| os.hostname          | System name         |
| os.homedir           | Home directory      |
| os.userInfo          | User info           |
| os.uptime            | System running time |
| os.networkInterfaces | Network info        |

---

## 🔹 Interview Questions (OS Module)

### Q1. OS module kya hai?

**Answer:**
OS module system ki information nikalne ke liye use hota hai.

---

### Q2. os.platform() aur os.type() me difference?

**Answer:**
platform OS family batata hai, type exact OS name deta hai.

---

### Q3. os.cpus() ka use?

**Answer:**
CPU cores aur performance details nikalne ke liye.

---

## ✅ OS Module Final Summary

✔ System info samjhi
✔ Memory & CPU clear
✔ User & network details
✔ Real-world use cases
✔ Interview ready