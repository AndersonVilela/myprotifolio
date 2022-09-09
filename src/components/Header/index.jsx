import styles from './style.module.css';
import Logo from '../../assets/images/Logo4.png';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';


export const Header = () => {


  return (

    <div className={styles.Navbar}>
      <div>
        <a href='#'>
          <img src={Logo} alt="Logo" title='Logo' className={styles.Logo} />
        </a>
      </div>

      <div>
        <ul className={styles.Refs}>
          <li><a href='#Start'>Start</a></li>
          <li><a href='#Second'>About Me</a></li>
          <li><a href='#Project'>Project</a></li>
          <li><a href='#Skills'>Skills</a></li>
        </ul>
      </div>
    </div>


  )
}
