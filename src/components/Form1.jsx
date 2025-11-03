import { Fade } from "react-awesome-reveal"
import { useState } from "react"

const style = {
    section: `grid lg:grid-cols-2 gap-4`,
    heading1: 'text-6xl lg:text-9xl',
    heading: `text-3xl lg:text-4xl font-bold text-white text-center lg:text-start mb-8 capitalize p-2`,
    container: `max-w-3xl mx-auto`,
    form: `bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-6 transform hover:shadow-2xl transition-shadow duration-300`,
    subheading: `text-gray-100 text-center mb-8 text-lg`,
    inputGroup: `space-y-4`,
    input: `w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 placeholder-gray-400 text-gray-600 text-base`,
    textarea: `w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 placeholder-gray-400 min-h-[150px] resize-none text-gray-600 text-base `,
    button: `w-full md:w-auto px-8 py-3 bg-teal-700 text-white text-lg font-semibold rounded-2xl hover:rounded-none transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer`,
    buttonIcon: `text-xl`,
    error: `text-red-500 text-sm mt-1`,
    success: `text-green-500 text-center text-lg font-medium`,
};

function Form1() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'You must fill out this field';
        if (!formData.lastName.trim()) newErrors.lastName = 'You must fill out this field';
        if (!formData.email.trim()) {
            newErrors.email = 'You must fill out this field';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Unacceptable email address';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Telephone number is required';
        } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
            newErrors.phone = 'unacceptable telephone number';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            setIsSubmitting(true);
            // Simulate form submission
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSuccess(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    message: ''
                });
            }, 1500);
        } else {
            setErrors(formErrors);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    return (

        <section id="form" className={style.section}>

            <div className="lg:w-1/2">
                <h2 className={style.heading1}>Contact</h2>
                <h2 className={style.heading}>Us</h2>
            </div>
            <div className={style.container}>
                <Fade damping={0.2}>
                    <p className={style.subheading}>
                        Do you have questions? Fill the form below.
                    </p>

                    <form onSubmit={handleSubmit} className={style.form}>
                        <div className={style.inputGroup}>
                            <div>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    className={style.input}
                                />
                                {errors.firstName && <p className={style.error}>{errors.firstName}</p>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Surname"
                                    className={style.input}
                                />
                                {errors.lastName && <p className={style.error}>{errors.lastName}</p>}
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone number"
                                    className={style.input}
                                />
                                {errors.phone && <p className={style.error}>{errors.phone}</p>}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="E-mail"
                                    className={style.input}
                                />
                                {errors.email && <p className={style.error}>{errors.email}</p>}
                            </div>
                        </div>
                        <div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message"
                                className={style.textarea}
                            />
                            {errors.message && <p className={style.error}>{errors.message}</p>}
                        </div>
                        {isSuccess ? (
                            <p className={style.success}>thank you for contacting us!</p>
                        ) : (
                            <button
                                type="submit"
                                className={style.button}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    'Sending...'
                                ) : (
                                    <>
                                        Submit
                                        <span className={style.buttonIcon}>→</span>
                                    </>
                                )}
                            </button>
                        )}
                    </form>
                </Fade>
            </div>

        </section>
    )
}

export default Form1