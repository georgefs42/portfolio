import { useState, useEffect } from 'react';
import './footer.css';

function Footer() {
  const [visitorCount, setVisitorCount] = useState(0);

  // Mock visitor count increment on component mount
  useEffect(() => {
    // You can implement actual logic here to fetch visitor count from a backend
    // For demonstration, we simulate an increment every time component mounts
    setVisitorCount(prevCount => prevCount + 1);
  }, []);

  return (
    <footer className='flex'>
      <ul className='flex'>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#cv">CV</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='all-icons flex'>
        <div className="icon icon-facebook2"></div>
        <div className="icon icon-linkedin2"></div>
        <div className="icon icon-github"></div>
      </div>

      <p>&copy; {new Date().getFullYear()} George Youssef. All rights reserved.</p>

      <div className="visitor-counter">
        <p>Visitors of this page: {visitorCount}</p>
      </div>
    </footer>
  )
}

export default Footer;
