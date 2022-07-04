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
          bottomText=""
          buttonText="Contactanos" />
        <RightContent image={model_sinjury} />
      </div>
      <div className='container px-3 mx-auto  pt-4 flex flex-wrap flex-col md:flex-row items-center'>
              <p className="leading-normal text-2xl mb-8 text-white">
              Nuestro modelo  mediante la interaccion de las diferentes entidades de la empresa poder, generar un analisis diario de la situacion global de la empresa
            en terminos de prevención
            </p>
                  </div>
    </div>
  )
}

export default InitModelSinjury
