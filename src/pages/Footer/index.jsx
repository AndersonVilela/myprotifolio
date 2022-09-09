import Style from './style.module.css';
import {BsGithub} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';


export const Footer = () => {

    return (
        <div className={Style.containerFooter}>
            <div>
                <p>E-mail: andersonvilela.al@gmail.com</p>
                <p>Developed by Anderson Vilela</p>
                <p>Imagem do south park: https://www.southparkstudios.com.br/info/lv0nha/avatar</p>
            </div>
            <div>
                <a  href="https://github.com/AndersonVilela" target="_blank"><BsGithub  className={`${Style.icons} ${Style.animation}`}/></a>
                <a  href="https://www.instagram.com/_lucas_vilela/" target="_blank"><BsInstagram  className={`${Style.icons} ${Style.animation}`} /></a>
            </div>
        </div>
    )
}