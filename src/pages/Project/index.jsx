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
        <BoxC
          className={Style.grid}
          title='Landing Page 2.0'
          imageUrl='https://github.com/AndersonVilela/landing-page2.0/blob/main/2022-09-14_12-18.png?raw=true'
          body='Uma landing Page de cafeteria para desenvolvedores.'
          direction='https://github.com/AndersonVilela/landing-page2.0'
        />
        <BoxC
          className={Style.grid}
          title='Crypto-App'
          imageUrl='https://github.com/AndersonVilela/crypto-App/blob/main/2022-09-14_12-17.png?raw=true'
          body='Uma aplicação em react utilizando uma api de crypto moedas.'
          direction='https://github.com/AndersonVilela/crypto-App'
        />
        <BoxC
          className={Style.grid}
          title='Pokedex2'
          imageUrl='https://github.com/AndersonVilela/pokedex2/blob/main/2022-09-14_12-20.png?raw=true'
          body='Uma aplicação inpirada em pokemon com a pokedex de alguns pokemons do desenho em rect.'
          direction='https://github.com/AndersonVilela/pokedex2'
        />
      </div>
    </div>
  )
}
