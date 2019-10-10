import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const abrirMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

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
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/carrinho">Carrinho</Link>
      </section>
    </div>
  );
};
export default Navbar;
