import React from 'react'
import Footer from './Footer'

const Navbar = (props) => {
  return (
    <div>
      {/* passing the props to the Navbar component */}
      <div className="logo">{props.logoText}</div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        <Footer/>
    </div>
  )
}

export default Navbar
