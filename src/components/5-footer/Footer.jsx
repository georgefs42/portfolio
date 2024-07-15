import './footer.css'
function Footer() {
  return (
    <footer className='flex'>
      <ul className='flex'>
        <li><a href="">About</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">CV</a></li>
        <li><a href="">Contact</a></li>
      </ul>

      <div className='all-icons flex'>
          <div className="icon icon-facebook2"></div>
          <div className="icon icon-linkedin2"></div>
          <div className="icon icon-github"></div>
        </div>

        <p>&copy; {new Date().getFullYear()} George Youssef. All rights reserved.</p>
        
      
    </footer>
  )
}

export default Footer
