import { MainLayout } from '@/src/shared/components/layouts/main-layout'
import localFont from "next/font/local"
import './globals.css'
import RegisterModal from '@/src/shared/components/modals/RegisterModal'
import ToasterProvider from '@/src/providers/ToasterProvider'
import LoginModal from '@/src/shared/components/modals/LoginModal'
import RentModal from '@/src/shared/components/modals/RentModal'
// import "swiper/css";

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
        <RentModal/>
        <LoginModal/>
        <RegisterModal/>
        <MainLayout>
        <div >
        {children}
        </div>
        </MainLayout>
      </body>
    </html>
  )
}
