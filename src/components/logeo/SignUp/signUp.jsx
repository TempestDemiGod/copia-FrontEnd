import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./signUp.css";
import { useState } from 'react';
import { registerUser } from '../../../utils/auth';

export const RegistroMain = () => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  const handleNombre = (e) => {
    setNombre(e.target.value)
    console.log(email);
  }

  const handleApellido = (e) => {
  setApellido(e.target.value)
  console.log(email);
  }

  const handleEmail = (e) => {
      setEmail(e.target.value)
      console.log(email);
  }
  
  const handlePassword = (e) => {
      setPassword(e.target.value)
      console.log(email);
  }

  const onSubmit = async (e) => {
      e.preventDefault();
      const data = {
          nombre,
          apellido,
          email,
          password
      }
      const res = await registerUser(data)
      console.log(data)
      console.log(res)
    };

  
    return (
    <>
        <section className="contenedor-form hola-02">
        <h1>Registrate Con Nosotros</h1>
        <hr />
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control onChange={(e) => handleNombre(e)}  type="Text" placeholder="Nombre" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Apellido</Form.Label>
        <Form.Control onChange={(e) => handleApellido(e)}  type="Text" placeholder="Apellido" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Correo</Form.Label>
        <Form.Control onChange={(e) => handleEmail(e)}  type="Text" placeholder="Correo" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Contraseña</Form.Label>
        <Form.Control onChange={(e) => handlePassword(e)}  type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" onClick={(e) => onSubmit(e)} type="submit">
        Registrate
      </Button>
    </Form>
        </section>
    </>
  );
};

  

 

