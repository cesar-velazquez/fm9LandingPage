import './App.css'
import Advantages from './components/Advantages'
import Body from './components/Body'
import Comments from './components/Comments'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Productive from './components/Productive'

function App() {


  return (
    <main className='bg-DarkBlueMainBackGround min-h-screen '>
    <section className=' sm:max-w-[1200px] sm:m-auto'>
    <Header/>
    <Body/>
    <Advantages/>
    <Productive/>
    <Comments/>
    <Contact/>
    <Footer/>
    </section>
    </main>
  )
}

export default App
