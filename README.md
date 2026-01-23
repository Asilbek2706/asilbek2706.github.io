# 🚀 Asilbek.dev | Modern Bento Portfolio

A high-performance, responsive personal portfolio built with **React 18** and **TypeScript**, featuring a sleek **Bento Grid** layout. This project showcases technical skills, projects, and integrates a secure contact system.

---

## ✨ Features

* **Bento Grid UI**: A modern, clean, and organized interface inspired by cutting-edge design trends.
* **Telegram Bot Integration**: A functional contact form that delivers messages directly to a Telegram chat via the Telegram Bot API.
* **Custom Dark Preloader**: A professional, branded loading screen with a deep navy-blue aesthetic.
* **Secure Environment**: Uses `.env` variables to keep sensitive API credentials safe.
* **Smooth Animations**: Integrated with **AOS (Animate On Scroll)** for a premium user experience.
* **Fully Responsive**: Perfectly optimized for mobile, tablet, and desktop screens.

---

## 🛠 Tech Stack

* **Frontend**: React.js (TypeScript)
* **Bundler**: Vite
* **Styling**: SCSS (Sass), Bootstrap 5
* **Animations**: AOS (Animate On Scroll)
* **API**: Telegram Bot API (via Fetch)
* **Icons**: Bootstrap Icons

---

## 🚀 Installation & Setup

Follow these steps to run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Asilbek2706/asilbek2706.github.io.git](https://github.com/Asilbek2706/asilbek2706.github.io.git)
    cd asilbek2706.github.io
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables Setup:**
    Create a `.env` file in the root directory and add your Telegram credentials:
    ```env
    VITE_TELEGRAM_BOT_TOKEN=your_bot_token_here
    VITE_TELEGRAM_CHAT_ID=your_chat_id_here
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```

---

## 📨 Telegram Integration

The contact form uses a `POST` request to the Telegram Bot API. To ensure security:
* The `.env` file is listed in `.gitignore` to prevent leaking API keys.
* The form includes conditional states: `Sending`, `Success`, and `Error` (with visual feedback).

---

## 📸 Screenshots

| Desktop View                       | Mobile View                      |
|:-----------------------------------|:---------------------------------|
| ![Desktop Screenshot](desktop.png) | ![Mobile Screenshot](mobile.png) |

---

## 👨‍💻 Author

* **Asilbek Karomatov**
* **GitHub**: [@Asilbek2706](https://github.com/Asilbek2706)
* **Telegram**: [@as1lbek_2706](https://t.me/as1lbek_2706)
* **Email**: asiloke797@gmail.com

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.