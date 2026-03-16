<div align="center">

<h1>🏡 HomeAura</h1>

<p><strong>Discover your space. Know its worth.</strong><br/>
A full-stack home interior & real estate platform for India — with AI-powered house price predictions, curated interior packages, and a seamless lead management system.</p>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)

</div>

---

## ✨ What is HomeAura?

HomeAura is a full-stack home services platform built for the Indian real estate market. It combines an **ML-powered house price estimator** trained on real India housing data with a beautifully designed **interior design showcase** — helping users estimate property value, explore furnishing packages, and connect with the team through a built-in lead pipeline. Admins get a dedicated authenticated dashboard to manage all incoming leads.

---

## 🚀 Features

- 🏠 **House Price Prediction** — ML model (scikit-learn) trained on Indian housing data, served via a Python pipeline with a pre-trained `.pkl` model and scaler
- 📐 **BHK-Based Estimates** — Visual estimator that adjusts pricing by BHK type (1/2/3 BHK), room count, size, and package tier
- 🛋️ **Interior Design Showcase** — Curated galleries for furnishings, modular kitchens, wardrobes, living spaces, and more
- 📬 **Lead Management** — Users can submit inquiries; leads are stored in MongoDB and managed by admins
- 🔐 **Admin Panel** — Secure JWT-based admin authentication to view, manage, and track all leads
- 🗺️ **City Coverage Map** — Visual map preview of serviceable areas across India
- ⭐ **Customer Reviews** — Social proof section with real testimonials

---

## 🏗️ Tech Stack

| Layer          | Technology                                  |
|----------------|---------------------------------------------|
| Frontend       | React 18, Vite                              |
| Backend (API)  | Node.js, Express, MongoDB (Mongoose)        |
| ML Pipeline    | Python, scikit-learn, pandas                |
| Auth           | JWT-based Admin Auth middleware             |
| Data           | India Housing Prices CSV (train/test split) |

---

## 📁 Project Structure

```
HomeAura/
├── Frontend/                  # React + Vite frontend
│   ├── public/
│   │   └── images/
│   │       ├── estimates/     # BHK preview images
│   │       ├── furnishings/   # Interior furnishing gallery
│   │       ├── interiors/     # Design showcase images
│   │       ├── maps/          # City coverage map
│   │       └── reviews/       # Customer testimonials
│   └── src/
│
├── Backend/                   # Node.js + Express API
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   └── leadController.js  # Lead CRUD logic
│   ├── middleware/
│   │   └── adminAuth.js       # JWT admin guard
│   ├── models/
│   │   └── Lead.js            # Lead schema
│   ├── routes/
│   │   ├── leads.js           # Lead routes
│   │   ├── adminAuth.js       # Admin auth routes
│   │   └── predict.js         # Price prediction endpoint
│   ├── pipeline/              # ML pipeline
│   │   ├── train_model.py     # Model training script
│   │   ├── utils.py           # Feature engineering helpers
│   │   ├── house_price_model.pkl
│   │   └── scaler.pkl
│   └── server.js
│
└── Data/                      # Raw training datasets
    ├── Housing.csv
    ├── india_housing_prices.csv
    ├── train.csv
    └── test.csv
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js `v18+`
- Python `3.9+` with `pip`
- MongoDB (local or [Atlas](https://www.mongodb.com/cloud/atlas))

---

### 1. Clone the repo

```bash
git clone https://github.com/HShekhar79/HomeAura.git
cd HomeAura
```

---

### 2. Backend setup

```bash
cd Backend
npm install
```

Create a `.env` file in `/Backend`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@homeaura.com
ADMIN_PASSWORD=your_admin_password
```

Install Python dependencies:

```bash
pip install scikit-learn pandas numpy
# Model is pre-trained — .pkl files are already included
```

Start the server:

```bash
npm run dev
```

---

### 3. Frontend setup

```bash
cd ../Frontend
npm install
npm run dev
```

App runs at `http://localhost:5173` — API at `http://localhost:5000`.

---

## 🔌 API Overview

| Method | Endpoint           | Description                     |
|--------|--------------------|---------------------------------|
| POST   | `/api/predict`     | Predict house price (ML model)  |
| POST   | `/api/leads`       | Submit a new lead/inquiry       |
| GET    | `/api/leads`       | Get all leads (admin only)      |
| DELETE | `/api/leads/:id`   | Delete a lead (admin only)      |
| POST   | `/api/admin/login` | Admin login, returns JWT        |

---

## 🤖 ML Model

The house price predictor is trained on real Indian housing data using **scikit-learn**. The pipeline includes:

- Data cleaning and feature engineering (`utils.py`)
- Model training with cross-validation (`train_model.py`)
- Serialized model and scaler saved as `.pkl` files for fast inference
- Predictions served via `/api/predict` which interfaces with the Python pipeline

**Key input features:** BHK count, total area (sq ft), number of rooms, furnishing level, location/city, package tier.

---

## 🖼️ Screenshots

> Coming soon — contributions welcome!

---

## 🤝 Contributing

1. Fork the repo
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push and open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

Built with ☕ by [HShekhar79](https://github.com/HShekhar79)

</div>
