# 📝 Notes Taking App (Node.js + Express)

A simple and clean **Notes Taking Web Application** built using **Node.js, Express, EJS, and Tailwind CSS**.
This app allows users to **create, read, edit, and delete notes**, which are stored as `.txt` files on the server.

---

## 🚀 Features

* ➕ Create new notes
* 📄 View note details
* ✏️ Edit existing notes (title & content)
* 🗑️ Delete notes
* 📂 Notes stored as text files using Node.js `fs` module
* 🎨 Clean & modern UI using **Tailwind CSS**
* 🧠 Beginner-friendly project structure

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** EJS (Embedded JavaScript Templates)
* **Styling:** Tailwind CSS (CDN)
* **File Handling:** Node.js `fs` module

---

## 📁 Project Structure

```
notes-taking-app/
│
├── files/                 # Stored notes (.txt files)
│
├── public/
│   ├── images/
│   ├── javascript/
│   └── stylesheets/
│
├── views/
│   ├── index.ejs           # Home page (create + list notes)
│   ├── show.ejs            # View note details
│   └── edit.ejs            # Edit note
│
├── index.js                # Main server file
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/notes-taking-app.git
```

### 2️⃣ Navigate to Project Folder

```bash
cd notes-taking-app
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Start the Server

```bash
node index.js
```

### 5️⃣ Open in Browser

```
http://localhost:3000
```

---

## 🧑‍💻 How It Works

### ➕ Create Note

* Enter **title** and **details**
* Saved as a `.txt` file inside `files/` folder

### 📄 Read Note

* Click **Read** to view full note content

### ✏️ Edit Note

* Rename title and update content
* File is renamed & rewritten

### 🗑️ Delete Note

* Removes the file permanently from the server

---

## 📌 Routes Used

| Method | Route               | Description                     |
| ------ | ------------------- | ------------------------------- |
| GET    | `/`                 | Home page (list + create notes) |
| POST   | `/create`           | Create a new note               |
| GET    | `/file/:filename`   | Read note                       |
| GET    | `/edit/:filename`   | Edit note page                  |
| POST   | `/edit`             | Update note                     |
| POST   | `/delete/:filename` | Delete note                     |

---

## 🎨 UI Preview

* Dark theme
* Minimal design
* Responsive layout
* User-friendly interface

---

## 📚 Learning Outcomes

* Express routing
* EJS templating
* CRUD operations
* File system handling in Node.js
* Form handling (POST requests)
* MVC-style folder structure

---

## 🔮 Future Improvements

* 🔐 User authentication
* 🗃️ Database integration (MongoDB)
* 🔍 Search notes
* 🏷️ Tags & categories
* 🌐 Deploy on Render / Vercel

---

## 🙌 Author

**Ravindra Kachariya**
Aspiring Full Stack Developer (MERN)
Learning Node.js, React 🚀

---

## ⭐ Support

If you like this project, please **⭐ star the repository**
and feel free to fork & improve it!