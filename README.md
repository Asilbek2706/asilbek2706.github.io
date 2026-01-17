# 🛸 Bento-Engineered Connectivity Portal

A premium, high-performance contact interface featuring a minimalist **Bento Grid** layout. This project integrates a sleek UI with real-time Telegram API notifications, designed for modern professional portfolios.

---

## 📺 Live Preview & Demo

Experience the interactive Bento Grid and seamless form processing below:

![Project Interface Preview](./images/sayt.png)

> **Interactive Demo:** [Watch the high-quality demo video](./sayt.mp4)

---

## ✨ Key Features

* **Bento Grid Architecture:** A modular, card-based layout inspired by modern Apple-style UI trends, ensuring a clean and structured information hierarchy.
* **Instant Telegram Notifications:** Integrated with Telegram Bot API to deliver inquiries directly to your mobile device instantly.
* **Advanced SCSS Engine:**
    * **Staggered Animations:** Cards enter the viewport with a timed delay.
    * **Premium Focus States:** Dynamic input borders and floating labels for an elite UX.
    * **Micro-interactions:** Smooth `cubic-bezier` transitions for all hover and active states.
* **Security-Centric Design:** Uses a modular `config.js` pattern to prevent sensitive API Bot Tokens from being exposed in public commits.
* **Fully Responsive (RWD):** Tailored layouts that adapt seamlessly from 4K monitors down to mobile devices.

---

## 🛠️ Technical Stack

* **HTML5:** Semantic markup for SEO and accessibility.
* **SCSS (Sass):** Modular architecture with advanced variables and nested animation logic.
* **JavaScript (ES6+):** Clean, asynchronous module-based code for API handling.
* **Telegram API:** Secure backend-less communication for real-time alerts.

---

## 🚀 Getting Started

### 1. Prerequisites
To receive messages, you need to set up a Telegram Bot:
1.  **Get Token:** Message [@BotFather](https://t.me/botfather) on Telegram to create a bot and receive your **API Token**.
2.  **Get Chat ID:** Message [@userinfobot](https://t.me/userinfobot) to find your unique **Chat ID**.

### 2. Local Setup
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Asilbek2706/bento-contact.git](https://github.com/Asilbek2706/bento-contact.git)
    cd bento-contact
    ```

2.  **Configure Secrets:**
    Inside the `js/` folder, create a `config.js` file:
    ```javascript
    const CONFIG = {
        BOT_TOKEN: "YOUR_TELEGRAM_BOT_TOKEN",
        CHAT_ID: "YOUR_TELEGRAM_CHAT_ID"
    };
    export default CONFIG;
    ```

3.  **Security Note:**
    Your `.gitignore` is already configured to exclude `config.js` to keep your credentials safe.

---

## 📁 Project Structure

Based on the latest repository update:

```text
├── .github/workflows/  # Automated Telegram workflows
├── .vscode/            # Editor specific configurations
├── css/                # Compiled production styles
├── images/             # UI assets and project photos
├── js/                 # Main logic & config (config.js is hidden)
├── sass/               # Source SCSS files (Variables, Mixins, Grid)
├── structure/          # Additional layout components
├── .gitignore          # Version control exclusion rules
├── index.html          # Main entry point
└── README.md           # Project documentation