import { Children } from "react"
interface Props {
  children: JSX.Element[] | JSX.Element,
  title: string,
  descriptions: string[],
  footer: string,
}
const firstRow = ({ title, descriptions, footer, children }: Props) => {

  return (
    <div className="flex flex-wrap  justify-center items-end">
      <div className="w-5/6 sm:w-5/12 p-3">

        <h3 className="text-3xl text-gray-800 font-bold leading-none">
          {title}
        </h3>
        <ul className="list-disc">
          {descriptions.map(function (description, i) {
            return <li className="text-gray-600 mb-5 mt-5" key={i}>
              {description}

            </li>;
          })}

        </ul>
      </div>
      <div className="w-full sm:w-7/12 p-3">
      <div  className="shadow-2xl rounded-lg">

        {children}
        </div>
      </div>
    </div>
  )
}


export default firstRow
