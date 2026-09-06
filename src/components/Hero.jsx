import "../stylesheets/hero.css"

export default function Hero() {
    return (
        <section id="hero">
            <div>
                <h1>Victor Manuel</h1>
                <p>Estudante de Ciência da Computação na UFC de Russas, ingresso em 2026.2</p>
                    <ul className="tools">
                        <li className="tool">
                                <img src="../hero/icons/html5.svg" alt="html-icon"  title="html"/>
                        </li>
                        <li className="tool">
                                <img src="../hero/icons/css.svg" alt="css-icon" title="css"/>
                        </li>
                        <li className="tool">
                                <img src="../hero/icons/javascript.svg" alt="java-script-icon" title="java script"/>
                        </li>
                        <li className="tool">
                            <img src="../hero/icons/nodedotjs.svg" alt="nodejs-icon" title="nodejs"/>
                        </li>
                        <li className="tool">
                            <img src="../hero/icons/c.svg" alt="C-programing-language-icon" title="c"/>
                        </li>
                        <li className="tool">
                            <img src="../hero/icons/git.svg" alt="git-icon" title="git"/>
                        </li>
                        <li className="tool">
                            <img src="../hero/icons/github.svg" alt="github-icon" title="github"/>
                        </li>
                    </ul>
            </div>
        </section>
    )
}