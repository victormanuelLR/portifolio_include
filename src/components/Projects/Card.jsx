export default function Card ({title, description, imageSrc, altText}) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <img src={imageSrc} alt="" />
            <p>{description}</p>
        </div>
    )
}