import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Separator } from '../components/Separator'
import mypic from '../public/assets/img/hero.png'
import InitSection from '../widgets/InitSection'
import PageFooter from '../widgets/pageFooter'
import PageHeader from '../widgets/pageHeader'
import ResumenSection from '../widgets/ResumeSection'

const Sinjury: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div>
        <PageHeader></PageHeader>
        <ResumenSection />
        <Separator />
        <PageFooter></PageFooter>

      </div>

    </div>
  )
}

export default Sinjury
