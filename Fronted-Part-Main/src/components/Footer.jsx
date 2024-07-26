import appImage from '../assets/Screenshot_23-3-2024_104015_www.figma.com.jpeg';
import footerImg1 from '../assets/footerimg.jpeg';
import footerImg2 from '../assets/footerimg2.jpeg';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl">Go Further With The EasySet24 App</h3>
            <p>Enjoy savings on chosen hotels and flights when you book through the EasySet24 website. <br />Additionally, earn One Key Cash for every booking made through the app.</p>
          </div>
          <div>
            <img src={appImage} alt="App" className="w-40" />
          </div>
        </div>
        <div className="flex flex-wrap mt-8">
          <div className="w-1/6 p-4">
            <h4 className="text-lg">About Us</h4>
            <ul>
              <li>Our Story</li>
              <li>Work With Us</li>
              <li>Press & Media</li>
              <li>Privacy and Security</li>
            </ul>
          </div>
          <div className="w-1/6 p-4">
            <h4 className="text-lg">We Offer</h4>
            <ul>
              <li>Trip Sponsorship</li>
              <li>Last Minutes Flights</li>
              <li>Best Deals</li>
              <li>AI-Driven Search</li>
            </ul>
          </div>
          <div className="w-1/6 p-4">
            <h4 className="text-lg">Headquarters</h4>
            <ul>
              <li>England</li>
              <li>France</li>
              <li>Canada</li>
              <li>Iceland</li>
            </ul>
          </div>
          <div className="w-1/6 p-4">
            <h4 className="text-lg">Travel Blogs</h4>
            <ul>
              <li>Europe</li>
              <li>North America</li>
              <li>South America</li>
              <li>Africa</li>
            </ul>
          </div>
          <div className="w-1/6 p-4">
            <h4 className="text-lg">Explore Hotels</h4>
            <ul>
              <li>Charming Hotels</li>
              <li>Cheap Hotels</li>
              <li>Green Hotels</li>
              <li>Pet-friendly Hotels</li>
            </ul>
          </div>
          <div className="w-1/6 p-4">
            <h4 className="text-lg">Helpful Tips</h4>
            <ul>
              <li>Accommodation</li>
              <li>Hotels and B&Bs</li>
              <li>Flight Only</li>
              <li>Travel Insurance</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <img src={footerImg1} alt="Footer Image 1" className="w-40" />
          </div>
          <div>
            <img src={footerImg2} alt="Footer Image 2" className="w-40" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
