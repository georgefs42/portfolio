import { useEffect, useState } from 'react'
import './header.css'

function Header() {
  const [showModel, setShowModel] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem('currentMode') ?? 'dark'
  );

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
    localStorage.setItem('currentMode', theme);
  }, [theme]);

  return (
    <header className='border flex'>
      <button
        onClick={() => setShowModel(true)}
        className='menu icon-menu flex'
      >
        <p className='menuText'>Menu</p>
      </button>

      <div />
      <nav>
        <ul className='flex'>
          <li><a href="">About</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">CV</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>

      <button
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
        className='mode flex'
      >
        {theme === 'dark' ? (
          <span className='icon-moon-stroke'></span>
        ) : (
          <span className='icon-weather'></span>
        )}
        
      </button>

      {showModel && (
        <div className="fixed">
          <ul className='model'>
        <li>
          <button
            className='icon-cancel'
            onClick={() => setShowModel(false)}
          />
        </li>
        <li><a href="">About</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">CV</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
  )
}
    </header >
  );
}

export default Header;