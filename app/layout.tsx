import { MainLayout } from '@/src/shared/components/layouts/main-layout'
import localFont from "next/font/local"
import './globals.css'
import RegisterModal from '@/src/shared/components/modals/RegisterModal'
import ToasterProvider from '@/src/providers/ToasterProvider'
import LoginModal from '@/src/shared/components/modals/LoginModal'
import RentModal from '@/src/shared/components/modals/RentModal'
import SearchModal from '@/src/shared/components/modals/SearchModal'
import getCurrentUser from './actions/getCurrentUser'
// import "swiper/css";

const myFont = localFont({ src: '../fonts/IRANYekanBold.ttf' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = getCurrentUser();
  console.log(currentUser, " currentUser ")
  return (
    <html lang="fa" dir="rtl">
      <head>
        {/* <link rel="stylesheet" href="../node_modules/leaflet.awesome-markers/dist/leaflet.awesome-markers.css"/>
        <script src="../node_modules/leaflet.awesome-markers/dist/leaflet.awesome-markers.css"></script> */}
      </head>
      <body className={myFont.className}>

        <ToasterProvider />
        <RentModal />
        <SearchModal />
        <LoginModal />
        <RegisterModal />
        <MainLayout>
          <div >
            {children}
          </div>
        </MainLayout>
      </body>
    </html>
  )
}
