import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Vishal")
  const [form, setForm] = useState({ email: "", phone: "" })
  // const [form, setForm] = useState({})

  const handleClick = () => {
    alert("Hey I am clicked")
  }

  const handleMouseOver = () => {
    alert("Hey I am a mouse over")
  }

  // const handleChange = (e) => {
  //   setName(e.target.value)
  // }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form)
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am a red div
      </div>  */}

      {/* <input type="text" name='email' value={form.email} onChange={handleChange} />  */}
      {/* it is controlled as it has value and onChange handler */}

      <input type="text" name='email' value={form.email ? form.email : ""} onChange={handleChange} />
      <input type="text" name='phone' value={form.phone ? form.phone : ""} onChange={handleChange} />

      <input type="text" value={name} onChange={handleChange} /> {/* it can't be changed as it is not controlled but you can change it by changing the state in the handleChange function */}
    </>
  )
}

export default App
