import Style from './style.module.css';
import iconhtml from '../../assets/icons/icons8-html-5-480.png';
import iconcss from '../../assets/icons/icons8-css3-480.png';
import iconjs from '../../assets/icons/icons8-javascript-480.png';
import iconboot from '../../assets/icons/icons8-bootstrap-480.png';
import iconstyled from '../../assets/icons/styled-components-icon.png';
import iconreact from '../../assets/icons/icons8-reagir-480.png';
import iconmaterial from '../../assets/icons/material-ui-icon.png';

export const Skills = () => {


  return (
    <div className={Style.containerFour} id="Skills">
      <div className={Style.containergrid}>
        <img src={iconhtml} alt="Icon HTML" className={`${Style.icons}`} />
        <img src={iconcss} alt="Icon CSS" className={`${Style.icons}`} />
        <img src={iconjs} alt="Icon JavaScript" className={`${Style.icons}`} />
        <img src={iconreact} alt="Icon React" className={`${Style.icons}`} />
        <img src={iconboot} alt="Icon Bootstrap" className={`${Style.icons}`} />
        <img src={iconstyled} alt="Icon Styled-Componets" className={`${Style.icons}`} />
        <img src={iconmaterial} alt="Icon Material UI" className={`${Style.icons}`} />
      </div>

    </div>
  )
}
