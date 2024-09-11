import React, { useState } from "react";
import Message from "./Message";


const Form = () => {
    //Aqui deberan implementar el form completo con sus validaciones

    const [user, setUser] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [showForm, setShowForm] = useState(true);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (user.name.trim().length >= 5 && re.test(user.email)) {
            setShowForm(false);
            setShowErrorMessage(false);
            return;
        }
        setShowErrorMessage(true);
    }

    return (
        <>
            {!showForm && user ? (
                <Message text={`¡Gracias, ${user.name}! Te contactaremos cuanto antes vía mail.`} type="success" />
            ) : (
                <>
                    <h2>Diligencia el siguiente formulario:</h2>

                    <form onSubmit={handleSubmit}>

                        <div>
                            <label htmlFor="name">Tu nombre*</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Escribe tu nombre aquí"
                                value={user.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="question">Tu email*</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Escribe tu email aquí"
                                value={user.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="message">Tu mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Escribe tu mensaje aquí (opcional)"
                                value={user.message}
                                onChange={handleChange}
                            />
                        </div>

                        <button>Enviar</button>
                    </form>
                </>
            )}

            {showErrorMessage ? (        
                <Message text="Por favor, chequea que la información sea correcta." type="error" />
            ) : null}
        </>
    );
};

export default Form;
