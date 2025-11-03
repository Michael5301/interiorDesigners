import React from 'react'
import { Link } from 'react-router-dom'


const style = {
    container: 'bg-white',
    maincontainer: 'h-20 max-w-[1140px] mx-auto flex justify-between items-center px-4 text-xl font-semibold',
    leftLink:'flex gap-4',
    rightLink:'hidden lg:block bg-teal-950 text-white py-2 px-4 rounded-4xl font-semibold'
};



function Navbar() {
  return (
      <div className={style.container}>
          <navbar className={style.maincontainer}>
              <div className={style.leftLink}>
                  <Link to='/about' >About</Link>
                  <Link to= '/projects'>Projects</Link>
              </div>
              <div className='text-teal-950 text-2xl font-semibold'>
                  <Link to='/'>
                      <i className="pi pi-prime"></i>
                      Logo
                  </Link>
              </div>
              <div className={style.rightLink}>
                  <Link to='/contactus'>Contact Us</Link>
              </div>
          </navbar>
      </div>
  );
}

export default Navbar