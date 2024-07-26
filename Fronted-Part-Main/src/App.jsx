import Banner from './components/Banner';
import Comparison from './components/Comparison';
import Footer from './components/Footer';
import ImageGrid from './components/ImageGrid';
import Reviews from './components/Reviews';
import SpecialOffers from './components/SpecialOffers';

function App() {
  return (
    <div>
      <Banner />
      <SpecialOffers />
      <ImageGrid />
      <Comparison />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
