import { Link } from 'react-router-dom';
import sittingroomimage from '../../public/images/sittingroomimage.jpg';
import { Fade } from 'react-awesome-reveal';






const style = {
    container: 'text-white relative max-w-[1140px] mx-auto max-h-[600px]',

    bg: 'object-cover no-repeat w-full h-full max-h-[600px]',
    overlay: 'absolute inset-0 bg-black/50 ',

    content: 'absolute inset-0 px-8 py-12 grid justify-between md:gap-32',
    topfooter:
        'grid gap-4 font-semibold items-center justify-center md:grid-cols-2 lg:grid-cols-3 md:text-xl',
    linkcontactus:
        'text-white text-4xl font-semibold mx-auto md:tex-6xl lg:text-9xl pt-4',
};

function Footer() {
    return (
        <div>
            <Fade>

            <footer className={style.container}>

                <img src={sittingroomimage} alt="" className={style.bg} />
                <div className={style.overlay}></div>

                <div className={style.content}>
                    <Link className={style.linkcontactus}>
                        {' '}
                        CONTACTS <i className="pi pi-star text-7xl"></i> US
                    </Link>
                    <div className={style.topfooter}>
                        <Link className="">
                            Your journey starts here
                        </Link>
                        <Link>Do you need ideas?</Link>
                        <Link>@2023. All rights reserved.</Link>
                    </div>
                </div>

            </footer>
            </Fade>
        </div>
    );
}

export default Footer;
