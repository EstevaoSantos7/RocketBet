import { useState } from "react";
import Header from "../components/Header";
import Sidebar from '../components/Sidebar'
import SobreNos from '../components/SobreNos'
import style from '../styles/sobre.module.css'
import Rodape from '../components/Rodape'



function Sobre() {
    const [open, setOpen] = useState(false);

    return (
        <div className={style.containerTudo}>
            <Header open={open} setOpen={setOpen} />
            <div className={style.containerSobre}>
                <Sidebar open={open} />
                <div className={style.conteudoSobre}>
                    <SobreNos />
                    <Rodape/>
                </div>
              
            </div>
        </div>
    );
}


export default Sobre;
