import styles from './style.module.css';
import Logo from '../../assets/images/Logo4.png';
import { Link } from 'react-router-dom';


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
          <li><Link to='/'>Começar</Link></li>
          <li><Link to='/Sobre'>Sobre</Link></li>
          <li><Link to='/Projetos'>Projetos</Link></li>
          <li><Link to='/Habilidades'>Habilidades</Link></li>
        </ul>
      </div>
    </div>


  )
}
