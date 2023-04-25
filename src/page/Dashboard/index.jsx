import React from 'react'
import ContentSection from '../../components/ContentSection'
import useDashboard from '../../hooks/useDashboard'
import SectionTotalBalance from '../../components/SectionBalance'
import CardResentActivity from '../../components/CardResentActivity'
import SectionChart from '../../components/SectionChart'
import SectionBalanceUser from '../../components/SectionBalanceUser'
import { data, options } from '../../Db/GraficaHome'
import './index.css'

export default function Dashboard () {
  const { coinActivitie, user } = useDashboard()
  return user
    ? <ContentSection>
      <div className='px-6 w-full h-min-[400px] relative'>
        <div className='grid md:grid-cols-3 grid-cols-1 w-full place-content-center'>
          <div className='min-h-[520px] col-span-2 flex flex-col sm:mr-5 mr-0'>
            <SectionBalanceUser user={user} />
            <SectionChart data={data} options={options} />
          </div>
          <div className='min-h-[520px] py-5 flex flex-col'>
            <SectionTotalBalance user={user} />
            <CardResentActivity coinActivitie={coinActivitie} />
          </div>
        </div>
      </div>
    </ContentSection>
    : null
}
