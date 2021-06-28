import guide from "./Guide.module.css";

const Guide = ({id, image, amount, okrug, region}) => {
  return (
    <a href={`/guide/${id}`} className={guide.a}>
      <div className={guide.guide} style={{backgroundImage: `url(${image})`}}>
          <p className={guide.gps}>
            <i class="fas fa-map-marker-alt"></i>&nbsp;{`${amount} marshrutlar`}
          </p>
          <div className={guide.description}>
            <p className={guide.okrug}><i class="fas fa-map"></i>&nbsp;{`Okrug: ${okrug}`}</p>
            <p className={guide.region}><i class="far fa-compass"></i>&nbsp;&nbsp;{`Hudud: ${region}`}</p>
          </div>
      </div>
    </a>
  )
}

export default Guide
