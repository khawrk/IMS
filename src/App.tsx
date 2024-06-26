import Header from './components/Header'
import Footer from './components/Footer'
import IMSLogo from './assets/IMS Logo.svg'
import './App.css'

function App() {


  return (
    <>
      <Header />
      <div className='w-full min-h-screen relative p-20 flex justify-center flex-col items-center'>
        <div className='flex justify-center py-[3rem] items-center w-[800px]'>
          <img src={IMSLogo} alt="IMS Logo" className='w-[100%]' />
        </div>
        <div>
          <h1 className='text-white font-bold text-[30px] font-philosophy'>“Igniting innovation and growth with specialized practice management solutions.”</h1>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
