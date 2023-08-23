import React from 'react'
import { useForm } from '../Hooks/loginForm';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  
  const navigate = useNavigate();
  
  const {name, password, onInputChange, onResetForm} = 
    useForm({
      name: '',
      password:'',
    });

    const onLogin = (e) => {
      e.preventDefault() // Evita que el navegador haga acciones por defecto como recargar la pagina cuando enviamos el formulario
    
      navigate('/dashboard', {
        replace: true,
        state: {
          logged: true,
          name,
        },
      });
    
      onResetForm(); // Permite resetear el formulario de login
    };

  return (
    <div className='wrapper-login'>
			<form className='form-login' onSubmit={onLogin}>
				<h1 className='titles-login'>Iniciar Sesión</h1>

				<div className='input-group-login'>
				<label className='labels-login' htmlFor='name'>Nombre:</label>
					<input
						className='input-box-login'
						type='text'
						name='name'
						id='name'
						value={name}
						onChange={onInputChange}
						required
						autoComplete='off'
					/>
				</div>

				<div className='input-group-login'>
					<label className='labels-login' htmlFor='password'>Contraseña:</label>
					<input
						className='input-box-login'
						type='password'
						name='password'
						id='password'
						value={password}
						onChange={onInputChange}
						required
						autoComplete='off'
					/>
				</div>

				<button className='button-login'>Entrar</button>
			</form>
		</div>
	);
};