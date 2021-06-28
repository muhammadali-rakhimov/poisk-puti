import Guide from "./Guide/Guide";
import guides from "./Guides.module.css";
import guide1 from "../../images/oqsaroy.jpg";
import guide2 from "../../images/registon.jpg";
import guide3 from "../../images/registon2.jpg";
import guide4 from "../../images/oqsaroy_fon.jpg";
import guide5 from "../../images/new1.jpg";

const Guides = () => {
  return (
    <>
      <br />
      <h2 className={guides.title}>Ommabop yo'nalishlarga sayyohlik va sport yo'nalishlari</h2>
      <div className={guides.guides}>
        <Guide id={1} image={guide1} amount={56} okrug={"Janubiy"} region={"Shaxrisabz"} />
        <Guide id={2} image={guide2} amount={105} okrug={"Shimoliy"} region={"Yakkabog'"} />
        <Guide id={3} image={guide3} amount={32} okrug={"G'arbiy"} region={"Chiroqchi"} />
        <Guide id={4} image={guide4} amount={135} okrug={"Sharqiy"} region={"Nishon"} />
        <Guide id={5} image={guide5} amount={78} okrug={"Janubiy"} region={"Shaxrisabz"} />
      </div>
    </>
  )
}

export default Guides;