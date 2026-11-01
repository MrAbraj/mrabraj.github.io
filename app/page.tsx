import { AboutSection } from '@/components/portfolio/about-section'
import { ContactSection } from '@/components/portfolio/contact-section'
import { ExperienceSection } from '@/components/portfolio/experience-section'
import { Header } from '@/components/portfolio/header'
import { HeroSection } from '@/components/portfolio/hero-section'
import { ProjectsSection } from '@/components/portfolio/projects-section'
import { RevealObserver } from '@/components/portfolio/reveal-observer'
import { TiltContainer } from '@/components/portfolio/tilt-container'

export default function Page() {
  return (
    <TiltContainer>
      <RevealObserver />
      <Header />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </TiltContainer>
  )
}
