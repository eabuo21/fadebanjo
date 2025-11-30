import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './global.css'
import Sidebar from './components/shared/Nav'

config.autoAddCss = false

// SEO metadata (unchanged)
export const metadata = {
  title: 'Fatimo Adebanjo',
  description:
    'Machine Learning Researcher | Optimization | Robustness | Generalization',
  keywords: [
    'Machine Learning',
    'Optimization',
    'Robustness',
    'Generalization',
    'Deep Learning',
    'AI Research',
    'Fatimo Adebanjo',
  ],
  openGraph: {
    title: 'Fatimo Adebanjo',
    description: 'Machine Learning Researcher & Data Scientist',
    type: 'website',
    url: 'https://your-website.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fatimo Adebanjo Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fatimo Adebanjo',
    description: 'Machine Learning Researcher | Optimization & Robustness',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white text-black">
      <body className="  md:flex min-h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="md:flex-1  md:ml-64">{children}</main>

        <ToastContainer />
      </body>
    </html>
  )
}
