// import { MainLayout } from '@/src/shared/components/layouts/main-layout'
// import localFont from "next/font/local"
// import './globals.css'

import getCurrentUser from './actions/getCurrentUser'
import LandingLayout from '@/src/modules/landing/layout'
// import "swiper/css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = getCurrentUser();
  console.log(currentUser, " currentUser ")
  return (
    <LandingLayout>
      {children}
    </LandingLayout>
  )
}
