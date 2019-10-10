import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const abrirMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  const fecharMenu = ()=>{
    setMenuAtivo(false)
  }

  return (
    <div className="Navbar">
      <nav>
        <div onClick={abrirMenu} id="menu-hamburguer">
          <span className={`${menuAtivo ? "sumir" : ""}`}></span>
          <span className={` ${menuAtivo ? "virar1" : ""}`}></span>
          <span className={` ${menuAtivo ? "virar2" : ""}`}></span>
        </div>
      </nav>
      <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
        <Link onClick={fecharMenu} to="/">Home</Link>
        <Link onClick={fecharMenu} to="/produtos">Produtos</Link>
        <Link onClick={fecharMenu} to="/cadastro">Cadastro</Link>
        <Link onClick={fecharMenu} to="/carrinho">Carrinho</Link>
      </section>
    </div>
  );
};
export default Navbar;
