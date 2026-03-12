# 🌲 The Wild Oasis - Customer Portal

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

A full-stack, luxurious cabin booking platform built with **Next.js (App Router)**. This is the customer-facing application where users can explore cabins, make reservations, manage their profiles, and share their experiences.

🔗 **[Live Demo]https://the-rustic-haven-booking.vercel.app/**

## ✨ Key Features

### 🏨 Core Booking System

- **Cabin Exploration:** Users can browse luxurious cabins, view detailed descriptions, capacities, prices, and high-quality images.
- **Smart Filtering:** Filter cabins based on guest capacity to find the perfect fit.
- **Authentication:** Secure Google OAuth login integrated via **NextAuth.js**.
- **Reservation Flow:** Interactive date selection using `react-day-picker` ensuring no double-bookings.
- **Guest Dashboard:** A protected user area to manage reservations (edit/delete) and update profile information.

### ⭐ Custom Feature: Full-Stack Review System

To extend the core functionality and enhance the user experience, I engineered a complete review system from scratch:

- **Dynamic Average Ratings:** Automatically calculates and displays the average star rating for each cabin based on real user feedback.
- **Add Reviews:** Authenticated guests can submit a 1-5 star rating and a written review using **Next.js Server Actions**.
- **Delete Reviews:** Authorized users can delete their own reviews securely, with instant UI updates using `revalidatePath`.
- **Database Relational Modeling:** Designed and integrated a `reviews` table in Supabase, linked with Foreign Keys to `cabins` and `guests` tables.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Server Components, Server Actions)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Database & Storage:** [Supabase](https://supabase.com/) (PostgreSQL)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **Date Handling:** `date-fns` & `react-day-picker`

## 🚀 Getting Started (Local Development)

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/mohamed-samy0/the-wild-oasis-website.git](https://github.com/mohamed-samy0/the-wild-oasis-website.git)

   ```

2. **Install dependencies:**

````bash
 cd the-wild-oasis-website
 npm install

````

3. **Set up Environment Variables:**
 Create a .env.local file in the root directory and add your Supabase and Google Auth credentials:
```bash
 NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
 NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
 NEXTAUTH_URL=http://localhost:3000
 NEXTAUTH_SECRET=your_nextauth_secret
 GOOGLE_CLIENT_ID=your_google_client_id
 GOOGLE_CLIENT_SECRET=your_google_client_secret

````
3. **Set up Environment Variables:**
```bash
  npm run dev

```
  🗄️ Database Architecture
The PostgreSQL database (managed via Supabase) consists of 4 main relational tables:

cabins: Stores cabin details, pricing, and images.

guests: Stores authenticated user details.

bookings: Manages reservation dates, prices, and status.

reviews (Custom): Stores user feedback, ratings, and links to specific guests and cabins.

👨‍💻 Author Mohamed Samy

React / Next.js Front-End Developer & Artificial Intelligence Student.

GitHub: (https://github.com/Mohamed-samy0)

LinkedIn: Mohamed Samy
