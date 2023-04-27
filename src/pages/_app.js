import '../styles/globals.scss';
import { Vazirmatn } from 'next/font/google'

const vazirmatn = Vazirmatn({
  weights: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={vazirmatn.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
