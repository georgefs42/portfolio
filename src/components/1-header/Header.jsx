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
    <header className='flex'>
      <button
        onClick={() => setShowModel(true)}
        className='menu icon-menu flex'
      >
        <p className='menuText'>Menu</p>
      </button>

      <div />
      <nav>
        <ul className='flex'>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="../../../public/documents/george_youssef_STHLM_CV.pdf" download>CV</a></li>
          <li><a href="#contact">Contact</a></li>
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
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="../../../public/documents/george_youssef_STHLM_CV.pdf" download>CV</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}
    </header >
  );
}

export default Header;