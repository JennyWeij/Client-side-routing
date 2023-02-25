import { Link } from "react-router-dom"

function App() {

  return (
    <div>
    <h1>Hello World</h1>
    <Link to="about">About Us</Link>
    <br />
    <Link to="pricing">Check out our pricing</Link>
  </div>
  )
}

export default App
