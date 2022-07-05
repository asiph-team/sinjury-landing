import Link from 'next/link'
import { HeaderTitle } from '../../components/HeaderTitle'

interface Props {
  index: number
}
const PageHeader = ({index}:Props)  => {
  const onclickMenu = () => {
    const btn = document.getElementById('burger-button');
    const isActive = btn!.classList.contains("hidden");
    if(isActive){
      btn!.classList.remove('hidden');

    }
    else {
      btn!.classList.add('hidden');

    }
  }
  return (
    <nav id="header" className="fixed w-full z-30 top-0 gradient text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
            {/*Icon from: http://www.potlabicons.com/ */}
            Sinjury
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button
          onClick={onclickMenu}
          id="nav-toggle" className="flex items-center p-1 text-white hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div id="burger-button" className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 gradient lg:bg-transparent text-black p-4 lg:p-0 z-20" >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <HeaderTitle
              title='Inicio'
              route='/'
              isBold={index==1}
            />
            <li className="mr-3">
            <HeaderTitle
              title='Modelo Sinjury'
              route='/sinjury'
              isBold={index==2}
            />
            </li>
            
          </ul>
          <Link href="/#contact">
          <a  className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-2 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Solicita Tu Prueba
          </a>
          </Link>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  )


}

export default PageHeader
