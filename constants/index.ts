import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiNextdotjs } from "react-icons/si";

import carhubImg from "@/public/carhub.png";
import realtorImg from "@/public/realtor.png";
import medicalImg from "@/public/medical.jpg";
import image1 from "@/public/image1.png";
import firePredictionImg from "@/public/fire.png";
import leasingImg from "@/public/leasing.jpg";
import weatherImg from "@/public/weather.jpg";
import crimeImg from "@/public/crime.png";
import ecommerceImg from "@/public/ecommerce.png";
import strokeImg from "@/public/heartStroke.jpg";
import profileImg from "@/public/profile.jpg";
// Navigation links
export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/umairimran627/",
  github: "https://github.com/umairimran",
  resume: "/resume.pdf",
  source_code: "https://github.com/sanidhyy/portfolio",
  email: "umairimran627@gmail.com",
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [

  {
    title: "Bs-Data Science",
    description: "FAST UNIVERSITY. Courses: Data Mining, Data Science, Databases, Data Structures, Big Data, Software Engineering, OOP, NLP, Artificial Intelligence, Parallel Distributed Computing, Data Analysis and Visualization.",
    icon: React.createElement(LuGraduationCap),
    date: "Ongoing",
  },
  {
    title: "ML and Data Science Intern",
    description: "Started as an intern. Developed Speech to Speech AI Chatbot (Backend Part using FAST API, Deep Gram Api, Groq Api Integration). Accomplished all tasks as an intern and got exceptional intern certificate. Completed all assigned tasks while simultaneously mentoring fellow interns, resolving queries, and guiding project development. Company Website: https://analyzinn.com/",
    icon: React.createElement(CgWorkAlt),
    date: "06/2025 - 08/2025",
  },
  {
    title: "AI Developer",
    description: "I did AI integration to generate compliments about customers using computer vision. Decreased inference time by using image preprocessing techniques from 8 seconds to 2 seconds. Integrated WhatsApp for AI Chat Feature. Integrated AI compliment generation using computer vision with FAST API.",
    icon: React.createElement(CgWorkAlt),
    date: "03/2025 - 03/2025",
  },
  {
    title: "Deputy Softec (Team Conference)",
    description: "Led a team of 4 persons. Managed conference schedules. Received the Best Deputy award for this position.",
    icon: React.createElement(CgWorkAlt),
    date: "01/2023 - 02/2023",
  },
 
] as const;

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "FirePredictionAnalysis",
    description: "Implemented 5 ML models for fire prediction, achieving high precision with LSTM (0.9766). Utilized spatial data and UNet for fire spread prediction. (arXiv:2306.05144)",
    tags: ["RNN", "LSTM", "Transformer", "BiLSTM", "DNN", "UNet"],
    imageUrl: firePredictionImg, // Update with actual image path
    projectUrl: "https://github.com/umairimran/FirePredictionAnalysis" // Update with actual project URL
  },
  {
    title: "RAG Based Leasing AI Chatbot",
    description: "Developed RAG-based AI chatbot for leasing documents using FastAPI, Vector Database, and Streamlit for frontend.",
    tags: ["FastAPI", "Vector Database", "Streamlit"],
    imageUrl: leasingImg, // Update with actual image path
    projectUrl: "https://github.com/umairimran/LEASING_AI_CHATBOT" // Update with actual project URL
  },
  {
    title: "Health Care Modelling Project",
    description: "Used LSTM, ARIMA, and SARIMA for WHO data modeling. Predicted obesity, smoking, and alcohol levels.",
    tags: ["LSTM", "ARIMA", "SARIMA", "Regression", "Streamlit"],
    imageUrl: medicalImg, // Update with actual image path
    projectUrl: "https://github.com/umairimran/health_care_ML_project" // Update with actual project URL
  },
  {
    title: "Rag Based Code Explorer",
    description: "Developed a semantic code search and analysis system supporting multiple languages using CodeBERT for embeddings and ChromaDB for vector storage. Enabled natural language querying with a two-pass ranking engine (embedding similarity + keyword match) and Tree-sitter for multilanguage parsing. Built REST APIs with FastAPI, supporting code indexing, search, and auto-description with efficient multi-threaded processing.",
    tags: ["CodeBERT", "ChromaDB", "FastAPI", "Tree-sitter"],
    imageUrl: image1, // Update with actual image path
    projectUrl: "https://github.com/umairimran/GITHUB_REPOSITORY_EXPLORER" // Update with actual project URL
  },
  {
    title: "CrimeGuard",
    description: "Practiced software development practices including GitHub, team management, and large-scale software management. Developed a C application with SQLite as the database backend.",
    tags: ["C", "SQLite", "GitHub", "Team Management"],
    imageUrl: crimeImg, // Update with actual image path
    projectUrl: "https://github.com/umairimran/crimeGuardFinal" // Update with actual project URL
  },

 
  {
    title: "Weather Sense",
    description: "Analyzes large-scale US weather data (1991–2021) using PySpark for cleaning, EDA, and predicting precipitation and temperature trends. Employs Multi-Linear Regression for forecasting.",
    tags: ["PySpark", "EDA", "Multi-Linear Regression"],
    imageUrl: weatherImg, // Update with actual image path
    projectUrl: "https://github.com/umairimran/WeatherSense" // Update with actual project URL
  },
  {
    title: "Ecommerce Website",
    description: "Developed a high-performance website as a database course project. Technologies used: Python, SQLite, Bootstrap.",
    tags: ["Python", "SQLite", "Bootstrap"],
    imageUrl: ecommerceImg, // Update with actual image path
    projectUrl: "https://github.com/umairimran/ebayProject" // Update with actual project URL
  },
  {
    title: "Stroke Risk Prediction",
    description: "Implemented a K-Nearest Neighbors (KNN) classifier from scratch and compared it with scikit-learn's KNN to predict stroke risk based on health data. Includes data preprocessing, exploratory analysis, model implementation, and evaluation.",
    tags: ["KNN", "scikit-learn", "Data Preprocessing", "Exploratory Analysis"],
    imageUrl: strokeImg, // Update with actual image path
    projectUrl: "https://github.com/umairimran/Stroke-Risk-Prediction" // Update with actual project URL
  },
] as const;

// Data for skills
export const SKILLS_DATA = [
  "PANDAS",
  "PYTHON",
  "FAST API",
  "FLASK",
  "DOCKER",
  "TENSORFLOW",
  "DATA MINING",
  "GIT/GITHUB",
  "MACHINE LEARNING",
  "DEEP LEARNING",
  "NATURAL LANGUAGE PROCESSING",
  "Chatbot Development",
  "RAG",
  "API Integration",
  "Web Development",
  "Database Management",
  
  "Docker",
  
  
] as const;

// Owner name
export const OWNER_NAME = "Umair Imran";
