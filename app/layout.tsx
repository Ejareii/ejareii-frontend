// import Navigation from '@/src/shared/components/navigation/main'
import './globals.css'
//import 'tailwindcss/ta'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <RecoilRoot>
    <html lang="en">
      <body >{children}</body>
    </html>
    // </RecoilRoot>
  )
}
