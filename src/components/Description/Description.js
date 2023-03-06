import './Description.css';
import React from "react";
import {useNavigate} from "react-router-dom";

export const Description = () => {

    const navigate = useNavigate();

    const handleIdentify = () => {
        navigate('/login');
    }

    return(
        <div className="description">
            <button type="button" onClick={() => handleIdentify()}>Identifícate</button>
            <p>
                <strong>The Game</strong> es un proyecto que quiere dar soporte a uno de los juegos más famosos
                del planeta. Si lo entendiste, lo entendiste. Lo que persigue es mejorar su
                jugabilidad y hacer que las personas que lo jueguen(si aún no lo conocías, ahora
                ya estás dentro... ;) ) estén más conectadas entre sí y tengan un lugar donde
                poder responder las preguntas que tanto te haces mientras juegas.
            </p>
            <ul>
                <li>¿Quién va ganando?</li>
                <li>¿Cuántas veces he perdido?</li>
                <li>Etc...</li>
            </ul>
            <p>
                Espero que os guste la idea y...<br/>
                solo una última cosa...<br/>
                <strong>Perdí ;D</strong>
            </p>
        </div>
    );
}