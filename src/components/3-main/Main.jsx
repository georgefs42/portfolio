
import { useState } from 'react'
import './main.css'
import { myProjects } from './myProjects'

function Main() {

  const [currentActive, setCurrentActive] = useState('all')
  const [arr, setArr] = useState(myProjects)
  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory)

    const newArr = myProjects.filter((item) => {

      const smlArr = item.category.filter((myItem) => {
        return myItem === buttonCategory
      })

      return smlArr[0] === buttonCategory
    })
    setArr(newArr)
  }

  return (
    <main className='flex'>
      <section className='flex left-section'>

        <button onClick={() => {
          setCurrentActive('all')
          setArr(myProjects)
        }}
          className={currentActive === 'all' ? 'active' : null}>
          All Projects
        </button>

        <button onClick={() => {
          handleClick('react')
        }}
          className={currentActive === 'react' ? 'active' : null}>
          React Tsx & Jsx
        </button>

        <button onClick={() => {
          handleClick('css')
        }}
          className={currentActive === 'css' ? 'active' : null}>
          HTML & CSS
        </button>


        <button onClick={() => {
          handleClick('js')
        }}
          className={currentActive === 'js' ? 'active' : null}>
          JavaScript
        </button>

        <button onClick={() => {
          handleClick('lang')
        }}
          className={currentActive === 'lang' ? 'active' : null}>
          Languages
        </button>

        <button onClick={() => {
          handleClick('othr')
        }}
          className={currentActive === 'othr' ? 'active' : null}>
          Other
        </button>

      </section>

      <section className='flex right-section'>

        {arr.map((item) => {
          return (
            <article key={item.imgPath} className='card'>
              <img width={266} src={item.imgPath} alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className='title'>{item.projectTitle}</h1>
                <p className='subtitle'>{item.category}</p>

                <div className="flex icons">

                  <div style={{ gap: "11px" }} className='flex'>
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>

                  <a className='link flex' href="">
                    more
                    <span style={{ alignSelf: "end" }} className='icon-arrow-right2'></span>
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
