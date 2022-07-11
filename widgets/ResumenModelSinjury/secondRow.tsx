import { AnimationOnScroll } from "react-animation-on-scroll";

interface Props {
  children: JSX.Element[] | JSX.Element,
  title: string,
  descriptions: string[],
  footer: string,
  useShadow?: boolean,
}
const SecondRow = ({ title, descriptions, footer, children, useShadow = true }: Props) => {
  return (
    <div className="flex flex-wrap flex-col-reverse sm:flex-row items-center">
      <div className="w-full sm:w-1/2 p-6 mt-6">
      <AnimationOnScroll
    animateOnce={true}
    duration={0.5}
    animateIn="animate__fadeInLeft">
      <div className={useShadow ? "shadow-2xl rounded-lg": ""}>
        {children}
        </div>
        </AnimationOnScroll>
      </div>
      <div className="w-full sm:w-1/2 p-6 mt-6">
        <div className="align-middle">
          <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
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
      </div>
    </div>
  )
}

export default SecondRow
