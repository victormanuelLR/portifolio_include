import "../stylesheets/projects.css"
import Card from "./Projects/card";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projetos</h2>

      <div>
        <Card title={"InteliAr"} imageSrc={"../projects/InteliAr.jpeg"} altText={"logo InteliAR"} cardColor={"#1D87FF"} description={"InteliAr é um projeto de monitoramento de presença humana para gerenciamento de ArCOndicionado"}/>
        <Card title={"Morsechat"} imageSrc={"../projects/Morsechat.png"} altText={"logo Morsechat"} cardColor="#735345" description={"Morsechat é um projeto de chat em tempo real utilizando o código morse como forma de comunicação"}/>
        <Card title={"Terminal Chess"} imageSrc={"../projects/terminal_chess.png"} altText={"logo Terminal Chess"} description={"Terminal Chess é um projeto de jogo de xadrez jogado no terminal, desenvolvido em C"}/>

      </div>

    </section>
  )
}


