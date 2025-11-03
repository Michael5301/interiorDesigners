import image1 from '../../public/images/image1.jpg';
import {Fade} from 'react-awesome-reveal';





const interiorDesignServices = [
    {
        id: 1,
        name: 'Space Planning',
        description:
            'Optimize your space layout for functionality and flow. We analyze your space and create efficient floor plans that maximize usability.',
        icon: '📐',
        priceRange: '$500 - $2,000',
        duration: '1-2 weeks',
        category: 'Planning',
        features: [
            'Furniture layout optimization',
            'Traffic flow analysis',
            'Functional zoning',
            'Scale drawings',
        ],
    },
    {
        id: 2,
        name: 'Color Consultation',
        description:
            'Expert color palette selection that complements your space, lighting, and personal style for a cohesive look.',
        icon: '🎨',
        priceRange: '$300 - $800',
        duration: '3-5 days',
        category: 'Consultation',
        features: [
            'Custom color palette',
            'Paint and finish selection',
            'Lighting considerations',
            'Mood board creation',
        ],
    },
    {
        id: 3,
        name: 'Full-Service Interior Design',
        description:
            'Complete design transformation from concept to installation. We handle every detail for a seamless experience.',
        icon: '🏠',
        priceRange: '$3,000 - $15,000+',
        duration: '4-12 weeks',
        category: 'Comprehensive',
        features: [
            'Concept development',
            'Furniture selection',
            'Material sourcing',
            'Project management',
            'Installation coordination',
        ],
    },
    {
        id: 4,
        name: 'Furniture Selection',
        description:
            'Curated furniture pieces that fit your space, style, and budget while ensuring comfort and quality.',
        icon: '🛋️',
        priceRange: '$800 - $2,500',
        duration: '2-4 weeks',
        category: 'Product',
        features: [
            'Custom furniture sourcing',
            'Size and scale verification',
            'Fabric and finish selection',
            'Delivery coordination',
        ],
    },
    {
        id: 5,
        name: 'Lighting Design',
        description:
            'Strategic lighting plans that enhance ambiance, functionality, and highlight architectural features.',
        icon: '💡',
        priceRange: '$600 - $1,800',
        duration: '2-3 weeks',
        category: 'Technical',
        features: [
            'Layered lighting plan',
            'Fixture selection',
            'Ambient and task lighting',
            'Energy-efficient solutions',
        ],
    },
    {
        id: 6,
        name: 'Window Treatment Design',
        description:
            "Custom window solutions that provide privacy, light control, and enhance your room's aesthetic.",
        icon: '🪟',
        priceRange: '$400 - $1,200',
        duration: '3-6 weeks',
        category: 'Product',
        features: [
            'Custom drapery design',
            'Hardware selection',
            'Fabric consultation',
            'Professional installation',
        ],
    },
    {
        id: 7,
        name: 'Virtual Design Consultation',
        description:
            'Remote design advice and guidance through video calls and digital tools for your DIY projects.',
        icon: '💻',
        priceRange: '$150 - $400',
        duration: '1-2 hours',
        category: 'Consultation',
        features: [
            'Video consultation',
            'Digital mood boards',
            'Shopping lists',
            'Layout suggestions',
        ],
    },
    {
        id: 8,
        name: 'Kitchen & Bath Design',
        description:
            'Specialized design solutions for kitchens and bathrooms focusing on functionality, storage, and aesthetics.',
        icon: '🚿',
        priceRange: '$1,500 - $5,000',
        duration: '4-8 weeks',
        category: 'Specialized',
        features: [
            'Layout optimization',
            'Cabinet design',
            'Fixture selection',
            'Material specification',
        ],
    },
];

const style = {
    container:
        'grid gap-8 md:grid-cols-2 max-w-[1140px] mx-auto px-4 py-12 md:py-24 bg-teal-500',
    leftdiv: ' ',

    containerimage:
        'flex flex-col lg:flex-row gap-8 max-w-[960px] mx-auto px-4 py-12 md:py-24 md:h-[600px]',
    container2:
        'grid gap-8 md:grid-cols-2 max-w-[1140px] justify-center items-center mx-auto px-4 py-12',
    image: 'rounded-2xl shadow-2xl hover:scale-110 hover:rotate-5 hover:shadow-2xl hover:rounded-none transition-all duration-500 cursor-pointer',
    divtbnimages: 'w-1/3 ',
    rightdiv: 'grid gap-4 md:grid-cols-2 lg:grid-cols-3',
    service: 'bg-emerald-500 p-4 rounded-xl text-slate-950 shadow-2xl',
    serviceheader: 'pb-4 bg-white px-2 rounded-xl shadow-md',
    button: 'bg-green-900 text-white p-2 rounded text-xl    ',

    servicedetails: 'bg-white'
};

function services() {
    return (
        <>
            <Fade>
                <div className={style.container2}>
                    <div className="pr-8 flex flex-col gap-8">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                            Our services
                        </h3>
                        <p className="text-xl">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Soluta neque aliquam cupiditate dicta labore
                            omnis placeat quidem harum exercitationem odio culpa
                            facilis delectus voluptates, doloremque quos
                            accusamus.
                        </p>
                    </div>
                    <img src={image1} alt="" className={style.image} />
                </div>
            </Fade>


            <div className={style.container}>
            <Fade>
                {interiorDesignServices.map((service) => (
                    <div
                        key={service.id}
                        className="text-slate-900 bg-white rounded-2xl shadow-md hover:rounded-none hover:scale-98 hover:rotate-2 hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer"
                    >
                        <div className="border-b-2 p-4">
                            <span className="text-2xl shodow-teal-500">
                                {service.icon}
                            </span>
                            <h3 className="text-xl font-semibold text-slate-800">
                                {service.name}
                            </h3>
                            <span className="text-sm text-slate-500">
                                {service.category}
                            </span>
                        </div>
                        <p className="p-4 text-base italic">
                            {service.description}
                        </p>

                        <div className="p-4 ">
                            <div className="flex items-center gap-4">
                                <span>Price: {service.priceRange}</span>|
                                <span>Duration: {service.duration}</span>
                            </div>
                            <ul className="py-2 flex flex-col gap-2">
                                {service.features.map((feature, index) => (
                                    <li key={index}>⭐ {feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <button className="bg-green-900 text-xl m-4 text-white py-2 px-8 rounded-2xl shadow-md hover:scale-102 hover:rounded-none duration-300 cursor-pointer font-semibold">
                                Inquire About This Service
                            </button>
                        </div>
                    </div>
                ))}
            </Fade>
            </div>
        </>
    );
}

export default services;
