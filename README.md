# 🚀 AI Powered Resume Builder — MERN Stack

🌐 **Live Demo:**   https://resume-builder-9co7-git-main-subasish-jana.vercel.app/

A **full-stack AI-powered Resume Builder** built with the **MERN Stack**.
The application allows users to create professional resumes, improve their content using AI, preview resumes in real time, upload profile images, remove image backgrounds, choose different templates, and share resumes through public links.

---

## ✨ Features

* 🔐 **User Authentication**

  * User Registration
  * User Login
  * JWT-based authentication

* 📝 **Resume Management**

  * Create Resume
  * Edit Resume
  * Delete Resume
  * Save resume data to MongoDB

* 👀 **Live Resume Preview**

  * Real-time resume preview while editing
  * Professional resume templates

* 🔗 **Public Resume Sharing**

  * Generate public resume links
  * Share resumes online

* 🤖 **AI-Powered Resume Enhancement**

  * Improve professional summary
  * Improve skills
  * Enhance job descriptions
  * Generate ATS-friendly resume content

* 📤 **Profile Image Upload**

  * Upload profile image
  * Image storage using ImageKit
  * Background removal support

* 📄 **Multiple Resume Templates**

  * Choose different resume layouts
  * Preview resume before sharing

* ☁️ **Cloud Database**

  * MongoDB Atlas for storing user and resume data

---

## 🛠️ Tech Stack

| Category         | Technologies            |
| ---------------- | ----------------------- |
| Frontend         | React.js, Tailwind CSS  |
| State Management | Redux Toolkit           |
| Routing          | React Router DOM        |
| Backend          | Node.js, Express.js     |
| Database         | MongoDB, Mongoose       |
| Authentication   | JWT, bcrypt             |
| AI               | Gemini API  |
| Image Storage    | ImageKit                |
| File Upload      | Multer                  |
| HTTP Client      | Axios                   |
| PDF              | react-pdftotext         |
| Icons            | Lucide React            |        |
| Deployment       | Vercel + Render         |

---

## 📦 Main Dependencies

### 🖥️ Frontend

```bash
npm install react react-dom vite
npm install axios
npm install react-router-dom
npm install react-hot-toast
npm install lucide-react
npm install react-redux @reduxjs/toolkit
npm install react-pdftotext
```

### ⚙️ Backend

```bash
npm install express dotenv cors mongoose
npm install bcrypt jsonwebtoken multer
npm install @imagekit/nodejs
npm install openai
```

---

## 📂 Project Structure

```text
resume-builder/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── assets/
│   │   └── App.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── .env
│
├── server/
│   ├── configs/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## ⚙️ Environment Variables

### Backend `.env`

Create a `.env` file inside the `server` folder:

```env
PORT=3000

MONGODB_URL=your_mongodb_atlas_connection_string

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL=your_imagekit_url

OPENAI_API_KEY=your_ai_api_key
OPENAI_MODEL=gemini-2.0-flash
```

> ⚠️ Never upload your real `.env` file or API keys to GitHub.

### Frontend `.env`

Create a `.env` file inside the `client` folder:

```env
VITE_BASE_URL=http://localhost:3000
```

For production:

```env
VITE_BASE_URL=https://resume-builder-d5gg.onrender.com
```

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/subasishjana/Resume-builder.git
```

```bash
cd Resume-builder
```

---

### 2️⃣ Install Frontend Dependencies

```bash
cd client
npm install
```

---

### 3️⃣ Install Backend Dependencies

Open another terminal:

```bash
cd server
npm install
```

---

### 4️⃣ Configure Environment Variables

Create `.env` files in both:

```text
client/.env
server/.env
```

Add the required environment variables mentioned above.

---

### 5️⃣ Start Backend

Inside the `server` folder:

```bash
npm start
```

Backend will run on:

```text
http://localhost:3000
```

---

### 6️⃣ Start Frontend

Inside the `client` folder:

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173

### Professional Summary

Transforms basic information into a more professional and ATS-friendly summary.

### Skills

Helps improve and organize relevant skills.

### Job Description

Enhances job descriptions with professional and resume-friendly language.

The AI integration is implemented through the backend so that API credentials are not exposed directly in the frontend.

---

## 🔐 Authentication

The application uses:

* JWT for authentication
* bcrypt for password hashing
* Protected API routes
* Token-based authorization

User passwords are never stored as plain text.

---

## ☁️ Deployment

### Frontend

Deployed using:

**Vercel**

Live Demo:

https://resume-builder-9co7-git-main-subasish-jana.vercel.app/

### Backend

Deployed using:

**Render**

Backend:

https://resume-builder-d5gg.onrender.com

### Database

Hosted using:

**MongoDB Atlas**

---

## 🔒 Security

The project follows several basic backend security practices:

* Password hashing with bcrypt
* JWT authentication
* Environment variables for secrets
* CORS configuration
* API credentials kept on the backend
* MongoDB Atlas for cloud database storage

---

## 🎯 What I Learned From This Project

Building this project helped me practice:

* MERN stack development
* Express.js backend architecture
* MongoDB & Mongoose
* JWT authentication
* Password hashing
* File uploads with Multer
* Cloud image storage
* AI API integration
* Protected routes
* CORS configuration
* Environment variable management
* Frontend & backend deployment
* Connecting a Vercel frontend with a Render backend

---

## 🔮 Future Improvements

Possible future improvements:

* 📈 ATS score analysis
* 📄 More professional resume templates
* 🌙 Dark mode
* 📱 Improved mobile responsiveness

---

## 👨‍💻 Author

**Subasish Jana**

GitHub:
https://github.com/subasishjana

---

## ⭐ Support

If you find this project useful, consider giving it a ⭐ on GitHub.

---

## 📄 License

This project is created for learning and portfolio purposes.
