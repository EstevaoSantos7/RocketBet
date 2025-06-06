import { useState } from "react";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar'
import style from '../styles/detalhesSport.module.css'
import Rodape from "../components/Rodape";

import DetalheSport from "../components/DetalheSport";
import JogosVivo from "../dataAposta/users";
import { useParams } from "react-router-dom";



function DetalhesSport() {
    const {id} = useParams();

    const jogo  = JogosVivo.find(jogo => jogo.id === parseInt(id))

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={style.containerTudo}>
                <Header open={open} setOpen={setOpen} />
                <div className={style.containerDetalhes}>
                    <Sidebar open={open} />
                    <div className={style.conteudoDetalhes}>
                        <DetalheSport  jogo ={jogo} />
                        <Rodape/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetalhesSport;
