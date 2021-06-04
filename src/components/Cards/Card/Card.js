import card from "./Card.module.css";

const Card = ({image, title, description}) => {
    return (
        <div class={card.card}>
            <a href="" className={card.a}>
                <img src={image} alt="Avatar" className={card.image} />
                <div class={card.container}>
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