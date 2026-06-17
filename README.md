# 🚀 ClubSync – Student Club Collaboration & Project Management Platform

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB-Atlas-47A248)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4)
![Vercel](https://img.shields.io/badge/Deployment-Vercel-black)

## 🌐 Live Demo

https://club-sync-one.vercel.app/


## 📌 Project Overview

**ClubSync** is a modern **Student Club Collaboration & Project Management Platform** developed using **Next.js**, **TypeScript**, **MongoDB Atlas**, and **Tailwind CSS**. The platform is designed to simplify the management of student clubs by providing a centralized workspace for organizing events, managing members, assigning tasks, and tracking club activities.

Originally based on a task management template, the application has been transformed into a **Kanban-style collaboration system** that enables clubs to efficiently coordinate projects and events while maintaining an intuitive and visually appealing user experience.

This project was developed as part of the **Android Club Technical Recruitment 2026 – Web Development Task**.

---


# 🌟 Features Implemented

## 📋 Kanban Task Management

The existing task management system has been transformed into a **Kanban-style workflow**, allowing users to organize tasks into different stages:

- 📝 To Do
- 🚧 In Progress
- ✅ Done

Tasks can be edited and updated, making project tracking simple and efficient.

---

## 📅 Event Management

The platform includes a complete event management system where users can:

- Create new events
- Edit existing events
- View all upcoming events
- Track venue, date, time, participants, and status

This makes organizing workshops, hackathons, seminars, and club meetings seamless.

---

## 👥 Member Management

Users can:

- Add club members
- View member details
- Maintain a centralized member database
- Organize club personnel efficiently

---

## 📊 Dashboard

A centralized dashboard provides an overview of the entire platform:

- Total Tasks
- Total Events
- Total Members
- Recent Activities

The dashboard serves as the main control center for club management.

---

## 📝 Activity Tracking

The application maintains an activity feed that logs important actions such as:

- Task Created
- Task Updated
- Event Created
- Member Added

This improves collaboration and keeps everyone informed about recent changes.

---

## ✏️ Full CRUD Operations

The application supports complete CRUD functionality for:

- Tasks
- Events
- Members

Users can create, view, edit, and update records through an intuitive interface.

---

## 🎨 Modern Responsive UI

The application uses a modern design inspired by contemporary SaaS platforms featuring:

- Glassmorphism cards
- Gradient backgrounds
- Responsive layouts
- Hover animations
- Clean typography
- Attractive dashboard design

The interface is optimized for both desktop and laptop screens.

---

# 🛠 Technology Stack

| Technology | Purpose |
|----------------|----------------|
| **Next.js 16** | Full Stack Framework |
| **React** | UI Development |
| **TypeScript** | Type Safety |
| **MongoDB Atlas** | Cloud Database |
| **Tailwind CSS** | Styling |
| **Vercel** | Deployment |

---

# 📂 Project Structure

```text
ClubSync/

│── src/
│    ├── app/
│    ├── api/
│    ├── dashboard/
│    ├── board/
│    ├── create-task/
│    ├── create-event/
│    ├── create-member/
│    ├── edit-task/
│    ├── edit-event/
│    ├── events/
│    ├── members/
│    └── activity/

│── components/
│── models/
│── lib/
│── public/
```

---

# ⚙️ Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/<your-username>/ClubSync.git
```

```bash
cd ClubSync
```

---

## 2. Install Dependencies

```bash
npm install
```

If using Windows PowerShell:

```bash
npm.cmd install
```

---

## 3. Configure Environment Variables

Create a file named:

```text
.env.local
```

Add:

```env
MONGODB_URI=your_mongodb_connection_string
```

Example:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/clubsync
```

---

## 4. Start Development Server

```bash
npm run dev
```

or

```bash
npm.cmd run dev
```

Visit:

```
http://localhost:3000
```

---

# 🌐 Deployment Instructions

The project is deployed using **Vercel**.

## Steps

1. Push your project to GitHub

```bash
git add .
git commit -m "Deploy ClubSync"
git push
```

2. Import repository into Vercel

3. Configure Environment Variable:

```text
MONGODB_URI
```

4. Connect MongoDB Atlas

5. Deploy the application

Your project will be available through a public URL.

---

# 📷 Screenshots

## Landing Page

<img width="1888" height="907" alt="image" src="https://github.com/user-attachments/assets/f39515c6-e53c-4464-9d6f-360784f39568" />

<img width="1892" height="897" alt="image" src="https://github.com/user-attachments/assets/e6e182a4-dd70-4c91-a882-e4f2d8bdfb08" />



---

## Dashboard

<img width="1892" height="898" alt="image" src="https://github.com/user-attachments/assets/51336fcc-7061-4c6f-882b-8407984cf0af" />

<img width="1878" height="907" alt="image" src="https://github.com/user-attachments/assets/1af00fed-c711-41b7-aa05-76341aa76349" />

<img width="1882" height="897" alt="image" src="https://github.com/user-attachments/assets/71cc417a-de2d-4d5a-a4e5-fd540699911f" />




---

## Kanban Board

<img width="1888" height="905" alt="image" src="https://github.com/user-attachments/assets/162085df-2146-432e-a005-ec1a44379704" />


---

## Events Page

<img width="1801" height="896" alt="image" src="https://github.com/user-attachments/assets/a038122b-cea9-4fc7-923e-bc0430984edc" />

<img width="1336" height="910" alt="image" src="https://github.com/user-attachments/assets/a2ad399f-60e2-4f96-a72c-7b8ee6a1a53d" />


---

## Members Page

<img width="1906" height="842" alt="image" src="https://github.com/user-attachments/assets/0e31e768-8625-4961-9661-11bde015cf89" />

<img width="1461" height="901" alt="image" src="https://github.com/user-attachments/assets/f0c579bf-01ef-416b-bd60-e52fd671b22e" />

---

## Activity Feed

<img width="1461" height="911" alt="image" src="https://github.com/user-attachments/assets/ec117fbf-e302-4d9c-9caa-6e74a4d477be" />


---

# 🚀 Future Enhancements

The following features are planned for future releases to improve collaboration and user experience:

- 📅 Calendar View for Events
- 🌙 Dark / Light Theme Toggle
- 💬 Team Discussion & Comments
- 🔔 Notification Center
- 📊 Analytics Dashboard
- 📈 Progress Tracking
- 📁 File Sharing
- 🏆 Member Leaderboard
- 📱 Mobile Responsive Sidebar
- 📸 Event Gallery
- 📌 Attendance Management
- 📅 Event RSVP System

---

# Known Limitations

- Authentication is not implemented.
- Role-based authorization is unavailable.
- Real-time collaboration is not supported.
- File uploads are not yet implemented.
- Calendar integration is under development.
- Notifications are activity-based only.

--

---

---

# 👨‍💻 Developer

**Keerthi D S**

Android Club Technical Recruitment 2026

**ClubSync – Student Club Collaboration & Project Management Platform**

---

# 🔗 GitHub Repository

```
https://github.com/Keerthi-ds01/ClubSync
```


---

# 🌐 Deployed project link

```
https://club-sync-one.vercel.app/
```


---

## ⭐ Thank You

ClubSync demonstrates the transformation of a basic task management system into a collaborative platform for student clubs by integrating project management, event organization, member management, and activity tracking into a single modern web application.
