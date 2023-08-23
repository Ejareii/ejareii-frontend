import { MainLayout } from '@/src/shared/components/layouts/main-layout'
import localFont from '@next/font/local'
import './globals.css'
import RegisterModal from '@/src/shared/components/modals/RegisterModal'
import ToasterProvider from '@/src/providers/ToasterProvider'


const myFont = localFont({ src: '../fonts/IRANYekanBold.ttf' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">      
      <body className={myFont.className}>
        
        <ToasterProvider />
        <RegisterModal/>
        <MainLayout>
        </MainLayout>
        <div >
        {children}
        </div>
      </body>
    </html>
  )
}
