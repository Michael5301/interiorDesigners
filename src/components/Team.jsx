import profile1 from '../../public/images/profile1.jpg';
import profile2 from '../../public/images/profile2.jpg';
import Heroimage2 from '../../public/images/Heroimage2.jpg';
import { Fade } from 'react-awesome-reveal';



const style = {
    containerimage:
        'max-w-[1140px] mx-auto px-4 my-12 md:my-24 md:h-[calc(100vh-80px)] max-h-[600px] relative hidden md:block',
    bg: 'absolute w-full h-full object-cover rounded-2xl',
    overlay: 'absolute w-full h-full object-cover bg-black/50 rounded-2xl',

    content:
        'absolute h-full w-full flex justify-between items-center max-w-[1140px] mx-auto',
    imagescontainers: 'hidden md:block w-1/5',
    profileimage1:
        ' rounded-full shadow-md items-end mt-72 hover:scale-125 transition-all duration-500 cursor-pointer',
    profileimage2:
        ' rounded-full shadow-2xl items-end mt-72  hover:scale-125 transition-all duration-500 cursor-pointer',
    divText: 'text-center text-xl p-4 flex flex-col gap-16 text-white',
    textHeading: 'text-2xl md:text-9xl font-semibold',
    name: 'hidden md:block text-white bg-black/70 text-center p-2 rounded-2xl',
};


function Team() {
  return (
      <>
          <Fade>    
          <div className={style.containerimage}>
              <img src={Heroimage2} alt="" className={style.bg} />
              <div className={style.overlay}></div>

              <div className={style.content}>
                  <div className={style.imagescontainers}>
                      <img
                          src={profile1}
                          alt=""
                          className={style.profileimage1}
                          width={320}
                          height={480}
                      />
                      <p className={style.name}>John doe</p>
                  </div>
                  <div className={style.divText}>
                      <h2 className={style.textHeading}>Lorem, ipsum.</h2>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Impedit, iure.
                      </p>
                  </div>
                  <div className={style.imagescontainers}>
                      <img
                          src={profile2}
                          alt=""
                          className={style.profileimage2}
                          width={320}
                          height={480}
                      />
                      <p className={style.name}>John doe</p>
                  </div>
              </div>
          </div>
          </Fade>
      </>
  );
}

export default Team