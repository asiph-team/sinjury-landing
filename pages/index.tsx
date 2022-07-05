import type { NextPage } from 'next'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Separator, SeparatorBottom } from '../components/Separator'
import ContantSection from '../widgets/contactSection'
import InitSection from '../widgets/InitSection'
import KeysSection from '../widgets/keysSection'
import PageFooter from '../widgets/pageFooter'
import PageHeader from '../widgets/pageHeader'
import TestimonialsSection from '../widgets/PlansSection'
import PlansSection from '../widgets/PlansSection'
import ResultSection from '../widgets/ResultSection'
import ResumenSection from '../widgets/ResumeSection'

const Home: NextPage = () => {
  const pageIndex = 1;

  return (
    <div className="min-h-screen flex-col items-center justify-center py-2">
      <div>
        <PageHeader index={pageIndex} />
        <InitSection />
        <Separator
          colorPrimary='#1b5e7d'
          colorSecundary='#4a5593'
        />
        <div className="table-cell align-middle h-80">
          <div className='text-center px-10 font-bold text-gray-500 opacity-85'>
          <AnimationOnScroll
    animateOnce={true}
    duration={0.5}
    animateIn="animate__headShake">
                  <p className='text-3xl py-10 tracking-wide'>
              Plataforma web y aplicación móvil integradas para la prevención de riesgos de tu empresa, de una forma simple, ágil y eficaz
            </p>
            </AnimationOnScroll>
          </div>
        </div>
        <ResumenSection
          title='Beneficios'
        />
        <KeysSection
          title='Nuestro Modelo'
        />
        <SeparatorBottom />
        <ContantSection />
        <Separator
          colorPrimary='#1b5e7d'
          colorSecundary='#4a5593'
        />
        <PageFooter />

      </div>

    </div>
  )
}

export default Home
