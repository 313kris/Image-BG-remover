# 🖼️ Image BG Remover (React + Vite)

A modern web application built using **React + Vite** that allows users to upload images and remove backgrounds easily. This project is deployed using **GitHub Pages** via `gh-pages`.

---

## 🌐 Live Demo

👉 https://313kris.github.io/Image-BG-remover/

---

## 📸 Preview

> Add your screenshots here (important for portfolio)

---

## 🚀 Features

- 📤 Upload images from device  
- 🧠 Remove image background  
- 🖼️ Preview original and processed image  
- ⬇️ Download processed image  
- ⚡ Fast performance using Vite  
- 📱 Responsive design (mobile + desktop)  
- 🌙 Clean modern UI  

---

## 🛠️ Tech Stack

- ⚛️ React.js  
- ⚡ Vite  
- 🎨 CSS3  
- 🌐 GitHub Pages (Deployment)  
- 📦 gh-pages package  

---

## 📁 Project Structure
IMAGE-BG/
│
├── public/ # Static assets
├── src/
│ ├── components/ # React components
│ ├── pages/ # Pages (if used)
│ ├── App.jsx # Main app
│ ├── main.jsx # Entry point
│
├── dist/ # Production build (auto generated)
├── vite.config.js # Vite configuration
├── package.json # Dependencies + scripts
└── README.md


---

## ⚙️ Installation & Setup

###1️⃣ Clone repository
git clone https://github.com/313kris/Image-BG-remover.git

###2️⃣Move into project folder
cd Image-BG-remover

###3️⃣ Install dependencies
npm install

###4️⃣ Start development server
npm run dev

###🏗️ Build Project
npm run build

## 🚀 Deployment (GitHub Pages)
1️⃣ Install gh-pages
npm install gh-pages --save-dev

2️⃣ Add homepage in package.json
"homepage": "https://313kris.github.io/Image-BG-remover"

3️⃣ Add scripts in package.json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

4️⃣ Set base in vite.config.js
export default defineConfig({
  plugins: [react()],
  base: "/Image-BG-remover/"
})

5️⃣ Deploy
npm run deploy
---
### 🌍 Live Website
👉 https://313kris.github.io/Image-BG-remover/

<img width="1757" height="993" alt="react-app and 15 more pages - Personal - Microsoft​ Edge 29-05-2026 13_18_00" src="https://github.com/user-attachments/assets/89dc795f-cd72-4695-af1f-1f418222a331" />
<img width="1690" height="978" alt="react-app and 15 more pages - Personal - Microsoft​ Edge 29-05-2026 13_18_16" src="https://github.com/user-attachments/assets/4aa369fa-0c6b-4518-b8ad-6c7639897fef" />
<img width="1696" height="983" alt="react-app and 15 more pages - Personal - Microsoft​ Edge 29-05-2026 13_18_24" src="https://github.com/user-attachments/assets/11fad178-0bb0-4b9e-a4ef-0718428b44e1" />
<img width="1649" height="996" alt="react-app and 15 more pages - Personal - Microsoft​ Edge 29-05-2026 13_18_33" src="https://github.com/user-attachments/assets/48802831-feef-4040-a375-a6d63c1914bf" />
<img width="1652" height="956" alt="react-app and 15 more pages - Personal - Microsoft​ Edge 29-05-2026 13_18_46" src="https://github.com/user-attachments/assets/3371eac9-4750-45ef-991b-a2bfd9ba7f87" />

## 📌 Important Notes
Always run npm run build before deploy
Never upload dist/ manually
GitHub Pages uses gh-pages branch automatically
Repo name must match base path

 ## Author
👤 Developed by: KRISTIROY
📌 GitHub: https://github.com/313kris

📄 License
This project is open-source and free to use.

This version is:
✔ Clean  
✔ Error-free  
✔ GitHub-ready  
✔ Portfolio-ready  
✔ No broken formatting  


