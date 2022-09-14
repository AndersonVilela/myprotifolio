import Style from './style.module.css';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';


export const Footer = () => {

  return (
    <div className={Style.containerFooter}>
      <div className={Style.containerText}>
        <p className={Style.text}>E-mail: andersonvilela.al@gmail.com</p>
        <p className={Style.err}>Developed by Anderson Vilela</p>
        <p className={Style.text}>Imagem do south park: https://www.southparkstudios.com.br/info/lv0nha/avatar</p>
      </div>
      <div className={Style.containerIcons}>
        <a href="https://github.com/AndersonVilela" target="_blank"><BsGithub className={`${Style.icons} ${Style.animation}`} /></a>
        <a href="https://www.instagram.com/_lucas_vilela/" target="_blank"><BsInstagram className={`${Style.icons} ${Style.animation}`} /></a>
      </div>
    </div>
  )
}
