import bdyImage from '../assets/bdyimage.jpg';
import bedImage from '../assets/bedimage.jpg';
import dinnerImage from '../assets/dinnerimage.jpg';
import familyImage from '../assets/familyimg.jpg';
import pollImage from '../assets/pollimage.jpg';
import riverImage from '../assets/riverimage.jpg';

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1">
        <h2 className="text-2xl">Special Offers</h2>
        <div className="relative">
          <img src={pollImage} alt="Image 1" className="w-full" />
          <button className="absolute bottom-2 left-2 bg-blue-700 text-white py-2 px-4 rounded">Loyality Discounts</button>
        </div>
        <div className="relative">
          <img src={familyImage} alt="Image 2" className="w-full" />
          <button className="absolute bottom-2 left-2 bg-blue-700 text-white py-2 px-4 rounded">Family Packages</button>
        </div>
      </div>
      <div className="col-span-1">
        <div className="relative">
          <img src={riverImage} alt="Image 3" className="w-full" />
          <button className="absolute bottom-2 left-2 bg-blue-700 text-white py-2 px-4 rounded">Early Booking Discounts</button>
        </div>
        <div className="relative">
          <img src={bdyImage} alt="Image 4" className="w-full" />
          <button className="absolute bottom-2 left-2 bg-blue-700 text-white py-2 px-4 rounded">Birthday or Anniversary Specials</button>
        </div>
      </div>
      <div className="col-span-1">
        <div className="relative">
          <img src={bedImage} alt="Image 5" className="w-full" />
          <button className="absolute bottom-2 left-2 bg-blue-700 text-white py-2 px-4 rounded">Last-Minute Deals</button>
        </div>
        <div className="relative">
          <img src={dinnerImage} alt="Image 6" className="w-full" />
          <button className="absolute bottom-2 left-2 bg-blue-700 text-white py-2 px-4 rounded">Referral Programs</button>
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;
