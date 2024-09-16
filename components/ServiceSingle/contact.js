import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const Contact = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

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
        setForms({ ...forms, [e.target.name]: e.target.value });
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
            <div className="row">
                <div className="col col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                        <input
                            className="form-control"
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Votre nom" />
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
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Votre E-mail" />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <select className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.subject}
                            name="subject">
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
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.message}
                        name="message"
                        placeholder="Message">
                    </textarea>
                    {validator.message('message', forms.message, 'required')}
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn">Envoyer</button>
            </div>
        </form>
    );
}

export default Contact;
