{/* React is library for building user interfaces not an framework,
Library targets specific functionality, while framework provides a complete solution */}

import { useState } from "react"
import Footer from "./components/Footer.jsx"
import Card from "./components/Card.jsx"
import Navbar from "./components/Navbar.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="card 1" description="card 1 desc" />
        <Card title="card 2" description="card 2 desc" />
        <Card title="card 3" description="card 3 desc" />
        <Card title="card 4" description="card 4 desc" />
      </div>
      <Footer />
    </>
  )
}

export default App
