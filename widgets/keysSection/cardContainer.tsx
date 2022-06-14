import { Children } from "react"
interface Props {
  title: string,
  description: string,
  upper: string,
}
const CardContainer = ({ title, upper, description }: Props) => {

  return (
    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
      <div className="flex-1 pt-5 bg-white rounded-t rounded-b-none overflow-hidden shadow-xl">
        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
          <p className="w-full text-gray-600 text-xs md:text-sm px-6">
            {upper}
          </p>
          <div className="w-full font-bold text-xl text-gray-800 px-6">
            <div className="flex flex-wrap ">
              <div className="rounded-full w-2 h-2 bg-primary-color mt-2 mr-2"></div>
              <div> {title} </div>
            </div>
          </div>
          <p className="text-gray-600 text-base px-6 py-2 mb-5">
            {description}
          </p>
        </a>
      </div>
      <div className="flex-none mt-auto bg-primary-color rounded-b rounded-t-none overflow-hidden shadow p-[0.07em]">

      </div>
    </div>
  )
}

export default CardContainer
