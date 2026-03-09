import type { Metadata } from 'next'
import './globals.css'
import LayoutWrapper from '@/components/LayoutWrapper'

export const metadata: Metadata = {
  title: 'Tanveer - Programming Mentor & Developer',
  description: 'Learn Programming the Right Way. Master programming, problem solving, and real world development with personalized mentoring.',
  keywords: ['Programming', 'Data Structure' , 'Algorithms', 'Personalized Mentoring', 'one-on-one', 'Full Stack', "Coding", "Placement",'Mentoring', 'Web Development', 'MERN Stack', 'Next.js', 'React', 'Java', 'Python'],
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
