# 🪙 Cryptoplace

Cryptoplace is a modern and responsive cryptocurrency marketplace built with React and Vite. It uses the CoinGecko API to display real-time data about top cryptocurrencies, allowing users to search coins and switch between currencies (USD, EUR, INR).

---

## 🚀 Features

- 🔍 Search for cryptocurrencies in real time
- 💱 Currency switcher (USD, EUR, INR)
- 📉 View price, 24H change %, and market cap
- 📊 Data from CoinGecko API
- ⚡ Built with Vite for fast dev experience

---

## 🛠 Tech Stack

- React
- Vite
- Context API
- JavaScript (ES6+)
- CoinGecko REST API
- CSS (custom styling)

---

## 📦 Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/priyagantla2921/crypto-marketplace.git
cd crypto-marketplace
Install dependencies

bash
Copy
Edit
npm install
Start the development server

bash
Copy
Edit
npm run dev
The app will run at: http://localhost:5173

📁 Project Structure
graphql
Copy
Edit
src/
├── assets/              # Images (logo, icons)
├── components/          # Navbar, Footer
├── context/             # CoinContext for managing state
├── pages/               # Home, Coin pages
├── App.jsx              # App structure
└── main.jsx             # Entry point
🌐 API
This app uses the CoinGecko API — a free, no-auth API for cryptocurrency data.
