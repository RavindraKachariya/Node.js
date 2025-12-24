# Node.js Day 1 – Introduction, Installation, REPL & Global Object

> **Important Note:**
>
> * Puri language **Hindi** hai
> * **Technical words English me hi** rakhe gaye hain
> * Explanation bilkul **non‑technical person** ko dhyan me rakh kar
> * Real‑life + real‑world examples use kiye gaye hain
> * Last me **Interview Questions + Answers** aur **Practice Tasks** bhi diye gaye hain

---

## 1. Introduction to Node.js

### Node.js kya hai? (Bahut simple words me)

Node.js ek **JavaScript Runtime Environment** hai.

Iska matlab:

* JavaScript ek **language** hai
* Node.js ek **system / environment** hai jisme JavaScript chal sakti hai

Pehle JavaScript sirf **browser** me chalti thi (Chrome, Firefox).
Browser ke bahar JavaScript ka koi use nahi tha.

Node.js ne ye problem solve kar di.

Ab JavaScript se hum:

* Backend bana sakte hain
* Server create kar sakte hain
* Database connect kar sakte hain
* File system access kar sakte hain

---

### Real‑life example (Non‑tech)

Socho tumhare paas:

* **Remote** hai (JavaScript)
* Lekin **TV** nahi hai (Node.js)

Remote akela kuch nahi karega.
Jab TV milegi tab remote ka kaam start hoga.

👉 JavaScript bina Node.js ke server side par kaam nahi karti.

---

### Node.js kyun popular hai?

1. **JavaScript everywhere**

   * Frontend me bhi JavaScript
   * Backend me bhi JavaScript

2. **Fast performance**

   * V8 Engine use karta hai

3. **Non‑blocking nature**

   * Ek request dusri request ko rokti nahi

4. **Large ecosystem**

   * npm me lakhon packages available

---

### Node.js kaise kaam karta hai? (High‑level understanding)

Node.js **single‑threaded** hota hai.

Matlab:

* Ek hi main thread hota hai
* Lekin phir bhi multiple kaam handle karta hai

Ye possible hota hai:

* **Event Loop**
* **Non‑blocking I/O**

---

### Real‑life example (Restaurant)

Socho ek restaurant me:

**Traditional system:**

* Har customer ke liye alag waiter
* Zyada waiter = zyada cost

**Node.js system:**

* Ek smart waiter
* Order likh leta hai
* Kitchen me de deta hai
* Jab ready hota hai tab serve karta hai

👉 Node.js bhi request ko wait nahi karata.

---

## 2. Installation of Node.js

### Node.js install karna kyun zaroori hai?

Jab tak Node.js install nahi hoga:

* JavaScript server par run nahi hogi
* npm ka use nahi kar paoge
* Backend development possible nahi hoga

---

### Node.js install karne ke steps

