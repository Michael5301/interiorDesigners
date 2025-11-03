import Heroimage1 from '../../public/images/Heroimage1.jpg';
import Heroimage2 from '../../public/images/Heroimage2.jpg';
import { Fade } from 'react-awesome-reveal';



const style = {
    contents: 'flex flex-col lg:flex-row gap-8',
    heading2: 'text-9xl font-semibold md:mb-4', 
    image: ' rounded-2xl h-full',
}


function Hero() {
    return (
        <Fade>
        <div className="max-w-[1140px] mx-auto px-4 md:h-[600px] py-12 md:py-24">
            <h1 className={style.heading2}>About</h1>
            <div className={style.contents}>
                <div className="lg:w-[25%] flex flex-col gap-4 justify-between">
                    <h1 className={style.heading2}>us</h1>
                    <p>Lorem ipsum dolor sit.</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores omnis quia alias aperiam sequi quo iure iste
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <img src={Heroimage1} alt="" className={style.image} />
                </div>
                <div className="lg:w-[25%] flex flex-col gap-4 justify-between">
                    <img src={Heroimage2} alt="" className={style.image} />
                    <h2 className='font-semibold text-xl'>Lorem, ipsum.</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Temporibus, earum!
                    </p>
                </div>
            </div>
        </div>
        </Fade>
    );
}

export default Hero;
