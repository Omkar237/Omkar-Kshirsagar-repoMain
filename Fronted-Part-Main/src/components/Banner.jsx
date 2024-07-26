import { useEffect, useRef } from 'react';
import bannerImage from '../assets/mainimage.jpg';

const Banner = () => {

  const bannerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bannerRef.current.classList.add('animate-fadeIn');
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <div ref={bannerRef} className="banner opacity-0 transition-opacity duration-1000">
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <div className="banner-content">
        <h3>Why Choose Us?</h3>
        <a href="index2.html">
          <button className="explore-button">Explore More &gt; <br /> Next Page &gt;&gt;</button>
        </a>
    </div>
      <p className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-gray-600 text-5xl">Exclusive Hotel Search!</p>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button className="bg-gray-700 text-white py-2 px-4 rounded">Special offers</button>
        <button className="bg-gray-700 text-white py-2 px-4 rounded">Last Search</button>
        <button className="bg-gray-700 text-white py-2 px-4 rounded">Trending destinations</button>
        <button className="bg-gray-700 text-white py-2 px-4 rounded">Highest Reviewed</button>
      </div>
    </div>
  );
}

export default Banner;
