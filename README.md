# Express.js Core Concepts Playground 🚀

This repository serves as my personal backend laboratory where I am mastering **Node.js** and **Express.js** architecture from scratch. 

## 🧠 Key Architectures & Features Implemented:
- **Modular Routing:** Used `express.Router()` to cleanly separate user routes (`/routes/users.route.js`) from the main app logic.
- **Modern ES Modules:** Configured `"type": "module"` in Node.js.
- **Modern Path Resolution:** Handled file pathing using `path.resolve()` for absolute paths instead of relying on legacy `__dirname`.
- **Static Page Serving:** Implemented routing to serve static HTML views (`index.html`, `register.html`) via `res.sendFile()`.
- **Global 404 Handling:** Integrated a catch-all wildcard middleware to handle routing errors gracefully.

## 🛠️ Testing Environment
- Tested and verified all endpoints locally using **Thunder Client** inside VS Code.