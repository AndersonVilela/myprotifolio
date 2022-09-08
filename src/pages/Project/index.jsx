import Style from './style.module.css';
import { BoxC } from '../../components/Box/';
import preview from '../../assets/images/previw.png';

export const Project = () => {



  return (
    <div className={Style.thirdPage} id="Project">
      <h2 className={Style.titleThird}>Project</h2>
      <div className={Style.containergrid}>
        <BoxC
          className={Style.grid}
          title='Github Profile'
          imageUrl='https://github.com/AndersonVilela/github-profile/blob/main/src/images-para-readme/profile1.PNG?raw=true'
          body='Colocando o nome de usuário do github retorna quantos seguindo, sequidores, e linguagens mais utilizadas.'
          direction='https://github.com/AndersonVilela/github-profile'
        />
      </div>
    </div>
  )
}
