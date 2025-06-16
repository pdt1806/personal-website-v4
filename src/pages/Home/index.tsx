import { HeroHeader } from '../../components/HeroHeader';
import Contact from './Contact';
import Introduction from './Introduction';
import Skills from './Skills';
import Works from './Works';

export default function Home() {
  return (
    <>
      <HeroHeader />
      <Introduction />
      <Skills />
      <Works />
      <Contact />
    </>
  );
}
