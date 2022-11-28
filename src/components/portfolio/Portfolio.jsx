import React from 'react'
import Todos from '../../assets/TodosListApp.png'
import Netflix from '../../assets/NetflixDashboard.png'
import PyMini from '../../assets/PythonProjects.png'
import FiltersJS from '../../assets/FiltersJS.png'
import UC from '../../assets/uc.jpg'
import './portfolio.css'


const data = [
  {
    id: 1,
    image: Todos,
    title: 'Todos List App📃',
    github: 'https://github.com/SlowFlash22/Todo-List-App',
    demo: 'https://slowflash22.github.io/Todo-List-App/'
  },
  {
    id: 2,
    image: Netflix,
    title: 'Netflix Data Visualisation Dashboard📺',
    github: 'https://github.com/SlowFlash22/Netflix-Data-Visualisation',
    demo: 'https://slowflash22.github.io/Netflix-Data-Visualisation/'
  },
  {
    id: 3,
    image: PyMini,
    title: 'Python Mini-Projects',
    github: 'https://github.com/SlowFlash22/Python-Mini-Projects',
    demo: 'https://slowflash22.github.io/Python-Mini-Projects/'
  },
  {
    id: 4,
    image: FiltersJS,
    title: 'Filters with Javascript',
    github: 'https://github.com/SlowFlash22/Filters-with-JS',
    demo: 'https://slowflash22.github.io/Filters-with-JS/'
  },
  {
    id: 5,
    image: UC,
    title: 'None',
    github: 'https://www.youtube.com/watch?v=BBJa32lCaaY',
    demo: 'https://www.youtube.com/watch?v=BBJa32lCaaY'
  },
  {
    id: 6,
    image: UC,
    title: 'None',
    github: 'https://www.youtube.com/watch?v=BBJa32lCaaY',
    demo: 'https://www.youtube.com/watch?v=BBJa32lCaaY'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio

