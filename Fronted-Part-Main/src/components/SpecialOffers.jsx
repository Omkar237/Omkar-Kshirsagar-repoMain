import { useEffect, useRef } from 'react';
import gothenburgImage from '../assets/fifthdivimg.jpg';
import belgiumImage from '../assets/firstdivimg.jpg';
import amsterdamImage from '../assets/fourthdivimg.jpg';
import newJerseyImage from '../assets/seconddivimg.jpg';
import specialOffersImage from '../assets/secondmainimg.jpg';
import nepalImage from '../assets/thirddivimg.jpg';

const SpecialOffers = () => {

   const offersRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          offersRef.current.classList.add('animate-fadeIn');
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (offersRef.current) {
      observer.observe(offersRef.current);
    }

    return () => {
      if (offersRef.current) {
        observer.unobserve(offersRef.current);
      }
    };
  }, []);

  return (
    <div ref={offersRef} className="special-offers opacity-0 transition-opacity duration-1000">
      <img src={specialOffersImage} alt="Special Offers" />
      <div className="offers">
        <div className="offer">
          <img src={belgiumImage} alt="Belgium" />
          <h3>Belgium</h3>
          <p>Bruxelles Gare Du Midl</p>
        </div>
      </div>
      <div className="w-1/2 p-4">
        <img src={newJerseyImage} alt="New Jersey" className="w-full" />
        <div className="text-center">
          <h3 className="text-xl">New Jersey</h3>
          <p>Windsor</p>
        </div>
      </div>
      <div className="w-1/2 p-4">
        <img src={nepalImage} alt="Nepal" className="w-full" />
        <div className="text-center">
          <h3 className="text-xl">Nepal</h3>
          <p>Hyatt Regency K</p>
        </div>
      </div>
      <div className="w-1/2 p-4">
        <img src={amsterdamImage} alt="Amsterdam" className="w-full" />
        <div className="text-center">
          <h3 className="text-xl">Amsterdam</h3>
          <p>Bunk</p>
        </div>
      </div>
      <div className="w-1/2 p-4">
        <img src={gothenburgImage} alt="Gothenburg" className="w-full" />
        <div className="text-center">
          <h3 className="text-xl">Gothenburg</h3>
          <p>First Hotel G</p>
        </div>
      </div>
    </div>
  );
}

export default SpecialOffers;
