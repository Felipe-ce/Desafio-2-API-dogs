import React, { useState } from "react";
import axios from "axios";
import Titulo from "./components/Titulo";


export default function App() {
  const [dog, setDog] = useState([]);

  //Retirar o alt da img
  const [imagemAparecendo, setImagemAparecendo] = useState(false);

  //para o botão
  function dogApi() {
    //passo pegar a API e exibe no console.log
    axios.get(`https://dog.ceo/api/breeds/image/random`).then((response) => {
      console.log(response);

      //chamar o setDog
      setDog(response.data.message);
      setImagemAparecendo(true);
    });
  }

  return (
    <>
      <Titulo texto='Ola, clique no botão e navegue pelos doguinhos' />
      <button className="btn"
        onClick={() => {
          dogApi();
        }}
      >
        Clica aqui{" "}
      </button>

      {/* 10º passo chamar o dog dentro da tag img */}
      {/* Envolver com {} pq ela vai ser uma condição mais de uma condição dentro*/}
      {imagemAparecendo && (
        <img style={{ width: "250px" }} src={dog} alt="imagem de doguinho" />
      )}
      {/* IMAGEMAPARECENDO LINHA 15 FALSE                  IMG TRUE */}
    </>
  );
}
