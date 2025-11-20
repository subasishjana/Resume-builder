# 🚀 AI Powered Resume Builder (MERN Stack)

This is a **Full Stack AI Resume Builder Web App** built using the **MERN Stack** with advanced features like **AI-powered resume enhancement, live preview, background image removal, multiple templates, and online resume share links.**

---

## ✨ Features

- 🔐 User Authentication (Login & Register)
- 📝 Create, Edit & Delete Resume
- 👀 Live Resume Preview
- 🔗 Share Public Resume Link
- 🤖 AI-powered resume improvement (Skills, Summary, Job Description)
- 📤 Upload Profile Image & Remove Background
- 📄 Multiple Resume Templates
- 💾 Save Data to MongoDB Cloud (Atlas)

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|-------------|
| Frontend | React.js, Tailwind CSS, Redux Toolkit, React Router DOM, Lucide React, React Hot Toast |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose ORM) |
| AI | OpenAI / Gemini API |
| Storage | ImageKit |
| Others | Axios, Multer, JWT, bcrypt |

---

## 📦 Dependencies Installed

### 🖥 Frontend
npm install react react-dom vite
npm install axios
npm install react-router-dom
npm install react-hot-toast
npm install lucide-react
npm install react-redux @reduxjs/toolkit
npm install react-pdftotext



### ⚙ Backend

npm install express dotenv cors mongoose
npm install bcrypt jsonwebtoken multer
npm install @imagekit/nodejs
npm install openai


---

## 📂 Project Structure
resume-builder/
├── client/ # React Frontend
└── server/ # Node.js Backend


.env 
MONGODB_URL=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL=your_imagekit_url

OPENAI_API_KEY=your_ai_key
OPENAI_MODEL=gemini-2.0-flash


