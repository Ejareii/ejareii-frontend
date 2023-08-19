import { MainLayout } from '@/src/shared/components/layouts/main-layout'
import localFont from '@next/font/local'
import './globals.css'

const myFont = localFont({ src: '../fonts/IRANYekanBold.ttf' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">      
      <body className={myFont.className}>
        <MainLayout>
        {children}
        </MainLayout>
      </body>
    </html>
  )
}
