import "../stylesheets/about.css"

export default function About() {
  return (
      <section id="about">

        <div className="about-content">
            <h2>Sobre Mim</h2>

            <p>
                Olá, sou Victor Manuel Leal Ribeiro, nasci em São Raimundo
                Nonato, Piauí, porém cresci em uma cidadezinha chamada Bonfim.
                O primeiro contato que tive com programação foi em 2023,
                quando ingressei no curso técnico integrado ao ensino médio
                do Instituto Federal do Piauí de São Raimundo Nonato.
                
                A partir desse momento me interessei pela área, e devo muito
                isso tanto aos meus professores quanto aos amigos que tive
                o prazer de conhecer nesse período.

                No momento busco compreender a amplitude do curso no geral,
                e, por esse mesmo motivo, nesse ano comecei a ler mais livros
                sobre a área.
            </p>
        </div>

        <img
            className="about-image"
            src="../about/eu.jpeg"
            alt="Foto de Victor Manuel"
        />

    </section>
  )
}