import { Space } from "antd"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Sidebar from "../components/Sidebar"


function App() {
  

  return (
    <main className="App">
     <Header/>
       <Space>
         <Sidebar/>
         <Hero/>
       </Space>
    </main>
  )
}

export default App
