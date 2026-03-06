import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tanveer - Programming Mentor & Developer',
  description: 'Learn Programming the Right Way. Master programming, problem solving, and real world development with personalized mentoring.',
  keywords: ['Programming', 'Mentoring', 'Web Development', 'MERN Stack', 'Next.js', 'React', 'Java', 'Python'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
