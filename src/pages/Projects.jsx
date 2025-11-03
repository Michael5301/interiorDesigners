import React from 'react'
import { Fade } from 'react-awesome-reveal';
import Project1 from '../../public/images/projects/project1.jpg';
import Project2 from '../../public/images/projects/project2.jpg';
import Project3 from '../../public/images/projects/project3.jpg';
import Project4 from '../../public/images/projects/project4.jpg';
import Project5 from '../../public/images/projects/project5.jpg';
import Project6 from '../../public/images/projects/project6.jpg';
import Project7 from '../../public/images/projects/project7.jpg';
import Project8 from '../../public/images/projects/project8.jpg';

const style = {
    image: 'cursor-pointer hover:scale-110 duration-300 shadow-2xl rounded-lg ',
}


function Projects() {
  return (
      <div>
          <Fade>
              <div className="max-w-[1140px] mx-auto  bg-teal-900 text-white text-4xl font-semibold py-12 md:py-24 px-4">
                  <div>
                    <h2 className='text-3xl md:text-6xl mb-4'>Projects</h2>
                    <p className='text-xl md:text-2xl mb-8 text-gray-300 pl-12 lg:pl-24'>Our recents projects</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between  items-center">
                      <img src={Project1} alt="" className={style.image}  />
                      <img src={Project2} alt="" className={style.image} />
                      <img src={Project3} alt="" className={style.image} />
                      <img src={Project4} alt="" className={style.image} />
                      <img src={Project5} alt="" className={style.image} />
                      <img src={Project6} alt="" className={style.image} />
                      <img src={Project7} alt="" className={style.image} />
                      <img src={Project8} alt="" className={style.image} />
                  </div>
              </div>
          </Fade>
      </div>
  );
}

export default Projects