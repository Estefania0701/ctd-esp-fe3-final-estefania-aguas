import React, {useState} from "react";


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

    const resetForm = () => {
        setUser({
            name: '',
            email: '',
            message: ''
        });
    }

    return (
        <>
            {!showForm && user ? (
                <p>Gracias por tu mensaje, {user.name}!</p>
            ) : (
                <>
                    <h2>Déjanos tus datos y te contactaremos</h2>


                    <form onSubmit={handleSubmit}>

                        <div>
                            <label htmlFor="name">Tu nombre:</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={user.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="question">Tu email:</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={user.email}
                                onChange={handleChange}
                            />
                        </div>


                        <div>
                            <label htmlFor="message">Tu mensaje:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={user.message}
                                onChange={handleChange}
                            />
                        </div>

                        <button>Enviar</button>
                    </form>

                    <button onClick={resetForm}>Borrar todo</button>
                </>
            )}

            {showErrorMessage ? (
                <p>Por favor, chequea que la información sea correcta' </p>
            ) : null}
        </>
    );
};

export default Form;
