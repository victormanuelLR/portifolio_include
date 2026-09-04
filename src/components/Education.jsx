import "../stylesheets/education.css"

export default function Education() {
  return (
    <section id="education">
      <h2>Formação</h2>
      <ul>
        <li>
            <h3>Universidade Federal do Ceará - Campus Russas</h3>
          <div>
            <img src="../education/ufc_russas.png" alt="" />
            <p>Atualmente onde estou cursando.</p>
          </div>
        </li>
        <li>
            <h3>Instituto Federal do Piauí - Campus SRN</h3>
          <div>
            <img src="../education/ifpi.png" alt="" />
            <p>Meu ensino médio foi feito em conjunto com um curso técnico em informática integrado. O IFPI é um lugar muito especial para mim, pois conheci pessoas incriveis e me trouxe uma perspectiva de vida maior.</p>
            </div>
          </li>
      </ul>
    </section>
  )
}