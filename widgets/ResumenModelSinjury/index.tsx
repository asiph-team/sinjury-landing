import FirstRow from "./firstRow"
import SecondRow from "./secondRow"
import Image from 'next/image'
import areas from "../../public/assets/img/areas.png"
import action_plans from "../../public/assets/img/action_plans.png"
import activities from "../../public/assets/img/sinjury-app-detail.png"

import employees from "../../public/assets/img/employees.png"
import indicadorGlobal from "../../public/assets/img/indicador_global.png"
import vigilancia_medica from "../../public/assets/img/medica.png"
import supervisor from "../../public/assets/img/supervision.png"
import training from "../../public/assets/img/trainings.png"
import workstation from "../../public/assets/img/workstation.png"
import { AnimationOnScroll } from "react-animation-on-scroll"
import Link from "next/link"


interface Props {
  title: string;
}

const ResumenModelSinjury = ({ title }: Props) => {
  return (
    <section className="bg-white py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <div className="my-10">
          <div className="w-full mb-4">
          </div>
          <div className='p-3  text-gray-600 mb-8 mt-5'>

          </div>

        </div>
        <h1 className="w-full my-2 mt-5 text-4xl font-bold leading-tight text-center text-gray-800">
          Administra
        </h1>

        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>
        <FirstRow
          title="Áreas de trabajo"
          descriptions={[
            'Crea y gestiona las áreas de trabajo de tu empresa',
            'Asigna un responsable',
            'Vincula tus áreas de trabajo con sectores y procesos relevantes, variables críticas de calidad, medioambiente, riesgos de seguridad, u otro aspecto que consideres necesario',
          ]}
          footer=""
        >
          <Image
            priority={true}
            quality={10}
            src={areas}
          />
        </FirstRow>
        <SecondRow
          title="Puestos de trabajo"

          descriptions={[
            'Crea y gestiona los puestos de trabajo y vincúlalos a su área',
            'Agrega una descripción del cargo, funciones, responsabilidades, competencias necesarias y principales riesgos de exposición',
            'Agrega licencias requeridas, permisos, certificaciones, cursos, conocimientos',
          ]}
          footer=''
        >
          <Image
            priority={true}
            src={workstation}
          />
        </SecondRow>
        <FirstRow
          title="Trabajadores"
          descriptions={[
            'Crea y gestiona a tus trabajadores, asígnalos a sus puestos de trabajo y gestiona sus riesgos',
            'Disponibiliza la información de tus colaboradores como nombre, RUT, correo electrónico, dirección, teléfono de contacto, contacto de emergencia, estatura, talla, entre otros',
          ]}
          footer=""
        >
          <Image
            priority={true}
            src={employees}
          />
        </FirstRow>

        <SecondRow
          title="Inventario de riesgos de actividades"
          useShadow={false}
          descriptions={[
            'Crea actividades, asignando las medidas de control que el trabajador debe utilizar',
            'El trabajador debe seleccionar la actividad que va a realizar, para verificar de forma efectiva las medidas de control.',
            'El trabajador confirma el correcto inicio de su actividad, a través, de una firma digital',
            'Al supervisor se le notificará la actividad realizada, permitiendo dejar registro si las medidas de control fueron efectivas y utilizadas',
            'Se podrá evaluar el riesgo (alto, medio o bajo) de la actividad permitiendo alertar el estado de esta en el modulo de planes de acción',
            'El propio trabajador es quien evalúa el riesgo de su actividad, permitiendo alertar e informar, dejando registro de las medidas de control que fallan o que falten para mejorar el nivel de riesgo'
          ]}
          footer=""
        >
          <div className="w-3/5">
            <Image
              priority={true}
              src={activities}
            />
          </div>
        </SecondRow>
        <h1 className="w-full mt-20 my-2 text-4xl font-bold leading-tight text-center text-gray-800">
          Controla las medidas Prevención
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>

        <FirstRow
          title="Capacitaciones"
          descriptions={[
            'Crea las capacitaciones necesarias para que sus trabajadores adquieran los conocimientos, habilidades y experiencia que aseguren el desarrollo seguro de sus actividades',
            'Asigna a tus trabajadores las capacitaciones, seleccionar la frecuencia en que se debe realizar',
            'Visualiza las capacitaciones, fechas, participación de sus trabajadores, ausencias, cursos pendientes, entre otros',
          ]}
          footer=""
        >
          <Image
            priority={true}
            src={training}
          />
        </FirstRow>
        <SecondRow
          title="Vigilancia médica"

          descriptions={[
            'Crea y asigna los respectivos exámenes médicos necesarios para cada trabajador',
            'Agrega una descripción del motivo por el cuál el examen es necesario, trabajo en altura, espacios confinados, audiometrías, etc.',
            'Administra el cumplimiento de los programas de vigilancia médica por áreas, puestos de trabajo y trabajadores.',
          ]} footer=''
        >
          <Image
            priority={true}
            src={vigilancia_medica}
          />
        </SecondRow>

        <FirstRow
          title="Planes de acción"

          descriptions={[
            'Crear planes de acción, mejoras o proyectos',
            'Gestiona tus áreas de acción indicando responsables, prioridades y plazos',
            'Administra el cumplimiento de las distintas iniciativas provenientes de: Comités Paritarios, organismos administradores de la ley de accidentes del trabajo (mutualidades), entre otros.',
          ]}
          footer=""
        >
          <Image
            priority={true}
            src={action_plans}
          />
        </FirstRow>
        <SecondRow
          title="Supervisión"
          descriptions={[
            'Asigna la cantidad de acciones de supervisión en un mes',
            'Analiza el cumplimiento y efectividad de las medidas de control',
            'Visualiza las observaciones de actividades realizadas por la jefatura',
          ]}
          footer=""
        >
          <Image
            priority={true}
            src={supervisor}
          />
        </SecondRow>

        <h1 className="w-full my-2  mt-20  text-4xl font-bold leading-tight text-center text-gray-800">
          Desempeño Global
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>
        <div>
          <ul className="list-disc">
            <li className="text-gray-600 mb-5 mt-5">
              Evalúa el desempeño de la jefatura, en función del cumplimiento de los módulos de acción en un período de tiempo seleccionado.
            </li>
            <li className="text-gray-600 mb-5 mt-5">
              Evalúa el desempeño por cada área de trabajo y jefatura respectiva.
            </li>
            <li className="text-gray-600 mb-5 mt-5">
              Establece planes para la mejora del desempeño global de tu empresa.
            </li>
          </ul>
        </div>
        <div>
          <div className="flex w-full  justify-center items-center">
            <div className="w-4/5 p-6 mt-6">
              <AnimationOnScroll
                animateOnce={true}
                duration={0.5}
                animateIn="animate__slideInUp">
                <div className="shadow-2xl rounded-lg">


                  <Image
                    priority={true}
                    src={indicadorGlobal}
                  />
                </div>
              </AnimationOnScroll>
            </div>
          </div>
          <div className="w-full flex justify-center text-center">
            <Link href="/#contact">

              <button className="mx-auto lg:mx-0 hover:underline bg-primary-color text-white font-bold rounded-full my-6 py-4 px-20 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ">
                Contáctanos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumenModelSinjury
