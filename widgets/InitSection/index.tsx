import mypic from '../../public/assets/img/sinjury-app.png'
import mypic2 from  '../../public/assets/img/sinjury-app-list.png'
import LeftContent from './leftContent'
import RightContent from './rigthContent'

const InitSection = () => {
  return (
    <div className="pt-24 gradient ">
      <div className="container px-3 mx-auto py-10 flex flex-wrap flex-col md:flex-row items-center">
        <LeftContent
          upperText=""
          mainText="SINJURY"
          bottomText="La solución móvil y web para Prevención de Riesgos"
          buttonText="Contáctanos" />
        <RightContent image={mypic} image2={mypic2} />
      </div>
    </div>
  )
}

export default InitSection
