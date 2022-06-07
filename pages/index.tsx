import type { NextPage } from 'next'
import {Separator, SeparatorBottom} from '../components/Separator'
import ContantSection from '../widgets/contactSection'
import InitSection from '../widgets/InitSection'
import KeysSection from '../widgets/keysSection'
import PageFooter from '../widgets/pageFooter'
import PageHeader from '../widgets/pageHeader'
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
        <ResumenSection
          title='Que es Sinjury'
        />
        <KeysSection
          title='Elmentos Clave'
        />
        <ResultSection
          title='Resultados Sinjury'
        />
        <SeparatorBottom />
        <ContantSection />
        <PageFooter />

      </div>

    </div>
  )
}

export default Home
