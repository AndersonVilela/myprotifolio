import Styles from './styles.module.css';
import Image from '../../assets/images/Foto.png';

export const Start = () => {


  return (
    <div className={Styles.Container} id="Start">
      <div className={Styles.esquerda}>
        <h2 className={Styles.Second}>Olá, eu sou</h2>
        <h1 className={`${Styles.typing} ${Styles.animation} `}>Anderson Vilela :)</h1>
        <h2 className={Styles.Second}>Desenvolvedor Front-end</h2>
      </div>
      <div className={Styles.direita}>
        <img src={Image} />

      </div>
    </div >
  )
}
