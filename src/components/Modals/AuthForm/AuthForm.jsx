import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../../firebase';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/features/auth/authSlice';

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
       }))
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
        <label>
          <input name='email'{...register('email')} placeholder='email'/>
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label>
          <input
            name='password' {...register('password')} placeholder='password'
          />
          {errors.password && <p>{errors.password.message}</p>}
        </label>
        <button type='submit'>Log in</button>
      </form>
    </div>
  )
}

export default AuthForm
