# 📦 Node.js Day 3 – NPM (Node Package Manager)

---

## 1️⃣ NPM kya hota hai?

### Simple words me

**NPM** ka matlab hai **Node Package Manager**.

👉 Ye Node.js ka **tool + online library** hai jahan hazaaro ready-made packages milte hain.

---

### NPM kya-kya kaam karta hai?

* Packages install karna
* Packages uninstall karna
* Project dependencies manage karna
* Scripts run karna
* Version control karna

---

### Real-life example

Mobile phone:

* Play Store = npm registry
* App = npm package
* Install / Uninstall = npm commands

---

## 2️⃣ NPM install kaise hota hai?

👉 Jab tum **Node.js install** karte ho, NPM **automatically install** ho jata hai.

Check karne ke liye:

```bash
node -v
npm -v
```

---

## 3️⃣ Package / Module kya hota hai?

### Package ka simple matlab

Package ek **ready-made code ka bundle** hota hai jo koi specific kaam karta hai.

Examples:

* express → server banana
* nodemon → auto restart
* axios → API call

---

## 4️⃣ node_modules folder kya hota hai?

### node_modules kya hai?

* Ye folder sab installed packages rakhta hai
* Isme **hazaaro files** ho sakti hain
* Ye folder **kabhi manually edit nahi karte**

---

### node_modules kyun heavy hota hai?

Ek package dusre package pe depend karta hai
us dependency ko **dependency ka dependency** kehte hain.

---

### Important rule ⚠️

❌ node_modules ko GitHub pe upload nahi karte
✔️ `package.json` upload karte hain

---

## 5️⃣ package.json kya hota hai?

### package.json ka kaam

Ye file project ka **identity card** hoti hai.

Isme hota hai:

* Project ka naam
* Version
* Installed packages
* Scripts
* Dependencies info

---

### package.json kaise banate hain?

```bash
npm init
```

Auto mode:

```bash
npm init -y
```

---

## 6️⃣ Installing Packages (Basics)

---

### 6.1 Install any package

```bash
npm install express
```

OR

```bash
npm i express
```

---

### Kya hota hai install ke baad?

* node_modules folder ban jata hai
* package.json update hota hai
* package-lock.json create hota hai

---

## 7️⃣ Installing Particular Versions (Advanced)

---

### Latest version install

```bash
npm install express
```

---

### Specific version install

```bash
npm install express@4.18.2
```

---

### Kyun specific version?

* Latest version me bugs ho sakte hain
* Production me stable version chahiye

---

### Version symbols samjho

```json
"express": "^4.18.2"
```

| Symbol | Meaning               |
| ------ | --------------------- |
| ^      | Minor updates allowed |
| ~      | Patch updates allowed |
| none   | Fixed version         |

---

## 8️⃣ Uninstalling Packages

---

### Package remove karna

```bash
npm uninstall express
```

---

### Global package uninstall

```bash
npm uninstall -g nodemon
```

---

## 9️⃣ Global vs Local Install

---

### Local install (default)

```bash
npm install express
```

* Sirf project ke liye
* node_modules me jata hai

---

### Global install

```bash
npm install -g nodemon
```

* System ke liye
* Command line se directly use

---

### Rule of thumb 🧠

* Libraries → Local
* Tools (CLI) → Global

---

## 🔟 Dependencies vs DevDependencies

---

## Dependencies kya hoti hain?

* Production me chahiye
* App run hone ke liye zaroori

Example:

* express
* mongoose

Install:

```bash
npm install express
```

---

## DevDependencies kya hoti hain?

* Sirf development ke time chahiye
* Production me nahi

Example:

* nodemon
* eslint

Install:

```bash
npm install nodemon --save-dev
```

---

### package.json example

```json
"dependencies": {
  "express": "^4.18.2"
},
"devDependencies": {
  "nodemon": "^3.0.1"
}
```

---

### Real-life example

Construction:

* Cement, bricks → dependencies
* Measuring tape → devDependencies

---

## 1️⃣1️⃣ package-lock.json kya hota hai?

### package-lock.json ka kaam

* Exact version lock karta hai
* Team me same environment ensure karta hai
* Production bugs avoid karta hai

👉 Is file ko **kabhi delete nahi karna**

---

## 1️⃣2️⃣ Scripts kya hote hain?

---

### Scripts ka simple matlab

Scripts = **short commands** jo long command ko replace karte hain.

---

### Default scripts

```json
"scripts": {
  "test": "echo \"Error: no test specified\""
}
```

---

## 1️⃣3️⃣ Custom Scripts banana

---

### Example

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

---

### Script run kaise kare?

```bash
npm run dev
```

OR

```bash
npm start
```

---

## 1️⃣4️⃣ Script PATH ka concept (Important 🔥)

---

### npm script PATH kya hota hai?

npm automatically `node_modules/.bin` ko PATH me add karta hai.

Isliye:

```bash
nodemon index.js
```

Works inside script without global install 😲

---

### Example

```json
"scripts": {
  "dev": "nodemon app.js"
}
```

Even agar nodemon global install na ho → script me chalega.

---

## 1️⃣5️⃣ Advanced npm Commands

---

### Install all dependencies

```bash
npm install
```

---

### Remove node_modules & reinstall

```bash
rm -rf node_modules
npm install
```

---

### Check outdated packages

```bash
npm outdated
```

---

### Update packages

```bash
npm update
```

---

## ✅ Day 3 Summary

✔ NPM ka role samjha
✔ Package & node_modules clear
✔ Install / uninstall basics & advanced
✔ Version control samjha
✔ Dependencies vs DevDependencies
✔ Scripts & PATH clear

---

### 🎯 Interview Ready One-Liners

**Q:** NPM kya hai?
👉 Node.js ka package manager

**Q:** node_modules kya hota hai?
👉 Installed packages ka folder

**Q:** DevDependencies kyun use karte hain?
👉 Development tools ke liye

**Q:** package-lock.json ka role?
👉 Exact version lock