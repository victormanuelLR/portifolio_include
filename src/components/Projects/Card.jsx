import "../../stylesheets/projects/cards.css";

export default function Card ({title, description, imageSrc, altText, cardColor}) {
    return (
        <div className="floppy-card" style={{backgroundColor: cardColor}}>
            <div className="floppy-shutter">
            </div>
            <div className="floppy-img">
                <img src={imageSrc} alt={altText} />
            </div>
            <div className="floppy-label">

                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}