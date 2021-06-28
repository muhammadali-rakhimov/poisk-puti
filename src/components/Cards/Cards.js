import cards from "./Cards.module.css";
import Card from "./Card/Card";
import card1 from "../../images/oqsaroy.jpg";
import card2 from "../../images/registon.jpg";
import card3 from "../../images/registon2.jpg";
import card4 from "../../images/oqsaroy_fon.jpg";
import card5 from "../../images/new1.jpg";

const Cards = () => {
    return (
        <div className={cards.cards}>
            <Card id={1} image={card1} title={"Oqsaroy"} description={"Oqsaroy — Shahrisabzdagi meʼmoriy yodgorlik"} />
            <Card id={2} image={card2} title={"Registon"} description={"Registon Samarqanddagi meʼmoriy yodgorlik"} />
            <Card id={3} image={card3} title={"Registon"} description={"Registon meʼmoriy yodgorlik"} />
            <Card id={4} image={card4} title={"Oqsaroy"} description={"Shahrisabzdagi meʼmoriy yodgorlik"} />
            <Card id={5} image={card5} title={"To'g' hududlari"} description={"Turli tog' hududlarida Dam olish maskanlari"} />
        </div>
    )
}

export default Cards;