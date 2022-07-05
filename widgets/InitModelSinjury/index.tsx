import model_sinjury from '../../public/assets/svg/model_sinjury.svg'
import LeftContent from './leftContent'
import RightContent from './rigthContent'



const InitModelSinjury = () => {
  return (
    <div className="mt-5 py-20  gradient ">
      <div className="container px-3 mx-auto  flex flex-wrap flex-col md:flex-row items-center">
        <LeftContent
          upperText=""
          mainText="Modelo Sinjury"
          bottomText="Mediante la interacción de las diferentes entidades de la empresa, genera un análisis diario de la situación global de tu empresa
          en términos de prevención."
          buttonText="Contactanos" />
        <RightContent image={model_sinjury} />
      </div>
    </div>
  )
}

export default InitModelSinjury
