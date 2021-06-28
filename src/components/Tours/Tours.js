import Tour from "./Tour/Tour";
import tours from "./Tours.module.css";
import tour1 from "../../images/registon2.jpg";
import tour2 from "../../images/oqsaroy_fon.jpg";
import tour3 from "../../images/oqsaroy.jpg";
import tour4 from "../../images/new1.jpg";
import tour5 from "../../images/registon.jpg";

const Tours = () => {
  return (
    <>
      <br />
      <h2 className={tours.title}>Qashqadaryoda faol sayohatlar</h2>
      <div className={tours.tours}>
        <Tour id={1} image={tour1} amount={56} okrug={"Janubiy"} region={"Shaxrisabz"} />
        <Tour id={2} image={tour2} amount={105} okrug={"Shimoliy"} region={"Yakkabog\'"} />
        <Tour id={3} image={tour3} amount={32} okrug={"G\'arbiy"} region={"Chiroqchi"} />
        <Tour id={4} image={tour4} amount={135} okrug={"Sharqiy"} region={"Nishon"} />
        <Tour id={5} image={tour5} amount={78} okrug={"Janubiy"} region={"Shaxrisabz"} />
      </div>
    </>
  )
}

export default Tours;