import type { NextPage } from 'next'
import { Separator } from '../components/Separator'
import InitModelSinjury from '../widgets/InitModelSinjury'
import InitSection from '../widgets/InitSection'
import PageFooter from '../widgets/pageFooter'
import PageHeader from '../widgets/pageHeader'
import ResumenModelSinjury from '../widgets/ResumenModelSinjury'
import ResumenSection from '../widgets/ResumeSection'

const Sinjury: NextPage = () => {
  const pageIndex = 2;
  return (
    <div className="min-h-screen flex-col items-center justify-center py-2">
      <div>
      <PageHeader index={pageIndex} />
        <InitModelSinjury />

        <Separator
          colorPrimary='#1b5e7d'
          colorSecundary='#4a5593'
        />
        <Separator colorPrimary={''} colorSecundary={''} />

        <ResumenModelSinjury title="Modelo Sinjury"/>
        <Separator colorPrimary={''} colorSecundary={''} />
        <PageFooter></PageFooter>

      </div>

    </div>
  )
}

export default Sinjury
