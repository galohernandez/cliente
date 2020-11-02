import React, {useState} from 'react';
//5. importacion de link
import {Link} from 'react-router-dom'

const Login = () => {
    // 1: L1 creacion de state local para inicio se sesion

    const [usuario, guardarUsuario] = useState({
        email: '',
        password: '',
    })

    // 2: extracion de L1 de usuario, viene del form - value

    const{email, password} = usuario

    //3: guardar en el state la info del form. L1, obtencion de valores desde el form

    const onChange = (e)=>{
       guardarUsuario({
           ...usuario,
           [e.target.name]:e.target.value

       })
    }

    // 4: crar metodo submit que se activa desde el form

    const onSubmit = e => {
        e.preventDefault();
        //validar que no haya campos vacios

        //Pasarlo al action
    }


    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesion</h1>
                <form
                onSubmit={onSubmit}

                >
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
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesion"
                        />
                    </div>
                </form>
                {/*6. link a nueva-cuenta*/}

                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>

        </div>
    );
};

export default Login;
