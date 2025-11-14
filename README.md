## Credit View Dashboard

A modern, responsive, and data-driven Credit View Dashboard built with Next.js, Redux, React Query, TanStack Table, and shadcn/ui.
The project uses MockAPI as the backend for mock data and is fully deployed on Vercel.

🚀 Live Demo

The project is deployed on Vercel:
👉 https://credit-view-dashboard.vercel.app/

## 📌 Features

🔒 Login Page

The project includes a dummy login page where users can sign in using any email address and any password. Basic form validation is implemented, including email format validation and a minimum password length of 8 characters.

📊 Dashboard Page

The Dashboard provides an overview of borrower-related credit details.
It includes a dynamic and interactive borrower table that displays:

- Customer Name
- Loan ID
- Loan Amount
- Amount Due
- Due Date
- Last Payment
- Status – Paid, Overdue, Pending, Settled, Written-off, etc.

-Additional features:
-View Details button to display customer information in a modal
-Modal shows a beautifully designed card layout leveraging shadcn/ui components
-Table built using TanStack Table, including sorting and efficient rendering
-Data fetching handled with React Query

📈 Analytics Page

The Analytics page provides visual insights into loan performance.

- Summary Grid (4 metrics):
- Total Loan Amount
- Total Amount Due
- Recovered Amount
- Overdue Percentage

-Visualizations:
_ Bar Chart
_ Displays comparison of:

Grid Card

- Loan Amount
- Amount Due
- Recovered Amount
- Overdue %
- Donut Chart

Shows:

- Total Recovered Percentage
- Total Overdue Percentage

🧰 Tech Stack

    Frontend
    -Next.js
    -Redux (state management)
    -React Query (server state & API calls)
    -TanStack Table (optimized table rendering)
    -shadcn/ui (UI components)
    -Tailwind CSS (styling)

    Backend
    -MockAPI (mock database and CRUD operations)

    Deployment
    Vercel

```bash
/src
  /app
  /components
  /layouts
  /store
  /hooks
```

🛠️ How to Run the Project

1. Clone the repository

```bash
git clone https://github.com/your-username/credit-view-dashboard.git
cd credit-view-dashboard
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

The app will be available at:
👉 http://localhost:3000

```bash
npm run build
npm start
```
