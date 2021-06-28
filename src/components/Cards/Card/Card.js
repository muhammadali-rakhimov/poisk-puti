import card from "./Card.module.css";

const Card = ({image, title, description, id}) => {
    return (
        <div className={card.card}>
            <a href={`/card/${id}`} className={card.a}>
                <img src={image} alt="Avatar" className={card.image} />
                <div className={card.container}>
                    <h5>
                        <b>{title}</b>
                    </h5>
                    <p className={card.description}>{description}</p>
                </div>
            </a>
        </div>
    )
}

export default Card;