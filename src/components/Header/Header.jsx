import React from 'react'
import ukraine from "../../images/ukraine.svg";
import css from "./Header.module.css";
import { NavLink } from 'react-router-dom';
import login from "../../images/login.svg"

const Header = () => {
  return (
    <header>
    <div className={css.logo}>
        <img src={ukraine} alt="ukraine" width={28} height={28}/>
        <p>LearnLingo</p>
        </div>
        <nav>
            <NavLink to="/" end >Home</NavLink> 
            <NavLink to= '/teachers'>Teachers</NavLink>
        </nav>
        <div>
            <img src={login} alt="login sign"/>
        </div>
    </header>
  )
}

export default Header
