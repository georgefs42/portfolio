import { useState } from 'react'
import './header.css'

function header() {
  const [showModel, setshowModel] = useState(false);
  return (
   
      <header className='border flex'>
        <button onClick={()=>{
          setshowModel(true)
        }} className='menu icon-menu flex'> 
        <p className='menuText'>Menu</p>
        </button>
        
        <div/>
        <nav>
          <ul className='flex'>
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">CV</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>

       <button className='mode flex'>
        <span className='icon-moon-stroke'> </span>
       </button> 

    {showModel &&(   
        <div className="fixed">
            <ul className='model'>
            <li>
              <button className='icon-cancel' onClick={() => {
                setshowModel(false)
              }}/>
            </li>
              <li><a href="">About</a></li>
              <li><a href="">Projects</a></li>
              <li><a href="">CV</a></li>
              <li><a href="">Contact</a></li>
            </ul> 
        </div>
    )}

        
      </header>
  )
}

export default header
