import bannerFour from '../assets/bannerfour.jpeg';
import bannerOne from '../assets/bannerone.jpeg';
import bannerThree from '../assets/bannerthree.jpeg';
import bannerTwo from '../assets/bannertwo.jpeg';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import seaImage from '../assets/seaimg.jpg';

const Reviews = () => {
  return (
    <div className="relative">
      <img src={seaImage} alt="Background" className="w-full h-96 object-cover" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-wrap justify-center items-center">
        <div className="w-1/3 p-4">
          <img src={person1} alt="Teacher Terece" className="w-full rounded-full" />
          <div className="text-center">
            <h3 className="text-xl">Teacher Terece</h3>
            <p>Returning to this hotel is always a delight – their loyalty program showers us with exclusive discounts and amazing perks!</p>
          </div>
        </div>
        <div className="w-1/3 p-4">
          <img src={person2} alt="BEYU68£" className="w-full rounded-full" />
          <div className="text-center">
            <h3 className="text-xl">BEYU68£</h3>
            <p>Accessing EasySet24 extraordinary special offers makes always our journey even more unforgettable.</p>
          </div>
        </div>
        <div className="w-1/3 p-4">
          <img src={person3} alt="Elina13ay" className="w-full rounded-full" />
          <div className="text-center">
            <h3 className="text-xl">Elina13ay</h3>
            <p>Weekends here are pure bliss with their carefully crafted packages, and the extended stay discounts make relaxation even more enticing.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-8">
        <div className="w-1/4 p-4">
          <img src={bannerOne} alt="Banner 1" className="w-full" />
          <p className="text-center mt-2">Reserve your hotel Pursue your team</p>
        </div>
        <div className="w-1/4 p-4">
          <img src={bannerTwo} alt="Banner 2" className="w-full" />
          <p className="text-center mt-2">Subscribe our NewsLetter</p>
        </div>
        <div className="w-1/4 p-4">
          <img src={bannerThree} alt="Banner 3" className="w-full" />
          <p className="text-center mt-2">Review Hotel Services WorldWide</p>
        </div>
        <div className="w-1/4 p-4">
          <img src={bannerFour} alt="Banner 4" className="w-full" />
          <p className="text-center mt-2">Follow the latest tour news</p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
