import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const NuevaCuenta = () => {


    //8. N1 creacion de state local para obtener cuenta
    const [usuario, guardarUsuario] = useState({
        nombre:'',
        email: '',
        password: '',
        confirmar: ''

    })

    // 9. extracion de N1 de usuario
    const{nombre, email, password, confirmar} = usuario

    //funcion onChange igual que Login.js para guardar en el state la info del form

    const onChange = (e)=>{
        // N1, obtencion de valores desde el form
        guardarUsuario({
            ...usuario,
            [e.target.name]:e.target.value

        })
    }

    // funcion submit igual que Login, control de sucesos cuando el user hace submit

    const onSubmit = e => {
        e.preventDefault();
        //validar que no haya campos vacios

        //Validar que password minimo sea de 6 caracteres

        //Validar que los dos passwords sean iguales

        //Pasarlo al action
    }


    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>
                <form
                onSubmit={onSubmit}
                >
                    {/*7. agregar campos para nombre, email, password y repetir password*/}

                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={nombre}
                            placeholder="Tu nombre"
                            onChange={onChange}

                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Tu email"
                            onChange={onChange}

                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Tu Password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            value={confirmar}
                            placeholder="Repite Password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrame"
                        />
                    </div>
                </form>
                {/*10. Modificacion de link para regrese al home*/}

                <Link to={'/'} className="enlace-cuenta">
                    Volver a iniciar sesion
                </Link>
            </div>

        </div>
    );
};

export default NuevaCuenta;
