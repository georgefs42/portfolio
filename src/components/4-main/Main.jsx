import { useState } from 'react';
import './main.css';
import { myProjects } from './myProjects';

function Main() {
  const [currentActive, setCurrentActive] = useState('all');
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const smlArr = item.category.filter((myItem) => {
        return myItem === buttonCategory;
      });

      return smlArr[0] === buttonCategory;
    });
    setArr(newArr);
  };

  return (
    <main id="projects" className='flex'>
      <section className='flex left-section'>
        <button
          onClick={() => {
            setCurrentActive('all');
            setArr(myProjects);
          }}
          className={currentActive === 'all' ? 'active' : null}
        >
          All Projects
        </button>

        <button
          onClick={() => {
            handleClick('_react_');
          }}
          className={currentActive === '_react_' ? 'active' : null}
        >
          React Tsx & Jsx
        </button>

        <button
          onClick={() => {
            handleClick('_html_');
          }}
          className={currentActive === '_html_' ? 'active' : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick('_js_');
          }}
          className={currentActive === '_js_' ? 'active' : null}
        >
          JavaScript
        </button>

        <button
          onClick={() => {
            handleClick('_lang_');
          }}
          className={currentActive === '_lang_' ? 'active' : null}
        >
          Languages
        </button>

        <button
          onClick={() => {
            handleClick('_othr_');
          }}
          className={currentActive === '_othr_' ? 'active' : null}
        >
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
                <p className='description>'>{item.description}</p>

                <div className="flex icons">
                  <div style={{ gap: '30px'}} className='flex'>
                    <a href={item.linkUrl} className="icon-link" target="_blank"></a>
                    <a href={item.githubUrl} className="icon-github" target="_blank"></a>
                  </div>

                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default Main;
