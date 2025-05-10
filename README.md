📄 AI Resume Parser with FastAPI, React, and Azure OpenAI (DSPy)

This project is a full-stack application where users can upload a resume (PDF), and the backend will extract and summarize structured data using pdfplumber, DSPy, and Azure OpenAI. The frontend is built with React and supports JWT-based login and registration.

🚀 Features

🧐 AI-Powered Resume Summarization (DSPy + Azure OpenAI)

🔐 JWT Authentication (Register/Login)

📄 Resume Upload (PDF)

🔎 PDF Text Extraction using pdfplumber

📊 PDF to Structured Summary (Projects, Experience, Skills, etc.)

🖥️ React Frontend

🏠 Tech Stack

Backend: FastAPI, pdfplumber, DSPy, Azure OpenAI, SQLite, python-jose

Frontend: React + TailwindCSS (or plain CSS)

Auth: JWT-based with protected routes


🐍 Backend Setup (FastAPI)

1. 📦 Create & Activate Virtual Environment:
    cd backend
    python -m venv venv
    venv\Scripts\activate
2. 🧪 Install Dependencies:
    pip install -r requirements.txt
3. 🛠️ .env Configuration (Inside backend/):
     AZURE_OPENAI_API_KEY=your_azure_openai_key
     AZURE_OPENAI_ENDPOINT=https://your-resource-name.openai.azure.com/
     AZURE_OPENAI_DEPLOYMENT_NAME=gpt-4
     AZURE_OPENAI_API_VERSION=2024-04-01-preview
4. 🚴 Run FastAPI Server:
     uvicorn main:app --reload

🌐 Frontend Setup (React)

1. 📁 Navigate to Frontend Folder:
   cd frontend
2. 📦 Install Node Modules
   npm install
3. ▶️ Start React App
   npm run dev  # or npm start
