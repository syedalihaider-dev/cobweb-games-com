import FounderHero from '@/components/founder/FounderHero/FounderHero';
import FounderStory from '@/components/founder/FounderStory/FounderStory';
import FounderStats from '@/components/founder/FounderStats/FounderStats';
import FounderStatements from '@/components/founder/FounderStatements/FounderStatements';
import FounderJourney from '@/components/founder/FounderJourney/FounderJourney';
import FounderTeam from '@/components/founder/FounderTeam/FounderTeam';
import FounderRecognition from '@/components/founder/FounderRecognition/FounderRecognition';
import FounderDevices from '@/components/founder/FounderDevices/FounderDevices';
import FounderTestimonials from '@/components/founder/FounderTestimonials/FounderTestimonials';
import FounderFaqs from '@/components/founder/FounderFaqs/FounderFaqs';

import RouteLayout from '@/components/RouteLayout';

export const metadata = {
  title: 'Founder | Cobweb Games',
  description: 'The story behind Cobweb Games.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function FounderPage() {
  return (
    <RouteLayout>
      <main>
        <FounderHero />
        <FounderStory />
        <FounderStats />
        <FounderStatements />
        <FounderJourney />
        <FounderTeam />
        <FounderRecognition />
        <FounderDevices />
        <FounderTestimonials />
        <FounderFaqs />
      </main>
    </RouteLayout>
  );
}

