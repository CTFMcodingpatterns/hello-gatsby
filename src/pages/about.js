import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
        <Link to="/">Home</Link> |
        <Link to="/contact/">Contact</Link> | 
        <Link to="/about/">About</Link>
        <Header headerText="about gatsby" phrase="is arbitrary" />
        <Header headerText="It's pretty cool" />
      {/* <h1>About Gatsby</h1> */}
      <p>Such wow. Very React.</p>
    </div>
  )
}