# 🟢 Node.js File System (fs) Module – Complete Notes

---

## 1️⃣ fs Module kya hota hai? (Very Simple)

`fs` Node.js ka **core module** hai jo hume **files aur folders ke saath kaam** karne deta hai.

Matlab Node.js se hum ye sab kar sakte hain:

✔ File create karna
✔ File me data likhna
✔ File ka data read karna
✔ File rename karna
✔ File copy karna
✔ File delete karna
✔ Folder create / delete karna
✔ Folder ke andar ki files dekhna

👉 Ye sab kaam normally hum computer me manually karte hain,
Node.js me ye kaam **fs module** karta hai.

---

## 2️⃣ fs Module import kaise kare?

```js
const fs = require("fs");
```

👉 `fs` already Node.js ke saath aata hai,
koi install karne ki zaroorat nahi hoti.

---

## 3️⃣ Async vs Sync (Bahut Important)

### 🔹 Async (Recommended)

* Kaam background me hota hai
* Program block nahi hota
* Large apps ke liye best

### 🔹 Sync (Avoid in big apps)

* Ek kaam khatam hone tak wait
* Program slow ho jata hai

👉 **Real life:**
Phone use karte hue download background me chalta hai → Async
ATM line me khade rehna → Sync

---

## 4️⃣ File Create & Write

### ✍ writeFile() – Async way

```js
fs.writeFile("file.txt", "Hello Node.js", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File created successfully");
  }
});
```

🧠 Agar file pehle se ho → overwrite ho jayegi

---

### ✍ writeFileSync() – Sync way

```js
fs.writeFileSync("file2.txt", "Sync file example");
console.log("File created");
```

---

## 5️⃣ File Read

### 📖 readFile() – Async

```js
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
```

---

### 📖 readFileSync() – Sync

```js
const data = fs.readFileSync("file.txt", "utf8");
console.log(data);
```

---

## 6️⃣ File me Data Add karna (Append)

```js
fs.appendFile("file.txt", "\nNew line added", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Data appended");
  }
});
```

🧠 Purani file delete nahi hoti

---

## 7️⃣ File Rename

```js
fs.rename("file.txt", "newfile.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File renamed");
  }
});
```

---

## 8️⃣ File Copy

```js
fs.copyFile("newfile.txt", "copyfile.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File copied");
  }
});
```

---

## 9️⃣ File Delete

```js
fs.unlink("copyfile.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File deleted");
  }
});
```

---

## 🔟 Folder (Directory) Create

```js
fs.mkdir("myFolder", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Folder created");
  }
});
```

### 📂 Sub-folder ke saath

```js
fs.mkdir("parent/child", { recursive: true }, (err) => {
  if (!err) console.log("Folders created");
});
```

---

## 1️⃣1️⃣ Folder ke andar ki files dekhna

```js
fs.readdir("parent", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    console.log(files);
  }
});
```

---

## 1️⃣2️⃣ Folder Delete

### Old method

```js
fs.rmdir("parent", { recursive: true }, (err) => {
  if (!err) console.log("Folder deleted");
});
```

---

### New method (Recommended)

```js
fs.rm("parent", { recursive: true, force: true }, (err) => {
  if (!err) console.log("Removed successfully");
});
```

---

## 1️⃣3️⃣ Common fs Methods (Quick Table)

| Method     | Kaam                    |
| ---------- | ----------------------- |
| writeFile  | File create / overwrite |
| readFile   | File read               |
| appendFile | Data add                |
| rename     | File rename             |
| copyFile   | File copy               |
| unlink     | File delete             |
| mkdir      | Folder create           |
| readdir    | Folder read             |
| rm         | File/folder delete      |

---

## 🔹 Interview Questions (fs Module)

### Q1. fs module kya hai?

**Answer:**
fs Node.js ka core module hai jo file system ke saath kaam karta hai.

---

### Q2. Async aur Sync fs methods me difference?

**Answer:**
Async non-blocking hota hai, Sync blocking hota hai.

---

### Q3. fs.unlink ka use?

**Answer:**
File delete karne ke liye.

---

### Q4. fs.rm aur fs.rmdir me difference?

**Answer:**
fs.rm naya aur recommended method hai jo file aur folder dono delete karta hai.

---

## ✅ fs Module Final Summary

✔ File handling samjhi
✔ Async vs Sync clear
✔ File create, read, update, delete
✔ Folder operations
✔ Interview ready