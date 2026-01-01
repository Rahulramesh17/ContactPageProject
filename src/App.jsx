import Navigation from "./Components/Navigation/Navigation"
import './App.css'
import Contactheader from "./Components/ContactHeader/Contactheader"
import Contactform from "./Components/ContactForm/Contactform"
function App() {
  return (
    <div>
      <Navigation/>
      <main className="main_container">
        <Contactheader/>
      <Contactform/>
      </main>
    </div>
  )
}

export default App
