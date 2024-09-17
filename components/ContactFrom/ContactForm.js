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
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage',
        messages: {
            required: 'Ce champ est requis.',
            alpha_space: 'Ce champ ne peut contenir que des lettres et des espaces.',
            email: 'Veuillez entrer une adresse e-mail valide.',
            phone: 'Veuillez entrer un numéro de téléphone valide.'
        }
    }));
    const [messageSent, setMessageSent] = useState(false);

    const changeHandler = e => {
        const { name, value } = e.target;
        setForms(prevForms => ({ ...prevForms, [name]: value }));
        validator.showMessageFor(name);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            emailjs
                .sendForm('service_g1j5rm5', 'template_912n5t8', form.current, 'GIlmZqVXwRtIsX_OQ')
                .then(
                    () => {
                        setForms({ name: '', email: '', phone: '', subject: '', message: '' });
                        setMessageSent(true);
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
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
                                onBlur={() => validator.showMessageFor('name')}
                                onChange={changeHandler}
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
                                onBlur={() => validator.showMessageFor('email')}
                                onChange={changeHandler}
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
                                onBlur={() => validator.showMessageFor('phone')}
                                onChange={changeHandler}
                            />
                            {validator.message('phone', forms.phone, 'required|phone')}
                        </div>
                    </div>
                    <div className="col col-lg-12 col-12">
                        <div className="form-field">
                            <select
                                name="subject"
                                value={forms.subject}
                                onBlur={() => validator.showMessageFor('subject')}
                                onChange={changeHandler}
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
                            onBlur={() => validator.showMessageFor('message')}
                            onChange={changeHandler}
                        />
                        {validator.message('message', forms.message, 'required')}
                    </div>
                </div>
                <div className="submit-area">
                    <button type="submit" className="theme-btn">Envoyer</button>
                </div>
            </form>
        </>
    );
}

export default ContactForm;
