import { Link } from "react-router-dom"

interface Props {
    
}


const NavBar: React.FC<Props>  = () => {
    return (
      <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="about">About</Link>
    </nav>

    )
}
export default NavBar