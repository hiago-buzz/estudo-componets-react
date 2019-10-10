import React from 'react';
import Botao from './Botao';
import "./Home.scss";

const Home = () => {
    return (
        <div className="Banner">
            <header>
            </header>
                <Botao endereco="/cadastro">Comprar</Botao>
        </div>
    )
}

export default Home;