import './i18n'
import './styles/globals.css'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Skills } from './components/Skills/Skills'
import { Contact } from './components/Contact/Contact'
import { Cursor } from './components/Cursor/Cursor'

function App() {
  return (
    <>
      <Cursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default App
