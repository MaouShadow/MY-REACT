import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <section className="nav">
  <div className="home">
    <NavLink to="/" className="logo">
      MaouCodes
    </NavLink>
  </div>
  <div className="move">
    <NavLink to="/" className="break">
      Home
    </NavLink>
    <NavLink to="About">
      About
    </NavLink>
    <NavLink to="Experience">
      Experience
    </NavLink>
    <NavLink to="Contact">
      Contact
    </NavLink>
    <NavLink to="Resume" className="shadow__btn">
      <span className="id">Resume</span>
    </NavLink>
  </div>
</section>
  )
}

export default NavBar