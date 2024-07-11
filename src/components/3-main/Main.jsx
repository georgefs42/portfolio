import './main.css'

function Main() {
  return (
    <main className='flex'>
     <section className='flex left-section'>
        <button className='active'>All Projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>Rect</button>
        <button>Node & Express</button>
     </section>

     <section className='flex right-section'>

        {["aa", "bb", "cc", 1, 7].map((item) =>{
          return(
            <article key={ClipboardItem}  className='card'>
          <img width={266} src="./public/project_1.png" alt="" />
          
          <div style={{width:"266px"}} className="box">
            <h1 className='title'>Food Menu</h1>
            <p className='subtitle'>This ptoject was training on Agil methoud and Fronend developing on React - typeScript</p>
          
          <div className="flex icons">
            
            <div style={{gap: "11px"}} className='flex'>
              <div className="icon-link"></div>
              <div className="icon-github"></div>
            </div>

            <a className='link flex' href="">
              more
              <span style={{alignSelf: "end"}} className='icon-arrow-right2'></span>
            </a>
          </div>
          
          </div>
        </article>
          )
        

        })}
    </section>
     
    </main>
  )
}

export default Main
