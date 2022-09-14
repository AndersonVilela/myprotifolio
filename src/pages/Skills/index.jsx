import Style from './style.module.css';
import { useEffect, useState } from 'react';
import iconhtml from '../../assets/icons/icons8-html-5-480.png';
import iconcss from '../../assets/icons/icons8-css3-480.png';
import iconjs from '../../assets/icons/icons8-javascript-480.png';
import iconboot from '../../assets/icons/icons8-bootstrap-480.png';
import iconstyled from '../../assets/icons/styled-components-icon.png';
import iconreact from '../../assets/icons/icons8-reagir-480.png';
import iconmaterial from '../../assets/icons/material-ui-icon.png';

export const Skills = () => {

  const infoSkills = {
    html: 'A Linguagem de Marcação de Hipertexto (HTML) é a linguagem principal da web. Conhecida em inglês como Hypertext Markup Language, ela permite que os desenvolvedores desenhem como serão exibidos pelo navegador os elementos da página, como texto, hiperlinks e arquivos multimídia.',
    css: 'Ao falarmos sobre o que é CSS (Cascading Style Sheet, ou Folha de Estilo em Cascatas), é necessário dizer que sua aplicação é utilizada na estilização de componentes escritos em linguagens de marcação.',
    defaultText : '/*Coloque o mouse em um ícone*/',
    javascript : 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.',
    react : 'O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros. ',
    bootstrap: 'Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.',
    styledComponents : 'Basicamente, styled components é uma biblioteca que possibilita escrever códigos CSS dentro do JavaScript. Com ele, você pode criar websites bonitos e funcionais. Além disso, ganhar mais agilidade e precisão no desenvolvimento web.',
    materialUi : 'O Material-UI começou como uma implementação do React da especificação do Material Design do Google em 2014. O objetivo era simples, dar aos desenvolvedores do React o direito de usar o Material Design. A comunidade React está entusiasmada com os novos recursos, então a equipe do MUI continua adicionando-os.' 
  }

  const [teste, setTeste] = useState('/*Coloque o mouse ou clique em um ícone*/')
  return (
    <div className={Style.containerFour} id="Skills">
      <div className={Style.containergrid}>
        <img src={iconhtml} 
          alt="Icon HTML" 
          className={`${Style.icons}`} 
          onMouseEnter={() => setTeste(infoSkills.html)} 
          onMouseLeave={() => setTeste(infoSkills.defaultText)}
          onClick={() => setTeste(infoSkills.html)}
          />
        <img src={iconcss} 
          alt="Icon CSS" 
          className={`${Style.icons}`} 
          onMouseEnter={() => setTeste(infoSkills.css)} 
          onMouseLeave={() => setTeste(infoSkills.defaultText)}
          onClick={() => setTeste(infoSkills.css)}
          />
        <img src={iconjs} 
          alt="Icon JavaScript" 
          className={`${Style.icons}`} 
          onMouseEnter={() => setTeste(infoSkills.javascript)} 
          onMouseLeave={() => setTeste(infoSkills.defaultText)}
          onClick={() => setTeste(infoSkills.javascript)}
          />
        <img src={iconreact} 
        alt="Icon React" 
        className={`${Style.icons}`} 
        onMouseEnter={() => setTeste(infoSkills.react)} 
        onMouseLeave={() => setTeste(infoSkills.defaultText)}
        onClick={() => setTeste(infoSkills.react)}
        />
        <img src={iconboot} 
          alt="Icon Bootstrap" 
          className={`${Style.icons}`} 
          onMouseEnter={() => setTeste(infoSkills.bootstrap)} 
          onMouseLeave={() => setTeste(infoSkills.defaultText)}
          onClick={() => setTeste(infoSkills.bootstrap)}
          />
        <img src={iconstyled} 
          alt="Icon Styled-Componets" 
          className={`${Style.icons}`} 
          onMouseEnter={() => setTeste(infoSkills.styledComponents)} 
          onMouseLeave={() => setTeste(infoSkills.defaultText)}
          onClick={() => setTeste(infoSkills.styledComponents)}
          />
        <img src={iconmaterial} 
          alt="Icon Material UI" 
          className={`${Style.icons}`} 
          onMouseEnter={() => setTeste(infoSkills.materialUi)} 
          onMouseLeave={() => setTeste(infoSkills.defaultText)}
          onClick={() => setTeste(infoSkills.materialUi)}
          />
      </div>
      <div className={Style.containertext}>
        <h3>Descrição:</h3>
        <span className={Style.espec}>{teste}</span>
      </div>

    </div>
  )
}
