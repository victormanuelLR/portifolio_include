import "../stylesheets/projects.css"
import CardComponent from "./Projects/Card";
import Card, {filter} from "../classes/Card"
import { useState } from "react";

const inteliAr = new Card(1,"InteliAr", "../projects/InteliAr.jpeg", "logo InteliAR", "#1D87FF", "InteliAr é um projeto de monitoramento de presença humana para gerenciamento de Ar-Condicionado", "https://github.com/diaslui/inteliAr",["todos", "web", "c"]);
const morseChat = new Card(2, "Morsechat", "../projects/Morsechat.png", "logo Morsechat", "#735345", "Morsechat é um projeto de chat em tempo real, utilizando o framework django", "https://github.com/victormanuelLR/capicord",["todos", "python", "web"]);
const chessTerminal = new Card(3, "chessTerminal", "../projects/Chess_Terminal.png", "logo Chess Terminal", null, "Chess Terminal é um projeto de jogo de xadrez jogado no terminal, desenvolvido em C", "https://github.com/victormanuelLR/chess_terminal",["todos", "c"]);


export default function Projects() {
  const filterKeys = Object.keys(filter);
  const [filtering, setfiltering] = useState(filterKeys[0]);
  const [whoIsChecked, setWhoIsChecked] = useState(0);
  const inputFilters = filterKeys.map((value, key) => {
    return (
  <li key={key}>
    <label htmlFor={"filter-input-" + key}>
      <input  type="radio" name="filter-input" id={"filter-input-" + key} checked={(key == whoIsChecked)} onChange={() => handleFilterClick(value, key)  }/>
      <span>{value}</span>
    </label>
  </li>)
  })
  let cards = [inteliAr, morseChat, chessTerminal];

  cards = cards.map(card => {
    if (card.tools[filtering])
      return (
        <CardComponent key={card.id} title={card.title} imageSrc={card.imageSrc} altText={card.altText} cardColor={card.cardColor} description={card.description} link={card.link}/>
      )

  })

  function handleFilterClick (typeFiltering, whichInput) {
    const whichFiltering = (filterKeys.includes(typeFiltering.toLowerCase()))? typeFiltering.toLowerCase() : filterKeys[0];
    setfiltering(whichFiltering);
    setWhoIsChecked(whichInput);
  }

  return (
    <section id="projects">
      <h2>Projetos</h2>
      <ul>
        {inputFilters}
      </ul>
      <div>
        {cards}

      </div>

    </section>
  )
}




