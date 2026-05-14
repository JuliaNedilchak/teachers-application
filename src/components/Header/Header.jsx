import React, { useState } from 'react'
import ukraine from "../../images/ukraine.svg";
import css from "./Header.module.css";
import { Link, NavLink } from 'react-router-dom';
import login from "../../images/login.svg"
import BookingModal from '../Modals/BookingModal/BookingModal';
import AuthForm from '../Modals/AuthForm/AuthForm';
import RegisterForm from '../Modals/AuthForm/RegisterForm';
import {signOut} from 'firebase/auth';
import {auth} from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../redux/features/auth/authSlice';

const Header = () => {
 // const [isAuthOpen, setIsAuthOpen]=useState(false);
 const dispatch=useDispatch();
 const isLoggedIn=useSelector((state)=> state.auth.isLoggedIn);
 const user=useSelector((state)=>state.auth.user);
  const [authType, setAuthType]=useState(null);

  const handleLogout=async()=>{
    await signOut(auth);
    dispatch(clearUser());
  }
  return (
    <header className={css.header} >
    <div className={css.logo}>
        <img src={ukraine} alt="ukraine" width={28} height={28}/>
        <p className={css.logoText}>LearnLingo</p>
        </div>
        <nav className={css.navig}>
            <NavLink className={css.nav} to="/" end >Home</NavLink> 
            <NavLink  className={css.nav} to= '/teachers'>Teachers</NavLink>
            {isLoggedIn &&( <NavLink className={css.nav} to='/favorites'>Favorites</NavLink>)}
           
        </nav>
        <div className={css.auth}>
            <img src={login} alt="login sign"/>
            <div className={css.links}>
           {isLoggedIn ? (
            <div><span>{user?. email }</span>
            <button type='button' onClick={handleLogout}>Log out</button>
            </div>
           ) : (
            <div>
            <button type='button' onClick={()=>setAuthType('login')}>Log in</button>
            <button type='button' onClick={()=>setAuthType('register')}>Registration</button>
            </div>
           )}
            </div>
        </div>
        <BookingModal isOpen={Boolean(authType)}
        onClose={()=>setAuthType(null)}>
          {authType==='login' && (<AuthForm onClose={()=>setAuthType(null)}/>)}
           {authType==='register' && (<RegisterForm onClose={()=>setAuthType(null)}/>)}
        </BookingModal>
    </header>
  )
}

export default Header
