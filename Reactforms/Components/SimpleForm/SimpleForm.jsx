import { useState } from 'react';

const SimpleForm = () => {
    // const [variable de estado ,funcion estado (habra un cambio)] = useState('') si esta vacio es que a penas va a guardar info
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log('Email: ', email,'Password: ', password)
    }

    return (<>
        <div>
    SimpleForm
      {/* VA TODO NUESTRO DISEÑO HTML */}
      {/* Paso #1: Crear el formulario base en JSX */}
      <div className='login'>
        <div className='login-container'>
     {/*    <img src={reactLogo} className="logo react" alt="React logo" />
           */}
          <form >
              {/* Paso #3: Guardo la información en el estado de */}
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              placeholder='correo@mail.com'
              id='simple-email'
              onChange={(event)=>(event.target.value)}
              value={email}
             
              
              />
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='simple-password'
              onChange={(event)=>(event.target.value)}
              value={password}
              
              />
            
            <button type='submit'>
              Iniciar Sesion
            </button>
            
          </form>
        </div>
      </div>
      </div></>
    );
}

export default SimpleForm