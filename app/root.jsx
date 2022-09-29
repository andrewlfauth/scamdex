import tailwindURL from './styles/tailwind.css'
import { Toaster } from 'react-hot-toast'
const {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} = require('@remix-run/react')

export const meta = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
})

export const links = () => {
  return [{ rel: 'stylesheet', href: tailwindURL }]
}

export default function App() {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
        <Meta />
        <Links />
      </head>
      <body className='font-lato'>
        <Toaster />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
