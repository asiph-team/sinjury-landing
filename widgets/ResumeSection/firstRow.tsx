import { Children } from "react"
import { AnimationOnScroll } from 'react-animation-on-scroll';

interface Props {
  children: JSX.Element[] | JSX.Element,
  title: string,
  description: string,
  footer: string,
}
const firstRow = ({ title, description, footer, children }: Props) => {

  return (
    <AnimationOnScroll
    animateOnce={true}

      duration={0.5}
      animateIn="animate__fadeInLeft">
    <div className="flex flex-wrap  justify-center items-end">
      <div className="w-5/6 sm:w-1/2 p-6">

        <h3 className="text-3xl text-gray-800 font-bold leading-none">
          {title}
        </h3>
        <p className="text-gray-600 mb-8 mt-5">
          {description}
        </p>
      </div>
      <div className="w-full sm:w-1/2 p-6">
        {children}
      </div>
    </div>
    </AnimationOnScroll>
  )
}

export default firstRow
