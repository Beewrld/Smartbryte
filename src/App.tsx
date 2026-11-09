import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Introduction } from './components/Introduction'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Introduction />
      </main>
      <Footer />
    </>
  )
}
