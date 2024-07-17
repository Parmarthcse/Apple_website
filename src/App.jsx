import Hero from "./Components/Hero"
import Highlights from "./Components/Highlights"
import Navbar from "./Components/Navbar"
import Model from './Components/Model'
import Feautures from "./Components/Feautures"
import HowItWorks from "./Components/HowItWorks"
import Footer from "./Components/Footer"
const App = ()  => {
 
  return (
   <main className="bg-black">
<Navbar />
<Hero />
<Highlights />
<Model />
<Feautures />
<HowItWorks />
<Footer />
   </main>
  )
    
}

export default App