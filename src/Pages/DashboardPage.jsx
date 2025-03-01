
import Dashboard from '../Components/Dashboard'
import DashboardSecond from '../Components/DashboardSecond'
import MainDashboard from '../Components/MainDashboard'
import Footer from '../Components/Footer'


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
<Footer />
      
    </>
  )
}

export default DashboardPage
