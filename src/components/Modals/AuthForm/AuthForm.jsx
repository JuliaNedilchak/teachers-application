import { yupResolver } from '@hookform/resolvers/yup';
import css from './AuthForm.module.css';
import React from 'react'
import { useForm } from 'react-hook-form'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../../firebase';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/features/auth/authSlice';
import { setFavorites } from '../../../redux/features/favorites/favoriteSlice';

const schema=yup.object({
  email:
  yup.string().required('Email is required'),
  password:
  yup.string().required('password is required'),
});
const AuthForm = ({onClose}) => {

  const dispatch=useDispatch();

    const{
        register,
        handleSubmit,
        reset,
        formState:{errors},
    }=useForm({
      resolver: yupResolver(schema),
    });

    const onSubmit=async(data)=>{
      try{
        const userCredential=await 
        signInWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
       dispatch(setUser({
        email:
        userCredential.user.email,
        uid: 
        userCredential.user.uid,
       }));
       const uid=userCredential.user.uid;
       const savedFavorites= JSON.parse(localStorage.getItem(`favorites_${uid}`)) || [];
       dispatch(setFavorites(savedFavorites));
        reset();
        onClose();
      }
      catch(error){
        console.log(error.messsage);
      }
    }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Log in</h2>
        <p>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</p>
        <div className={css.credList}>
        <label>
          <input  className={css.label} name='email'{...register('email')} placeholder='email'/>
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label>
          <input  className={css.label}
            name='password' {...register('password')} placeholder='password'
          />
          {errors.password && <p>{errors.password.message}</p>}
        </label>
        </div>
        <button className={css.button} type='submit'>Log in</button>
      </form>
    </div>
  )
}

export default AuthForm
