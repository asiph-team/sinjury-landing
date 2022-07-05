import { AnimationOnScroll } from "react-animation-on-scroll"

interface Props {
    children: JSX.Element[] | JSX.Element,
    title: string,
    description: string,
    footer: string,
  }
const SecondRow = ( {title,description,footer,children}:Props) => {
    return (

    <AnimationOnScroll
    animateOnce={true}
    duration={0.5}
    animateIn="animate__fadeInRight">
        <div className="flex flex-wrap flex-col-reverse sm:flex-row items-center">
        <div className="w-full sm:w-1/2 p-6 mt-6">
            {children}
        </div>
        <div className="w-full sm:w-1/2 p-6 mt-6">
          <div className="align-middle">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              {title}
            </h3>
            <p className="text-gray-600 mb-8">
              {description}
            </p>
          </div>
        </div>
      </div>
      </AnimationOnScroll>
    )
  }
  
  export default SecondRow
  