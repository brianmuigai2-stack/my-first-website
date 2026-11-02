import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { WorkSection } from './components/WorkSection'
import { AchievementsSection } from './components/AchievementsSection'
import { ResumeSection } from './components/ResumeSection'
import { TechnicalHighlightsSection } from './components/TechnicalHighlightsSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh', overflowX: 'hidden', fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <AchievementsSection />
      <ResumeSection />
      <TechnicalHighlightsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
