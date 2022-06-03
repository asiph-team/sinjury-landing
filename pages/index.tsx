import type { NextPage } from 'next'
import {Separator, SeparatorBottom} from '../components/Separator'
import ContantSection from '../widgets/contactSection'
import InitSection from '../widgets/InitSection'
import KeysSection from '../widgets/keysSection'
import PageFooter from '../widgets/pageFooter'
import PageHeader from '../widgets/pageHeader'
import PlansSection from '../widgets/PlansSection'
import ResumenSection from '../widgets/ResumeSection'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div>
        <PageHeader />
        <InitSection />
        <Separator />

        <ResumenSection />

        <KeysSection />
        <PlansSection />
        <SeparatorBottom />
        <ContantSection />
        <PageFooter />

      </div>

    </div>
  )
}

export default Home
