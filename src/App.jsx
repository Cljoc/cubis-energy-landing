import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Features from './components/Features'
import DashboardShowcase from './components/DashboardShowcase'
import Security from './components/Security'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-navy">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <DashboardShowcase />
        <Security />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
