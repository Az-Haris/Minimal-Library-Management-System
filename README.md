# 📚Minimal Library Management System

A full-stack Book Borrowing Management System built with MERN (MongoDB, Express, React, Node.js) and TypeScript.
It allows users to manage books, borrow/return books, and track availability with real-time validations.

## 🚀 Features

- 🔹 Book Management (CRUD) – Add, edit, delete, and view books.
- 🔹 Borrowing System – Borrow books with due dates & quantity validation.
- 🔹 Availability Tracking – Prevent borrowing if copies are not available.
- 🔹 Genre Filtering & Sorting – Retrieve books by genre, date, or custom filters.
- 🔹 Form Validation – Zod + React Hook Form integration.
- 🔹 Real-time UI – React Query/RTK Query for API state management.
- 🔹 Responsive Design – Mobile-friendly interface using ShadCN UI.

## 🛠️ Tech Stack
### Frontend

- ⚛️ React (with Vite + TypeScript)
- 🎨 TailwindCSS + ShadCN UI
- 📡 RTK Query (API integration)
- ✅ React Hook Form + Zod (form validation)

### Backend

- 🟢 Node.js + Express
- 🍃 MongoDB (Mongoose ORM)
- ✅ Zod Validation
- 🔒 RESTful APIs

## 📂 Project Structure

📦 book-borrowing-system
├── 📁 backend
│   ├── 📁 models          # Mongoose models (Book, Borrow, User)
│   ├── 📁 routes          # Express routes
│   ├── 📁 interfaces      # TypeScript interfaces
│   ├── server.ts          # Entry point
│
├── 📁 frontend
│   ├── 📁 src
│   │   ├── 📁 api         # RTK Query slices
│   │   ├── 📁 components  # UI components
│   │   ├── 📁 pages       # Page components (Books, Borrow, Summary)
│   │   ├── App.tsx        # Main app
│   │   ├── main.tsx       # React entry point
│
└── README.md

## ⚡ API Endpoints
### Books API

- POST /api/books → Create a book
- GET /api/books → Get all books (filter, sort, limit)
- GET /api/books/:bookId → Get single book
- PUT /api/books/:bookId → Update book
- DELETE /api/books/:bookId → Delete book
- Borrow API
- POST /api/borrow → Borrow a book (with quantity & dueDate)
- GET /api/borrow → Get borrow summary (aggregated)

## ⚙️ Installation & Setup

1. Clone the repository
git clone https://github.com/your-username/book-borrowing-system.git
cd book-borrowing-system

2. Setup Backend
cd backend
npm install
npm run dev

Backend runs on: http://localhost:5000

3. Setup Frontend
cd frontend
npm install
npm run dev

Frontend runs on: http://localhost:3000

## 🧪 Usage

Go to Books Page → Add or manage books.
Click Borrow → Select due date & quantity.
Borrow summary shows total borrowed per book.
If copies run out → Borrow button gets disabled.

## 🚧 Roadmap

✅ Borrow summary (aggregation)
⏳ User authentication (borrow by user)
⏳ Return book flow
⏳ Admin dashboard with analytics

## 🤝 Contributing

Contributions are welcome!
Fork this repo
Create a feature branch (git checkout -b feature-name)
Commit changes (git commit -m "Added feature")
Push & open a PR

## 📜 License

This project is licensed under the MIT License.