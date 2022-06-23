import type { NextPage } from 'next'
import {Separator, SeparatorBottom} from '../components/Separator'
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
  return (
    <div className="min-h-screen flex-col items-center justify-center py-2">
      <div>
        <PageHeader />
        <InitSection />
        <Separator
          colorPrimary='#1b5e7d'
          colorSecundary='#4a5593'
        />
        <div className="table-cell  align-middle">
          <div className='text-center md:text-4xl  sm:text-lg px-10 py-50 font-bold text-gray-500 opacity-85'>
          <p className='tracking-wides'>
            "Sistema web y aplicativo movil integrado para la prevención de riesgos de tu empresa de una forma simple, ágil y eficaz"
          </p>
        </div>
        </div>
        <ResumenSection
          title='Beneficios'
        />
        <KeysSection
          title='Nuestro Modelo'
        />
        <TestimonialsSection />
    
        <SeparatorBottom />
        <ContantSection />
        <PageFooter />

      </div>

    </div>
  )
}

export default Home
