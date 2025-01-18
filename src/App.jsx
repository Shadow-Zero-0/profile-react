
import Skills from './com/skills'
import './App.css'
import Header from './com/header'
import Home from './com/Home'
import Project from './com/project'

function App() {


  return (
    <div style={{
      backgroundColor:"#090917",
      minHeight: '100vh'
    }}>
 <Header/>
 <Home/>
 <Skills/>
 <Project/>
    </div>
  )
}

export default App
