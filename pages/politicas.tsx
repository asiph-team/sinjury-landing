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
          <h1 className="text-4xl font-extrabold leading-7 text-white tracking-tight sm:text-5xl">{t('common:politics.title')}</h1>
          <p className="py-2 text-base text-gray-200 leading-7">{t('common:politics.last_update')}</p>
        </div>
      </div>
      <div className="relative p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-lg mb-16 prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
          <p>{t('common:politics.par_1')}</p>
          <p>{t('common:politics.par_2')}</p>
          <p>{t('common:politics.par_3')}</p>
          <p className="font-bold">{t('common:politics.info_collection.title')}</p>
          <p>{t('common:politics.info_collection.par_1')}</p>
          <p className="font-bold">{t('common:politics.log_data.title')}</p>
          <p>{t('common:politics.log_data.par_1')}</p>
          <p className="font-bold">{t('common:politics.cookies.title')}</p>
          <p>{t('common:politics.cookies.par_1')}</p> 
          <p>{t('common:politics.cookies.par_2')}</p> 
          <p className="font-bold">{t('common:politics.providers.title')}</p>
          <p>{t('common:politics.provider.par_1')}</p>
          <ul>
            <li>{t('common:politics.provider.list_1')}</li>
            <li>{t('common:politics.provider.list_2')}</li>
            <li>{t('common:politics.provider.list_3')}</li>
            <li>{t('common:politics.provider.list_4')}</li>
          </ul>
          <p>{t('common:politics.provider.par_2')}</p>
          <p className="font-bold">{t('common:politics.security.title')}</p>
          <p>{t('common:politics.security.par_1')}</p>
          <p className="font-bold">{t('common:politics.links.title')}</p>
          <p>{t('common:politics.links.par_1')}</p>
          <p className="font-bold">{t('common:politics.children.title')}</p>
          <div>
          <p>{t('common:politics.children.par_1')}</p>
          </div>
          <p className="font-bold">{t('common:politics.changes.title')}</p>
          <p>{t('common:politics.changes.par_1')}</p>
          <p>{t('common:politics.policy.effective')}</p>
          <p>{t('common:politics.policy.contact')}</p>
        </div>
      </div>
      <PageFooter />
    </section>
  );
}

export default Politicas;