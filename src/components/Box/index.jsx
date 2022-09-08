import Style from './style.module.css';

export const BoxC = ({ title, imageUrl, body, direction }) => {


  return (

    <div className={Style.cardcontainer}>
      <div className={Style.imagecontainer}>
        <img src={imageUrl} alt='' />
      </div>
      <div className={Style.cardcontent}>
        <div className={Style.cardtitle}>
          <h3 className={Style.text}>{title}</h3>
        </div>
        <div className={Style.cardbody}>
          <p>{body}</p>
        </div>
      </div>

      <div className={Style.btn}>
        <button>
          <a href={direction} className={Style.link} >
            view more
          </a>
        </button>
      </div>

    </div >

  )
}
