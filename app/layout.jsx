import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/ThemeContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ron Marvin De Jesus - Full Stack Developer",
  description: "Personal portfolio showcasing my projects and technical expertise",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark:bg-gray-800">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
