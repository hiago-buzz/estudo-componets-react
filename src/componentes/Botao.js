import React from 'react'
import {Link} from 'react-router-dom';
import "./Botao.scss"

const Botao = ({children, endereco, funcao}) => {
    
    return (
        <div className="Botao">
            {
                endereco ? <Link to={endereco}>
                <button onClick={funcao}>{children}</button>
                </Link> :
                 <button onClick={funcao}>{children}</button>
            }
            
        </div>
    )
}


export default Botao;