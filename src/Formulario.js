import { useState } from "react";

export function Formulario() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [celular, setCelular] = useState("");
    const [mensaje, setMensaje] = useState("");

    //datos de la parte inferior
    function datos(nombre, apellido, correo, celular, mensaje) {
        return (
            <div className="datos">
                <p>{nombre ? `NOMBRE: ${nombre}` : ``}</p>
                <p>{apellido ? `APELLIDOS: ${apellido}` : ``}</p>
                <p>{correo ? `CORREO: ${correo}` : ``}</p>
                <p>{celular ? `CELULAR: ${celular}` : ``}</p>
                <p>{mensaje ? `MENSAJE: ${mensaje}` : ``}</p>
            </div>
        )
    }

    function validar(nombre, apellido, correo, celular, mensaje) {
        if (nombre.length === 0 || apellido.length === 0 || correo.length === 0 || celular.length === 0 || mensaje.length === 0) {
            return 'Completar datos';
        }
        if (celular.length !== 9) {
            return 'Numero de celular debe ser 9 digitos';
        }  
    }

    const mensajeError = validar(nombre, apellido, correo, celular, mensaje)
    const data = datos(nombre, apellido, correo, celular, mensaje)
    
    function limpiar() {
        setNombre("")
        setApellido("")
        setCorreo("")
        setCelular("")
        setMensaje("")
    }

    function enviarDatos(event) {
        event.preventDefault();
        event.target.reset();
    }

    return (
        <div className="container">
            <form className="formulario" onSubmit={enviarDatos}>
                <h1>Registrar persona</h1>
                <div className="grupo">
                    <span>Nombres:</span>
                    <input type="text" name="nombre" placeholder="Digitar tu nombre" onChange={ev => setNombre(ev.target.value)} />
                </div>
                <div className="grupo">
                    <span>Apellidos:</span>
                    <input type="text" name="apellido" placeholder="Digitar tu apellido"  onChange={ev => setApellido(ev.target.value)} />
                </div>
                <div className="grupo">
                    <span>Correo:</span>
                    <input type="email" name="correo" placeholder="Digitar tu correo"  onChange={ev => setCorreo(ev.target.value)} />
                </div>

                <div className="grupo">
                    <span>Celular:</span>
                    <input type="text" name="celular" placeholder="Digitar tu celular"  onChange={ev => setCelular(ev.target.value)} />
                </div>
                <div className="grupo">
                    <span>Mensaje:</span>
                    <textarea name="mensaje"  placeholder="Digitar el mensaje"  onChange={ev => setMensaje(ev.target.value)}></textarea>
                </div>
                <div className="error">
                    <p>{mensajeError}</p>
                </div>

                <div className="botones">
                    <button type="submit" className="enviar">Submit</button>
                    <button type="button" onClick={limpiar} >Reset</button>
                </div>
            </form>
            {data}
        </div>
    )
}