import { Header, Hero } from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Works />
      </main>
      <Footer />
    </div>
  )
}

export default App
