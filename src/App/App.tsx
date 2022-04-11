import Grid from "./Grid"
import Header from "./Header"

function App() {
  return (  
    <div className="bg-black flex flex-col h-screen">
      <Header />
      <Grid nbPixels={84}/>
    </div>
  )
}

export default App
