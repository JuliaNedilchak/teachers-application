import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../../firebase';
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/features/auth/authSlice';
import { setFavorites } from '../../../redux/features/favorites/favoriteSlice';

const schema=yup.object({
  name:
  yup.string().required('name is required'),
  email:
  yup.string().email('Enter a valid email').required('Email is required'),
  password:
  yup.string().min(6, 'password must be at least 6 characters').required('password is required'),
});
const RegisterForm = ({onClose}) => {

  const dispatch= useDispatch();

    const{
        register,
        handleSubmit,
        reset,
        formState:{errors},
    }=useForm({
      resolver: yupResolver(schema),
    });

    const onSubmit=async(data)=> {
      try {
        const userCredential= 
        await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
       dispatch(
        setUser({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
        })
       );
       const uid=userCredential.user.uid;
       const savedFavorites=JSON.parse(localStorage.getItem(`favorites_${uid}`)) || [];
       dispatch(setFavorites(savedFavorites));
        reset();
        onClose();
      }
      catch(error){
        console.log(error.message);
      }
    }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>Registration</h2>
        <p>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information</p>
        <label>
          <input name='name'{...register('name')} placeholder='name'/>
          {errors.name && <p>{errors.name.message}</p>}
        </label>
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
        <button type='submit'>Registration</button>
      </form>
    </div>
  )
}

export default RegisterForm;
