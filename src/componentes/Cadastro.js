import React, { useState, useEffect } from "react";
import Input from "./Input";

import "./Cadastro.scss";
import Botao from "./Botao";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      name: nome,
      email: email,
      confirm_email: confirmEmail,
      password: senha,
    }

    localStorage.setItem("Dados", JSON.stringify(payload));

    setNome("");
    setEmail("");
    setConfirmEmail("");
    setSenha("");
  };

  const [personagem, setPersonagem] = useState(1);

  const proximoPersonagem =()=>{

    if(personagem === 494){
      setPersonagem(1)
    }
    else{
      setPersonagem(personagem+1)};
    }

    useEffect(() => {
      
      fetch(`https://rickandmortyapi.com/api/character/${personagem}`, {
        method: "GET"
      }).then((result)=>{
        return result.json();
      }).then((data)=>{
      console.log(data)
    }).catch(()=>{
      console.error('ERRROOOOOOOOO')
    })
  }, [personagem])
  
  return (
    <div className="Cadastro">
      
    <Botao funcao={proximoPersonagem}>proximo</Botao>
      <h1>Faça seu cadastro</h1>
      <form onSubmit={handleSubmit}>
        <Input
          value={nome}
          type="text"
          label="Nome"
          placeholder="Nome completo"
          atualizarState={setNome}
          obrigatorio
        />
        <Input
          value={email}
          type="email"
          label="Email"
          placeholder="Digite seu email"
          atualizarState={setEmail}
        />
        <Input
          value={confirmEmail}
          type="email"
          label="Confirmar Email"
          placeholder="Confirme seu email"
          atualizarState={setConfirmEmail}
          obrigatorio
        />
        <Input
          value={senha}
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          atualizarState={setSenha}
          obrigatorio
        />
        <Botao>Cadastrar</Botao>
      </form>
    </div>
  );
}



export default Cadastro;