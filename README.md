# Next.js Job Board

A responsive job board built with Next.js and Tailwind CSS that fetches and displays job listings from a mock API, with filtering and dark mode support.

![Job Board Screenshot](/job-board/public/screenshot.png)

🛠 Technical Approach
This project demonstrates modern web development practices with:

Next.js App Router: Leveraging React Server Components where possible for better performance, with strategic use of Client Components for interactive elements.

Tailwind CSS: Utility-first styling with dark mode support configured through tailwind.config.js. The responsive design uses Tailwind's mobile-first breakpoints.

State Management: Local state for filters and UI preferences, with proper lifting of state for cross-component communication.

Mock API: Local JSON data file serving as a mock API endpoint, structured to simulate real-world API responses.

## 🚀 Features
- Responsive job listings with cards
- Filter by location, job type, and salary (INR)
- Dark/light mode toggle
- Dynamic job detail pages
- Mock API integration

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v18 or later)
- npm (v9 or later)
- Git

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/job-board.git
   cd job-board

