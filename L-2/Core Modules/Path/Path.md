# 🟢 Node.js – Path Module (Complete Detailed Notes)

---

## 1️⃣ Path Module kya hota hai? (Very Simple)

`path` Node.js ka **core module** hai jo **file aur folder ke paths ko handle** karta hai.

Matlab:

✔ File ka naam nikalna
✔ Folder ka path nikalna
✔ Extension pata karna
✔ Safe path banana (Windows + Mac + Linux)

👉 Path module **OS differences ko handle** karta hai

---

### Real-life example

Address likhna:

```
Country / State / City / House No
```

Path module wahi kaam karta hai
👉 **file address banana & samajhna**

---

## 2️⃣ Path Module kyun zaroori hai?

### Problem (without path module ❌)

```js
"C:\\Users\\Ravi\\Desktop\\file.txt"
```

❌ Windows only
❌ Linux / Mac me break ho jayega

---

### Solution (with path module ✅)

```js
path.join("Users", "Ravi", "Desktop", "file.txt");
```

✔ Har OS me kaam karega
✔ Safe & clean

---

## 3️⃣ Path Module import kaise kare?

```js
const path = require("path");
```

👉 Ye bhi **core module** hai, install nahi karna

---

## 4️⃣ Important Path Concepts (Base Idea)

### 🔹 Absolute Path

Root se start hota hai

```text
C:\Users\Ravi\file.txt
```

---

### 🔹 Relative Path

Current folder se start hota hai

```text
./file.txt
../file.txt
```

---

### Real-life example

* Full home address → Absolute
* “Next room” → Relative

---

## 5️⃣ path.basename() – File ka naam nikalna

### Kya karta hai?

👉 Path se **sirf file ka naam** deta hai

```js
const filePath = "/users/ravi/projects/app.js";

console.log(path.basename(filePath));
```

### Output

```
app.js
```

---

### Extension remove karna

```js
console.log(path.basename(filePath, ".js"));
```

```
app
```

---

## 6️⃣ path.dirname() – Folder ka path

### Kya karta hai?

👉 File kis folder me hai, wo batata hai

```js
console.log(path.dirname(filePath));
```

```
/users/ravi/projects
```

---

## 7️⃣ path.extname() – Extension nikalna

### Kya karta hai?

👉 File ka extension batata hai

```js
console.log(path.extname(filePath));
```

```
.js
```

---

## 8️⃣ path.join() – MOST IMPORTANT 🔥

### Kya karta hai?

👉 Multiple path parts ko **safe way me join** karta hai

```js
const fullPath = path.join(__dirname, "files", "data.txt");
console.log(fullPath);
```

✔ Automatically `/` ya `\` handle karta hai
✔ Best practice

---

### Real-life example

Words ko jodkar sentence banana
Path.join = sentence maker

---

## 9️⃣ path.resolve() – Absolute Path banana

### Kya karta hai?

👉 Relative path ko **absolute path** me convert karta hai

```js
const absolutePath = path.resolve("files", "data.txt");
console.log(absolutePath);
```

---

### Difference (join vs resolve)

| path.join      | path.resolve           |
| -------------- | ---------------------- |
| Path jodta hai | Absolute path deta hai |
| Simple         | Powerful               |

---

## 🔟 path.parse() – Path ko todna

### Kya karta hai?

👉 Path ke **saare parts alag-alag** deta hai

```js
const result = path.parse(filePath);
console.log(result);
```

### Output

```js
{
  root: '/',
  dir: '/users/ravi/projects',
  base: 'app.js',
  ext: '.js',
  name: 'app'
}
```

---

## 1️⃣1️⃣ path.format() – Path banana (Reverse of parse)

```js
const pathObj = {
  dir: "/users/ravi/projects",
  base: "index.js"
};

console.log(path.format(pathObj));
```

---

## 1️⃣2️⃣ path.isAbsolute() – Absolute path check

```js
console.log(path.isAbsolute("/users/ravi"));
```

```
true
```

---

## 1️⃣3️⃣ path.normalize() – Path clean karna

### Kya karta hai?

👉 Extra slashes, dots remove karta hai

```js
const messyPath = "/users//ravi/../projects//app.js";
console.log(path.normalize(messyPath));
```

---

## 1️⃣4️⃣ __dirname & __filename (with Path)

```js
console.log(__dirname);
console.log(__filename);
```

### Best Practice

```js
const filePath = path.join(__dirname, "data", "info.txt");
```

👉 **99% Node.js apps me ye use hota hai**

---

## 1️⃣5️⃣ Real Project Example (Very Important)

### Static file read (safe way)

```js
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "public", "index.html");

fs.readFile(filePath, "utf8", (err, data) => {
  if (!err) {
    console.log(data);
  }
});
```

---

## 🔹 Common Path Methods (Quick Table)

| Method     | Use            |
| ---------- | -------------- |
| basename   | File name      |
| dirname    | Folder path    |
| extname    | Extension      |
| join       | Safe path      |
| resolve    | Absolute path  |
| parse      | Path breakdown |
| format     | Path build     |
| isAbsolute | Absolute check |
| normalize  | Clean path     |

---

## 🔹 Interview Questions (Path Module)

### Q1. path module kya hai?

**Answer:**
Path module file aur folder paths handle karne ke liye use hota hai.

---

### Q2. path.join kyun important hai?

**Answer:**
OS-independent safe path banane ke liye.

---

### Q3. join aur resolve me difference?

**Answer:**
join path jodta hai, resolve absolute path deta hai.

---

## ✅ Path Module Final Summary

✔ Path ka concept clear
✔ Windows/Linux issue solve
✔ Safe path handling
✔ Real project usage
✔ Interview ready