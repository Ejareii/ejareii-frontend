// import { MainLayout } from '@/src/shared/components/layouts/main-layout'
// import localFont from "next/font/local"
// import './globals.css'

import { Metadata } from 'next'
import getCurrentUser from './actions/getCurrentUser'
import LandingLayout from '@/src/modules/landing/layout'
// import "swiper/css";

export const metadata: Metadata = {
  title: '%s | page',
  description: '...',
  metadataBase: new URL("https://ejareii.com/"),

}
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  console.log(apiUrl,"apiUrl")

  return (
    <LandingLayout>
      {children}
    </LandingLayout>
  )
}
