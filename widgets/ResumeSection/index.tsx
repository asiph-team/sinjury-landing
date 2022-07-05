import FirstRow from "./firstRow"
import SecondRow from "./secondRow"
import centralPanel from '../../public/assets/svg/central_panel.svg'
import chart from '../../public/assets/svg/chart.svg'
import reduce_cost from '../../public/assets/svg/reduce_cost.svg'
import transformation from '../../public/assets/svg/transformation.svg'
import { AnimationOnScroll } from 'react-animation-on-scroll';

interface Props {
  title: string;
}

const ResumenSection = ({ title }: Props) => {
  return (
    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          {title}
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>
        <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}>
          <FirstRow
            title="Centro de control"
            description='Visualiza los indicadores de gestión de riesgo de manera simple y clara. Para tomar las decisiones necesarias en el momento requerido.'
            footer=""
          >
            <div className="py-3 px-5 my-2">
              <img className="object-cover h-65" src={centralPanel.src} ></img>
            </div>
          </FirstRow>
        </AnimationOnScroll>
        <SecondRow
          title="Evita multas y sanciones"
          description='Podrás responder de forma rápida y exitosa a fiscalizaciones, inspecciones y auditorías.'
          footer=''
        >
          <div className="">
            <img className="object-cover h-65" src={reduce_cost.src} ></img>
          </div>
        </SecondRow>
        <FirstRow
          title="Reduce costos directos"
          description='Mediante el modelo Sinjury podrás garantizar que tus trabjadores estén resguardados de accidentes y enfermedades profesionales.'
          footer=""
        >
          <div className="">
            <img className="object-cover h-65" src={chart.src} ></img>
          </div>
        </FirstRow>

        <SecondRow
          title="Transformación Digital"
          description='Evita el exceso de trabajo administrativo, elimina el uso del papel y utiliza un sistema 100% digital.'
          footer=""
        >
          <div className="">
            <img className="object-cover h-65" src={transformation.src} ></img>
          </div>
        </SecondRow>

      </div>
    </section>
  )
}


export default ResumenSection
