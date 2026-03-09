import type { Metadata } from 'next'
import './globals.css'
import LayoutWrapper from '@/components/LayoutWrapper'

export const metadata: Metadata = {
  title: 'Tanveer - Programming Mentor & Developer',
  description: 'Learn Programming the Right Way. Master programming, problem solving, and real world development with personalized mentoring.',
  keywords: [
  'Tanveer programming mentor',
  'programming mentor online',
  'personalized programming mentoring',
  'learn programming from scratch',
  'data structures and algorithms mentor',
  'coding mentor for placements',
  'software engineering mentor',
  'MERN stack mentor',
  'Next.js mentor',
  'React mentor',
  'learn full stack development',
  'DSA interview preparation',
  'coding mentorship for students',
  'Java programming mentor',
  'Python programming mentor'
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
