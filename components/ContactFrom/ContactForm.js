import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import SimpleReactValidator from 'simple-react-validator';

const ContactForm = () => {
    const form = useRef();
    const [forms, setForms] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [messageSent, setMessageSent] = useState(false);

    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage',
        messages: {
            required: 'Ce champ est requis.',
            alpha_space: 'Ce champ ne peut contenir que des lettres et des espaces.',
            email: 'Veuillez entrer une adresse e-mail valide.',
            phone: 'Veuillez entrer un numéro de téléphone valide.'
        }
    }));

    const changeHandler = e => {
        const { name, value } = e.target;
        setForms(prevForms => ({ ...prevForms, [name]: value }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setIsSubmitting(true);
            emailjs
                .sendForm('service_g1j5rm5', 'template_912n5t8', form.current, 'GIlmZqVXwRtIsX_OQ')
                .then(
                    () => {
                        setMessageSent(true);
                        setIsSubmitting(false);
                        setForms({ name: '', email: '', phone: '', subject: '', message: '' });
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        setIsSubmitting(false);
                    },
                );
        } else {
            validator.showMessages();
            setForms({ ...forms });
        }
    };

    return (
        <>
            {messageSent && <p className="confirmation-message">Votre message a été envoyé avec succès !</p>}

            <form ref={form} onSubmit={sendEmail} className="contact-validation-active">
                <div className="row">
                    <div className="col col-lg-6 col-12">
                        <div className="form-field">
                            <input
                                type="text"
                                name="name"
                                value={forms.name}
                                placeholder="Votre nom"
                                onChange={changeHandler}
                                disabled={isSubmitting}
                            />
                            {validator.message('name', forms.name, 'required|alpha_space')}
                        </div>
                    </div>
                    <div className="col col-lg-6 col-12">
                        <div className="form-field">
                            <input
                                type="email"
                                name="email"
                                value={forms.email}
                                placeholder="Votre E-mail"
                                onChange={changeHandler}
                                disabled={isSubmitting}
                            />
                            {validator.message('email', forms.email, 'required|email')}
                        </div>
                    </div>
                    <div className="col col-lg-12 col-12">
                        <div className="form-field">
                            <input
                                type="text"
                                name="phone"
                                value={forms.phone}
                                placeholder="Numéro de téléphone"
                                onChange={changeHandler}
                                disabled={isSubmitting}
                            />
                            {validator.message('phone', forms.phone, 'required|phone')}
                        </div>
                    </div>
                    <div className="col col-lg-12 col-12">
                        <div className="form-field">
                            <select
                                name="subject"
                                value={forms.subject}
                                onChange={changeHandler}
                                disabled={isSubmitting}
                            >
                                <option value="">Choisir un service</option>
                                <option value="Développement Web">Développement Web</option>
                                <option value="Jeux Vidéo">Jeux Vidéo</option>
                                <option value="Mobile">Mobile</option>
                            </select>
                            {validator.message('subject', forms.subject, 'required')}
                        </div>
                    </div>
                    <div className="col col-lg-12 col-12">
                        <textarea
                            name="message"
                            value={forms.message}
                            placeholder="Message"
                            onChange={changeHandler}
                            disabled={isSubmitting}
                        />
                        {validator.message('message', forms.message, 'required')}
                    </div>
                </div>
                <div className="submit-area">
                    <button 
                        type="submit" 
                        className="theme-btn"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                    </button>
                </div>
            </form>
        </>
    );
}

export default ContactForm;
