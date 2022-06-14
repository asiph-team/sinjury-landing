import mypic from '../../public/assets/img/hero.png'
import LeftContent from './leftContent'
import RightContent from './rigthContent'

const InitSection = () => {
  return (
    <div className="pt-24 gradient ">
      <div className="container px-3 mx-auto  flex flex-wrap flex-col md:flex-row items-center">
        <LeftContent
          upperText="Gestión Digital"
          mainText="MODELO SINJURY 2"
          bottomText="La solución móvil y web para la prevención de riesgos"
          buttonText="Contactanos" />
        <RightContent image={mypic} />
      </div>
    </div>
  )
}

export default InitSection
