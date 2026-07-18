import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ImpactStats from './components/ImpactStats'
import Problem from './components/Problem'
import EnergyFlow from './components/EnergyFlow'
import DigitalTwin from './components/DigitalTwin'
import Features from './components/Features'
import DashboardShowcase from './components/DashboardShowcase'
import LiveAI from './components/LiveAI'
import AIInsights from './components/AIInsights'
import SmartCity from './components/SmartCity'
import Industries from './components/Industries'
import Integrations from './components/Integrations'
import ROICalculator from './components/ROICalculator'
import BeforeAfter from './components/BeforeAfter'
import SuccessMetrics from './components/SuccessMetrics'
import Security from './components/Security'
import HowItWorks from './components/HowItWorks'
import FinalCTA from './components/FinalCTA'
import CTA from './components/CTA'
import Footer from './components/Footer'
import SpotlightCursor from './components/SpotlightCursor'

function App() {
  return (
    <div className="relative min-h-screen bg-navy">
      <SpotlightCursor />
      <Navbar />
      <main>
        <Hero />
        <ImpactStats />
        <Problem />
        <EnergyFlow />
        <DigitalTwin />
        <Features />
        <DashboardShowcase />
        <LiveAI />
        <AIInsights />
        <SmartCity />
        <Industries />
        <Integrations />
        <ROICalculator />
        <BeforeAfter />
        <SuccessMetrics />
        <Security />
        <HowItWorks />
        <FinalCTA />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
