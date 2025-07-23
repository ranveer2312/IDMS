# 🗂️ IDMS – Internal Data Management System

**IDMS** is a centralized data management platform designed to streamline internal operations across departments such as **HR**, **Store**, **Attendance**, **Memo**, **Finance**, and **Reports**. Built using modern web technologies like **Next.js**, **Spring Boot**, and **MySQL**, IDMS ensures secure, role-based access, structured workflows, and real-time collaboration across teams.

---

## 🚀 Features

- 🔐 **User Authentication** – Secure JWT-based login with refresh tokens
- 👥 **Role-Based Access** – Admin, Employee, HR, Store Manager, Finance roles
- 🧑‍💼 **Department Dashboards** – Customized dashboards for each department
- 📆 **Attendance Tracking** – Daily check-in/out status, leave applications, approvals
- 🖥️ **Asset Management** – Manage office assets like printers, laptops, furniture
- 💰 **Finance Tracker** – Record and monitor fixed and variable expenses
- 📢 **Memo & Notices** – Create and broadcast internal memos across departments
- 📊 **Performance Tracker** – Track employee KPIs and performance data
- 🧾 **Reports Generation** – Generate department-wise internal reports
- 💻 **Responsive UI** – Fully responsive design for mobile and desktop

---

## 🛠️ Tech Stack

### Frontend – `NewIDMS-project`
- **Next.js** – React framework with server-side rendering
- **TypeScript** – Static typing and safer component development
- **Tailwind CSS** – Utility-first CSS framework for UI design
- **Axios** – Promise-based HTTP client for API communication
- **Lucide Icons** – Clean and modern icon set
- **React Hot Toast** – Elegant toast notification library

### Backend – `BackendNewWorkManagement`
- **Spring Boot** – Java backend framework with REST API support
- **Spring Security** – Authentication and authorization
- **JWT** – Secure authentication mechanism
- **MySQL** – Relational database for data storage
- **REST API** – Modular endpoints for each functional area

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/nishmitha295/IDMS.git
cd IDMS
2. Backend Setup
bash
Copy
Edit
cd BackendNewWorkManagement
Update application.properties:

properties
Copy
Edit
spring.datasource.url=jdbc:mysql://localhost:3306/idms
spring.datasource.username=root
spring.datasource.password=your_password
Run the Spring Boot server:

bash
Copy
Edit
mvn spring-boot:run
3. Frontend Setup
bash
Copy
Edit
cd ../NewIDMS-project
npm install
Create a .env.local file and set:

env
Copy
Edit
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api
Start the frontend development server:

bash
Copy
Edit
npm run dev
🌐 API Endpoints (Sample)
🔑 Authentication
POST /api/auth/login – User login

POST /api/auth/register – Register new user

GET /api/auth/me – Fetch logged-in user profile

👥 HR
GET /api/hr/employees – List all employees

POST /api/hr/documents – Upload/view HR documents

PUT /api/hr/leave – Submit or approve leave

🏬 Store
GET /api/store/assets – List and manage assets

POST /api/store/transfer – Asset transfers between employees

💰 Finance
GET /api/finance/expenses/fixed – View fixed expenses

GET /api/finance/expenses/variable – View variable expenses

📢 Memo
POST /api/memo/send – Send memo to departments

GET /api/memo/list – View all memos

🧩 Project Structure
bash
Copy
Edit
IDMS/
├── BackendNewWorkManagement/   # Spring Boot backend
│   ├── src/
│   ├── pom.xml
│   └── application.properties
├── NewIDMS-project/            # Next.js frontend
│   ├── pages/
│   ├── components/
│   ├── styles/
│   ├── .env.local
│   └── tailwind.config.js
🔒 Security Features
JWT-based authentication with refresh token support

Role-based access control for all departments

Frontend route guards to prevent unauthorized access

Backend input validation and exception handling


👩‍💻 Author
Rana Ranveer Kumar Yadav
Full Stack Developer
🔗 GitHub Profile

