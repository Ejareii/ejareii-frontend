import { MainLayout } from '@/src/shared/components/layouts/main-layout'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">      
      <body >
        <MainLayout>
        {children}
        </MainLayout>
      </body>
    </html>
  )
}
