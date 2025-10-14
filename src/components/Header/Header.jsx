import React from 'react'
import ukraine from "../../images/ukraine.svg";
import css from "./Header.module.css";
import { Link, NavLink } from 'react-router-dom';
import login from "../../images/login.svg"

const Header = () => {
  return (
    <header className={css.header} >
    <div className={css.logo}>
        <img src={ukraine} alt="ukraine" width={28} height={28}/>
        <p>LearnLingo</p>
        </div>
        <nav className={css.navig}>
            <NavLink className={css.nav} to="/" end >Home</NavLink> 
            <NavLink  className={css.nav} to= '/teachers'>Teachers</NavLink>
        </nav>
        <div className={css.auth}>
            <img src={login} alt="login sign"/>
            <div className={css.links}>
            <Link className={css.authorize} to="/login">Log in</Link>
            <Link  className={css.authorize}  to="/registration">Registration</Link>
            </div>
        </div>
    </header>
  )
}

export default Header
