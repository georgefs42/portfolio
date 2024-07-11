import './hero.css'

function hero() {
  return (
    <section className='hero flex'>
      <div className='left-section '> 
        
        <div className="parent-avatar flex">
          <img src="./GeorgeY.png" className='avatar' alt="" />
          <dev className='icon-verified'></dev>
        </div>

        <h1 className='name'>GEORGE YOUSSEF</h1>
        <h1 className='title'>FULL-STACK DEVELOPER ENGINEER</h1>
        <p className='subtitle'>
          I'm a computer engineer since 2000, and Fullstack Developer since 2024, based in Stockholm.
        </p>

      <div className='all-icons flex'>
        <div className="icon icon-facebook2"></div>
        <div className="icon icon-linkedin2"></div>
        <div className="icon icon-github"></div>
      </div>
      </div>
      <div className='right-section animation border'>animation

      </div>
    </section>
  )
}

export default hero
