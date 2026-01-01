# 👤 User CRUD Application (Node.js + Express)

A simple **User Management CRUD Application** built using **Node.js, Express, EJS, and Tailwind CSS**.
This project demonstrates **Create, Read, Update, and Delete (CRUD)** operations using **in-memory data** and a **modern UI**.

---

## 🚀 Features

* ➕ Add new users
* 📄 View all users
* ✏️ Edit user details
* 🗑️ Delete users
* 🎨 Clean & modern UI using **Tailwind CSS**
* 🧠 Beginner-friendly project structure

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** EJS (Embedded JavaScript Templates)
* **Styling:** Tailwind CSS (CDN)
* **Environment Variables:** dotenv

---

## 📁 Project Structure

```
user-crud-app/
│
├── views/
│   ├── index.ejs        # Show all users
│   ├── add.ejs          # Add user form
│   └── edit.ejs         # Edit user form
│
├── index.js             # Main server file
├── .env                 # Environment variables
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/user-crud-app.git
```

### 2️⃣ Go to Project Folder

```bash
cd user-crud-app
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Create `.env` File

```env
PORT=3000
```

### 5️⃣ Start the Server

```bash
node index.js
```

### 6️⃣ Open in Browser

```
http://localhost:3000
```

---

## 🔗 Routes Used

| Method | Route         | Description    |
| ------ | ------------- | -------------- |
| GET    | `/`           | Show all users |
| GET    | `/add`        | Add user page  |
| POST   | `/add`        | Create user    |
| GET    | `/edit/:id`   | Edit user page |
| POST   | `/edit/:id`   | Update user    |
| GET    | `/delete/:id` | Delete user    |

---

## ⚠️ Important Note

* User data is stored **in memory**
* Data will be **lost on server restart**
* This project is for **learning purposes**

👉 Can be upgraded to **MongoDB** easily.

---

## 📚 Learning Outcomes

* Express routing
* CRUD operations
* EJS templating
* Form handling
* Environment variables
* Tailwind CSS UI design

---

## 🔮 Future Improvements

* 🔐 MongoDB + Mongoose
* 🧱 MVC architecture
* ✅ Form validation
* 🌙 Dark mode
* 🔁 REST API version

---

## 👨‍💻 Author

**Ravindra Kachariya**
Aspiring Full-Stack Developer (MERN)
Currently learning Node.js & Reactjs 🚀

---

## ⭐ Support

If you like this project, please **⭐ star the repository**
and feel free to fork & improve it!