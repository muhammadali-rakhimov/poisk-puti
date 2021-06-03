import cards from "./Cards.module.css";
import Card from "./Card/Card";

const Cards = () => {
    return (
        <div className={cards.cards}>
            <Card />
        </div>
    )
}

export default Cards
