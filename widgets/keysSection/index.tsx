import modelSinjury from '../../public/assets/img/modelo_sinjury.png'
import CardContainer from "./cardContainer"
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface Props {
  title: string,
}
const KeysSection = ({ title }: Props) => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto pt-4 pb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          {title}
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>
        <div className="w-full flex justify-center text-center">
          <div className='p-3 lg:w-6/12  sm:w-10/12  text-gray-600 mb-8 mt-5'>
            <label>El modelo Sinjury consiste en la utilización del inventario de riesgos como herramienta de gestión fundamental para la prevención eficaz de accidentes y enfermedades profesionales.
            </label>
          </div>
        </div>
        <div className="w-full flex justify-center text-center">

          <div className="lg:w-6/12 sm:w-10/12 h-auto object-fill rounded-lg">
            <Image
              src={modelSinjury}
            ></Image>
          </div>
        </div>
      </div>


      <div className="w-full flex justify-center text-center">
      <Link href="/sinjury">

        <button className="mx-auto lg:mx-0 hover:underline bg-primary-color text-white font-bold rounded-full my-6 py-4 px-20 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out ">
          Saber más
        </button>
        </Link>
      </div>


    </section >
  )
}

export default KeysSection
