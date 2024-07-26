import beachImage from '../assets/beach.jpg';
import helloImage from '../assets/helloimg.jpg';

const Comparison = () => {
  return (
    <div className="text-center my-8">
      <h2 className="text-2xl mb-4">Make a Comparison</h2>
      <div className="flex justify-center space-x-4">
        <div className="w-1/2">
          <img src={helloImage} alt="Image 1" className="w-full" />
          <p>The past offers with the highest reviews outshine others, standing as a testament to their exceptional quality.</p>
        </div>
        <div className="w-1/2">
          <img src={beachImage} alt="Image 2" className="w-full" />
          <p>Ring in the new year with iconic moments and unforgettable memories in New York City</p>
        </div>
      </div>
    </div>
  );
}

export default Comparison;
