import "../stylesheets/hobbies.css"

export default function Hobbies() {
    return (
        <section id="hobbies">
            <h2>Hobbies</h2>
            <div >
                <div className="hobbies_block">
                    <h3>Jogos</h3>
                    <p>Provavelmente não teria me interessado tanto por programação se não fosse pelos jogos, já que o interresse nasceu por eu querer entender o que faz estes mundos fantásticos existirem.</p>
                </div>
                <div className="disco_block">
                    <img src="../hobbies/games/minecraft.png"></img>
                    <img src="../hobbies/games/sekiro.jpeg"></img>
                    <img src="../hobbies/games/dead-cells.jpg"></img>
                </div>
            </div>
            <div>
                <div className="hobbies_block">
                    <h3>Canais do Youtube</h3>
                    <p>Mesmo amando jogos, no dia a dia a coisa que mais faço é assistir canais do youtube, sem ter exatamente um critério, curto análises filósóficas sobre quadrinhos, conteúdo diverso sobre a cultura da internet, ou até mesmo vods de programação de um russo que fala inglês.</p>
                </div>
                <div className="disco_block">
                    <img src="../hobbies/youtube_channels/qns.png"></img>
                    <img src="../hobbies/youtube_channels/picini.png"></img>
                    <img src="../hobbies/youtube_channels/tsoding.png"></img>
                </div>
            </div>
        </section>
    )
}