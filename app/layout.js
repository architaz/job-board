import './globals.css'
import ThemeToggle from './components/ThemeToggle'

export const metadata = {
  title: 'Job Board',
  description: 'Find your dream job',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
        <main className="container mx-auto px-4 py-8">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Job Board</h1>
            <ThemeToggle />
          </header>
          {children}
        </main>
      </body>
    </html>
  )
}