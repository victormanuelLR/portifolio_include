import Card from "./Projects/card";

export default function Projects() {
  return (
    <section>
      <h2>Projects Page</h2>
      <Card title={"InteliAr"} imageSrc={"../projects/InteliAr.jpeg"} altText={"logo InteliAR"} description={"InteliAr é um projeto de monitoramento de presença humana para gerenciamento de ArCOndicionado"}/>
      <Card title={"Morsechat"} imageSrc={"../projects/Morsechat.png"} altText={"logo Morsechat"} description={"Morsechat é um projeto de chat em tempo real utilizando o código morse como forma de comunicação"}/>
      <Card title={"Terminal Chess"} imageSrc={"../projects/terminal_chess.png"} altText={"logo Terminal Chess"} description={"Terminal Chess é um projeto de jogo de xadrez jogado no terminal, desenvolvido em C"}/>
      
    </section>
  )
}


