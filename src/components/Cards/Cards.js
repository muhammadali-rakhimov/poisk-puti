import cards from "./Cards.module.css";
import Card from "./Card/Card";
import card1 from "../../images/oqsaroy.jpg";
import card2 from "../../images/registon.jpg";
import card3 from "../../images/registon2.jpg";
import card4 from "../../images/uzb.jpg";
import card5 from "../../images/new1.jpg";

const Cards = () => {
    return (
        <div className={cards.cards}>
            <Card image={card1} title={"Oqsaroy"} description={"lorem epfiwhfowhepfhewpfojwpjef"} />
            <Card image={card2} title={"Oqsaroy"} description={"lorem epfiwhfowhepfhewpfojwpjef"} />
            <Card image={card3} title={"Registon"} description={"lorem epfiwhfowhepfhewpfojwpjef"} />
            <Card image={card4} title={"Oqsaroy"} description={"lorem epfiwhfowhepfhewpfojwpjef"} />
            <Card image={card5} title={"Oqsaroy"} description={"lorem epfiwhfowhepfhewpfojwpjef"} />
        </div>
    )
}

export default Cards;