1. Browser open karo
2. [https://nodejs.org](https://nodejs.org) par jao
3. **LTS (Long Term Support)** version download karo
4. Installer open karo
5. Next → Next → Install

👉 Beginners ke liye **LTS version best hota hai**

---

### Installation successful hai ya nahi kaise check kare?

Terminal / Command Prompt me likho:

```bash
node -v
npm -v
```

Agar version number dikh raha hai to installation successful hai ✅

---

### Real‑life example

Jaise tum phone me Android ya iOS version check karte ho,
waise hi yahan Node.js aur npm ka version check hota hai.

---

## 3. REPL (Read – Eval – Print – Loop)

### REPL kya hota hai?

REPL ek **interactive environment** hota hai jisme hum directly JavaScript code likh kar turant output dekh sakte hain.

REPL ka full form:

* **Read** → User ka input read karta hai
* **Eval** → Code execute karta hai
* **Print** → Output dikhata hai
* **Loop** → Dubara input ka wait karta hai

---

### REPL start kaise kare?

Terminal me likho:

```bash
node
```

Ab tum REPL mode me ho.

---

### REPL examples

```js
> 2 + 3
5

> "Node" + " JS"
'Node JS'

> let x = 10
undefined
> x * 5
50
```

---

### REPL ka use kab hota hai?

REPL ka use hota hai:

* JavaScript seekhne ke liye
* Small logic test karne ke liye
* Quick debugging ke liye

---

### Real‑life example

Calculator:

* Number dalo
* Result turant pao

REPL bhi bilkul waise hi kaam karta hai.

---

### REPL se bahar kaise nikle?

```bash
.exit
```

Ya

```bash
Ctrl + C (2 times)
```

---

## 4. Global Object in Node.js

### Global Object kya hota hai?

Global object wo hota hai jise hum **poore Node.js application me kahin se bhi access** kar sakte hain.

---

### Browser vs Node.js

Browser me:

* `window` global object hota hai

Node.js me:

* `global` global object hota hai

---

### Common Global Objects / Functions

* console
* setTimeout()
* setInterval()
* clearTimeout()
* __dirname
* __filename

Example:

```js
console.log("Hello Node.js");
```

---

### __dirname aur __filename

* **__dirname** → current folder ka full path
* **__filename** → current file ka full path

```js
console.log(__dirname);
console.log(__filename);
```

---

### Real‑life example

Jaise tum apna:

* Shehar
* Ghar ka address

batate ho, waise hi Node.js file ka exact location batata hai.

---

## 🔹 Interview Questions & Answers (Day 1)

### Q1. Node.js kya hai?

**Answer:**
Node.js ek JavaScript Runtime Environment hai jo JavaScript ko browser ke bahar run karne deta hai.

---

### Q2. Node.js kyun use kiya jata hai?

**Answer:**
Node.js fast hai, non‑blocking hai aur JavaScript se backend develop karne deta hai.

---

### Q3. Node.js single‑threaded hote hue bhi fast kyun hai?

**Answer:**
Kyuki Node.js Event Loop aur non‑blocking I/O ka use karta hai.

---

### Q4. REPL kya hota hai?

**Answer:**
REPL ek interactive environment hai jisme hum JavaScript code turant execute kar sakte hain.

---

### Q5. Global object kya hota hai?

**Answer:**
Global object wo object hota hai jo poore application me kahin se bhi access ho sakta hai.

---

### Q6. Browser aur Node.js global object me kya difference hai?

**Answer:**
Browser me `window` hota hai, Node.js me `global` hota hai.

---

## 🔹 Practice Tasks (Hands‑on)

### Task 1: Installation Check

* Node.js install karo
* `node -v` aur `npm -v` run karo

---

### Task 2: REPL Practice

* REPL start karo
* 5 mathematical operations run karo
* 3 string operations run karo

---

### Task 3: Global Object Practice

* Ek file banao `test.js`
* `console.log(__dirname)` print karo
* `console.log(__filename)` print karo

---

### Task 4: Self Thinking Question

* Node.js bina browser ke JavaScript kaise chalata hai? (Answer likhne ki koshish karo)

---

## 🔹 Mini Project (Based on Day 1 Concepts)

### Mini Project Name: **Node.js System Info App**

### Project ka objective

Is mini project ka aim ye samajhna hai ki:

* Node.js ka basic use kaise hota hai
* REPL aur file execution ka difference kya hai
* Global objects aur system information ka real use kya hai

Ye project bilkul **Day 1 ke concepts** par based hai, isme koi advanced topic nahi hai.

---

### Project Description (Simple Words me)

Hum ek chhota sa Node.js program banayenge jo:

* System ka platform batayega
* Node.js version dikhayega
* Current folder aur file ka path print karega

Jab hum file run karenge, ye sari information terminal me show hogi.

---

### Step 1: Project Folder banao

```bash
node-day1-mini-project
```

Is folder ke andar ek file banao:

```bash
app.js
```

---

### Step 2: Code likho (app.js)

```js
// Node.js Day 1 Mini Project

console.log("===== System Information =====");

// Node.js version
console.log("Node Version:", process.version);

// Platform information
console.log("Platform:", process.platform);

// Current directory
console.log("Current Directory:", __dirname);

// Current file
console.log("Current File:", __filename);

console.log("==============================");
```

---

### Step 3: Program run karo

Terminal me project folder ke andar jaakar likho:

```bash
node app.js
```

---

### Expected Output (Example)

```text
===== System Information =====
Node Version: v18.x.x
Platform: win32
Current Directory: C:
ode-day1-mini-project
Current File: C:
ode-day1-mini-projectpp.js
==============================
```

---

### Is project se kya seekhne ko mila?

✔ Node.js file kaise run hoti hai
✔ REPL aur file execution ka difference
✔ Global objects (__dirname, __filename) ka real use
✔ process object ka basic idea

---

### Interview Angle (Mini Project se questions)

**Q:** Is project me Node.js kaunsa feature use hua?

**Answer:**
Is project me Node.js ke global objects aur process object ka use hua hai.

---

### Extra Challenge (Optional)

1. Output me current date aur time add karo
2. Apna naam print karo using console.log
3. Program ke start aur end me alag message print karo

---

## ✅ Day 1 Final Summary

✔ Node.js ka basic concept clear
✔ Installation process samajh aaya
✔ REPL ka real use pata chala
✔ Global object ka purpose samjha
✔ Interview questions ready
✔ Practice tasks complete
✔ Mini Project bana kar hands-on experience mila