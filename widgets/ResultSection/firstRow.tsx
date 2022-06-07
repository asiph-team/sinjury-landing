import { Children } from "react"
interface Props {
    children: JSX.Element[] | JSX.Element,
    title: string,
    description: string,
    footer: string,
  }
const firstRow = ( {title,description,footer,children}:Props) => {

    return (
        <div className="flex flex-wrap">
        <div className="w-5/6 sm:w-1/2 p-6">
          <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            {title}
          </h3>
          <p className="text-gray-600 mb-8">
            {description}
            <br />
            <br />
            <small>
            {footer}
            </small>
          </p>
        </div>
        <div className="w-full sm:w-1/2 p-6">
            {children}
        </div>
      </div>
    )
  }
  
  export default firstRow
  