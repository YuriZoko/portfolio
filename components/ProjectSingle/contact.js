import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import SimpleReactValidator from 'simple-react-validator';

const Contact = () => {
    const form = useRef();
    const [forms, setForms] = useState({
        name: '',
        email: '',
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
            min: 'Ce champ doit contenir au moins :min caractères.',
            max: 'Ce champ ne peut contenir plus de :max caractères.',
            between: 'Ce champ doit contenir entre :min et :max caractères.',
            confirmed: 'Les mots de passe ne correspondent pas.'
        }
    }));

    const changeHandler = e => {
        const { name, value } = e.target;
        setForms(prevForms => ({ ...prevForms, [name]: value }));
    };

    const submitHandler = e => {
        e.preventDefault();

        if (validator.allValid()) {
            setIsSubmitting(true);
            emailjs
                .sendForm('service_g1j5rm5', 'template_912n5t8', form.current, 'GIlmZqVXwRtIsX_OQ')
                .then(
                    () => {
                        setForms({
                            name: '',
                            email: '',
                            subject: '',
                            message: ''
                        });
                        setMessageSent(true);
                        validator.hideMessages();
                        setIsSubmitting(false);
                    },
                    error => {
                        console.log('FAILED...', error.text);
                        setIsSubmitting(false);
                    }
                );
        } else {
            validator.showMessages();
            setForms({ ...forms });
        }
    };

    return (
        <>
            {messageSent && <p className="confirmation-message">Votre message a été envoyé avec succès !</p>}

            <form ref={form} onSubmit={submitHandler} className="contact-validation-active">
                <div className="row">
                    <div className="col col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input
                                className="form-control"
                                value={forms.name}
                                type="text"
                                name="name"
                                onChange={changeHandler}
                                placeholder="Votre nom"
                                disabled={isSubmitting}
                            />
                            {validator.message('name', forms.name, 'required|alpha_space')}
                        </div>
                    </div>
                    <div className="col col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input
                                className="form-control"
                                value={forms.email}
                                type="email"
                                name="email"
                                onChange={changeHandler}
                                placeholder="Votre E-mail"
                                disabled={isSubmitting}
                            />
                            {validator.message('email', forms.email, 'required|email')}
                        </div>
                    </div>
                    <div className="col col-lg-12 col-12">
                        <div className="form-field">
                            <select
                                className="form-control"
                                name="subject"
                                value={forms.subject}
                                onChange={changeHandler}
                                disabled={isSubmitting}
                            >
                                <option value="">Choisir un service</option>
                                <option value="Développement Web">Développement Web</option>
                                <option value="Jeux Vidéo">Jeux Vidéo</option>
                                <option value="Marketing">Marketing</option>
                            </select>
                            {validator.message('subject', forms.subject, 'required')}
                        </div>
                    </div>
                    <div className="col fullwidth col-lg-12">
                        <textarea
                            className="form-control"
                            name="message"
                            value={forms.message}
                            onChange={changeHandler}
                            placeholder="Message"
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

export default Contact;