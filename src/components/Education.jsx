import "../stylesheets/education.css"

export default function Education() {
  return (
    <section id="education">
      <h2>Formação</h2>

      <ul>
        <li>
          <div className="education-card">
            <div className="education-icon">
              <img src="../education/ufc_russas.png" alt="Logo da UFC" />
            </div>

            <div className="education-info">
              <h3>Universidade Federal do Ceará - Campus Russas</h3>
              <p className="education-status">Em andamento</p>
              <p>
                Atualmente estou cursando Ciência da Computação na Universidade
                Federal do Ceará, Campus Russas.
              </p>
            </div>
          </div>
        </li>

        <li>
          <div className="education-card">
            <div className="education-icon">
              <img src="../education/ifpi.png" alt="Logo do IFPI" />
            </div>

            <div className="education-info">
              <h3>Instituto Federal do Piauí - Campus SRN</h3>
              <p className="education-status">Concluído</p>
              <p>
                Meu ensino médio foi feito em conjunto com um curso técnico em
                informática integrado. O IFPI é um lugar muito especial para mim,
                pois conheci pessoas incríveis e me trouxe uma perspectiva de vida
                maior.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}