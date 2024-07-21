import './footer.css';

function Footer() {

  return (
    <footer className='flex'>
      <ul className='flex'>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="/documents/george_youssef_STHLM_CV.pdf" download>CV</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='all-icons flex'>
          <a href="https://www.facebook.com/georgesdb/" target="_blank">
            <div className="icon icon-facebook2"></div>
          </a>

          <a href="https://www.linkedin.com/in/george-youssef-46a511261/" target="_blank">
            <div className="icon icon-linkedin2"></div>
          </a>
          <a href="https://github.com/georgefs42?tab=repositories" target="_blank">
            <div className="icon icon-github"></div>
          </a>
        </div>

        <p>&copy; {new Date().getFullYear()} <a href="#about">George Youssef</a>. All rights reserved.</p>


    </footer>
  )
}

export default Footer;