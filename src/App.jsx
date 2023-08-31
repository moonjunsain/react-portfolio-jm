import { Outlet } from 'react-router-dom'
import Header from './componenets/Header'
import Footer from './componenets/Footer'

function App() {
  return(
    <>
      <Header/>
      <main className='main-background'>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
