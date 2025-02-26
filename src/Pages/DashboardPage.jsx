import React from 'react'
import Dashboard from '../Components/Dashboard'
import DashboardSecond from '../Components/DashboardSecond'
import MainDashboard from '../Components/MainDashboard'


function DashboardPage() {
  return (
    <>

   <div className='flex w-full'>
  <div className=''>
    <Dashboard />
  </div>
  <div className='flex-1'>
    <DashboardSecond />
    <MainDashboard />
  </div>
</div>
      
    </>
  )
}

export default DashboardPage
