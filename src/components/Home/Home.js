import './Home.css'
import React from "react";
import {UserEntry} from "../UserEntry/UserEntry";

export const Home = () => {
    return(
        <div className="home-div">
            <p className="description">
                {/*<strong>The Game</strong> es un proyecto que quiere dar soporte a uno de los juegos más famosos*/}
                {/*del planeta. Si lo entendiste, lo entendiste. Lo que persigue es mejorar su*/}
                {/*jugabilidad y hacer que las personas que lo jueguen(si aún no lo conocías, ahora*/}
                {/*ya estás dentro... ;) ) estén más conectadas entre sí y tengan un lugar donde*/}
                {/*poder responder las preguntas que tanto te haces mientras juegas.*/}
                {/*<ul>*/}
                {/*    <li>- ¿Quién va ganando?</li>*/}
                {/*    <li>- ¿Cuántas veces he perdido?</li>*/}
                {/*    <li>- Etc...</li>*/}
                {/*</ul>*/}
                {/*Espero que os guste la idea y... solo una última cosa... <strong>Perdí ;D</strong>*/}
            </p>
            <UserEntry/>
        </div>
    );
}