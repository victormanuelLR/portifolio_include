import "../stylesheets/hero.css"

export default function Hero() {
    return (
        <section id="hero">
            <div>
                <h1>Victor Manuel</h1>
                <p>Estudante de Ciência da Computação na UFC de Russas, ingresso em 2026.2</p>
                <div className="tools">
                    <ul>
                        <li title="html"><img src="../hero/icons/html.png" alt="html-icon"  /></li>
                        <li><img src="../hero/icons/css.png" alt="css-icon" /></li>
                        <li><img src="../hero/icons/js.png" alt="java-script-icon" srcset="" /></li>
                        <li><img src="../hero/icons/nodejs.png" alt=""></img></li>
                        <li><img src="../hero/icons/c.png" alt="C-programing-language-icon" srcset="" /></li>
                        <li><img src="../hero/icons/git.png" alt="git-icon" srcset="" /></li>
                        <li><img src="../hero/icons/github.png" alt="github-icon" srcset="" /></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}