import mypic from '../../public/assets/img/hero.png'
import LeftContent from './leftContent'
import RightContent from './rigthContent'

const InitSection = () => {
  return (
    <div className="pt-24 gradient">
      <div className="container px-3 mx-auto  flex flex-wrap flex-col md:flex-row items-center">
        <LeftContent
          upperText="Sed ut perspiciatis unde omnis is"
          mainText="Lorem Ipsum"
          bottomText="ipsum quia dolor sit amet"
          buttonText="Contactanos" />
        <RightContent image={mypic} />
      </div>
    </div>
  )
}

export default InitSection
