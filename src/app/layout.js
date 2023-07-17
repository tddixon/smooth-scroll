import './globals.css'


export const metadata = {
  title: 'Bryant Estate',
  description: 'Mockups for Bryant Estate',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
