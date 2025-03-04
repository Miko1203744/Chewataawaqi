import {Hero} from '@/components/services-ui/hero'
import {EventsSection} from '@/components/services-ui/events-section'
import {CustomGameDesignSection} from '@/components/services-ui/custom-game-design-section'
import {GamesSection} from '@/components/services-ui/games-section'
import {TournamentsSection} from '@/components/services-ui/tournament-section'

export default function Services() {
  return (
    <main className="pt-16"> {/* Add padding to account for fixed navbar */}
     <Hero />
      <EventsSection />
      <GamesSection />
      <CustomGameDesignSection />
      <TournamentsSection />
    </main>
  )
}