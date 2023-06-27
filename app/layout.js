import '../styles/global.css'
import Header from './components/Header'

export const metadata = {
  title: 'Formula 1 Pitstop',
  description: 'Your one stop for all things Formula 1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient'/>
        </div>
        <main className='app'>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
