import React from 'react'
import './style.css'

export default function Portfolio() {
  return (
    <>
    <div className="page">
      <div className="começo">
        <h1>Desenvolvedor front-end</h1>
        <h4>Ubiraildo Lucas</h4>
      </div>
      <div className="container">
        <div className="image">
          <img
            src="https://midias.correiobraziliense.com.br/_midias/jpg/2023/07/11/1000x1000/1_manoel_gomes_1_76952-28482348.jpeg?20230711142508?20230711142508"
            alt="Descrição da imagem"
          />
        </div>
        <div className="text">
          <h4>Título do Texto</h4>
          <p>
            Este é o texto que ficará ao lado da imagem. Você pode adicionar
            qualquer conteúdo aqui, como parágrafos, listas, links, etc.
          </p>
        </div>
      </div>
    </div>
    </>

  )
}

