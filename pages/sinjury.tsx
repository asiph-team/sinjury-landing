import type { NextPage } from 'next'
import { Separator } from '../components/Separator'
import PageFooter from '../widgets/pageFooter'
import PageHeader from '../widgets/pageHeader'
import ResumenSection from '../widgets/ResumeSection'

const Sinjury: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div>
        <PageHeader></PageHeader>
        <ResumenSection title={''} />
        <Separator colorPrimary={''} colorSecundary={''} />
        <PageFooter></PageFooter>

      </div>

    </div>
  )
}

export default Sinjury
