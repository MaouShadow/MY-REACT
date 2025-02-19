import { NavLink } from "react-router-dom"
import { Sun, MoonStars } from "@phosphor-icons/react";
import { useGlobalContext } from "../../src/context";

const NavBar = () => {
   const { theme, toggleTheme } = useGlobalContext();
console.log("Current Theme:", theme);

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
        <NavLink to="About">About</NavLink>
        <NavLink to="Experience">Experience</NavLink>
        <NavLink to="Contact">Contact</NavLink>
        <NavLink to="Resume" className="shadow__btn">
          <span className="id">Resume</span>
        </NavLink>
        <NavLink to="GithubUsers">Git Hub Users</NavLink>
        <NavLink to="Services">Services</NavLink>
      </div>
      <button
        onClick={toggleTheme}
        className="p-2 border rounded bg-gray-300 dark:bg-gray-700 flex items-center gap-2"
      >
        {theme === "dark" ? (
          <Sun size={24} weight="bold" />
        ) : (
          <MoonStars size={24} weight="bold" />
        )}
        {theme === "dark"}
      </button>
    </section>
  );
}

export default NavBar