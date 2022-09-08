import Style from './style.module.css';
import Image from '../../assets/avatar.png';



export const About = () => {




  return (
    <div className={Style.secondPage} id="Second">
      <div className={Style.esquerdo}>
        <img src={Image} className={Style.avatar} />
      </div>
      <div className={Style.direito}>
        <h2 className={Style.Title}>About Me</h2>
        <h3 className={Style.sobre}>Olá, meu nome é Anderson Vilela e eu sou apaixonado
          por tecnologia que através do linux conheceu o mundo da programação.
          Estou disponível a vagas de estágio em desenvolvimento Front-end.
        </h3>
        <h3 className={Style.sobre}>
          Venho estudadando e entendendo cada vez mais tecnologias como ReactJS, Bootstrap, Material UI e etc.
        </h3>
      </div>
    </div>
  )
}
