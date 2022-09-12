import styles from './style.module.css';
import Logo from '../../assets/images/Logo4.png';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';


export const Header = () => {


  return (

    <div className={`${styles.Navbar} ${styles.fixed}`}>
      <div>
        <a href='#'>
          <img src={Logo} alt="Logo" title='Logo' className={styles.Logo} />
        </a>
      </div>

      <div>
        <ul className={styles.Refs}>
          <li><a href='#Start'>Começar</a></li>
          <li><a href='#Second'>Sobre</a></li>
          <li><a href='#Project'>Projetos</a></li>
          <li><a href='#Skills'>Habilidades</a></li>
        </ul>
      </div>
    </div>


  )
}
