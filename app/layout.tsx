import Navigation from '@/src/shared/components/navigation/main'
import { RecoilRoot } from 'recoil'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <RecoilRoot>
    <html lang="en">
      <Navigation/>
      <body >{children}</body>
    </html>
    // </RecoilRoot>
  )
}
