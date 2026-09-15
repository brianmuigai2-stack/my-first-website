import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { WorkSection } from './components/WorkSection'
import { ServicesSection } from './components/ServicesSection'
import { AchievementsSection } from './components/AchievementsSection'
import { ResumeSection } from './components/ResumeSection'
import { CurrentlyBuildingSection } from './components/CurrentlyBuildingSection'
import { SystemDesignSection } from './components/SystemDesignSection'
import { TechnicalHighlightsSection } from './components/TechnicalHighlightsSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { MusicPlayer } from './components/MusicPlayer'
import { CustomCursor } from './components/CustomCursor'
import { ScrollProgress } from './components/ScrollProgress'
import { SnowEffect } from './components/SnowEffect'

export default function App() {
  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh', overflowX: 'hidden', fontFamily: "'Inter', sans-serif" }}>
      <ScrollProgress />
      <SnowEffect />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ServicesSection />
      <AchievementsSection />
      <ResumeSection />
      <SystemDesignSection />
      <TechnicalHighlightsSection />
      <CurrentlyBuildingSection />
      <ContactSection />
      <Footer />
      <MusicPlayer />
      <CustomCursor />
    </div>
  )
}
