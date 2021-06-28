import tour from "./Tour.module.css";

const Tour = ({id, image, amount, okrug, region}) => {
  return (
    <a href={`/tour/${id}`} className={tour.a}>
      <div className={tour.tour} style={{backgroundImage: `url(${image})`}}>
        <p className={tour.gps}>
          <i class="fas fa-map-marker-alt"></i>&nbsp;{`${amount} marshrutlar`}
        </p>
        <div className={tour.description}>
          <p className={tour.okrug}><i class="fas fa-map"></i>&nbsp;{`Okrug: ${okrug}`}</p>
          <p className={tour.region}><i class="far fa-compass"></i>&nbsp;&nbsp;{`Hudud: ${region}`}</p>
        </div>
      </div>
    </a>
  )
}

export default Tour;