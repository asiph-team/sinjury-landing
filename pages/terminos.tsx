import { useState } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import PageFooter from '../widgets/pageFooter'

export async function getStaticProps({ locale }:{locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

const Politicas = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white">
      <div className="px-4 sm:px-6 lg:px-8 gradient">
        <div className="relative mx-auto max-w-lg pt-20 text-center pb-24">
          <h1 className="text-4xl font-extrabold leading-7 text-white tracking-tight sm:text-5xl">{t('common:terms.title')}</h1>
          <p className="py-2 text-base text-gray-200 leading-7">{t('common:terms.last_update')}</p>
        </div>
      </div>
      <div className="relative p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-lg mb-16 prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
          <p>{t('common:terms.par_1')}</p>
          <p>{t('common:terms.par_2')}</p>
          <p>{t('common:terms.par_3')}</p>
          <p>{t('common:terms.par_4')}</p>
          <p>{t('common:terms.par_5')}</p>
          <p>{t('common:terms.par_6')}</p>
          <p>{t('common:terms.par_7')}</p>
          <p>{t('common:terms.par_8')}</p>

          <p className="font-bold">{t('common:terms.changes.title')}</p>
          <p>{t('common:terms.changes.par_1')}</p>
          <p>{t('common:terms.changes.effective')}</p>
          <p>{t('common:terms.changes.contact')}</p>
        </div>
      </div>
      <PageFooter />
    </section>
  );
}

export default Politicas;