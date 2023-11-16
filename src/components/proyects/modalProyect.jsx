import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { registerProject } from '../../utils/proyects';


export const ModalProyect = ({estado , cambiarEstado})=>{ 
  if(!estado) return ''
  const [nombre, setNombre] = useState('')
  const [tema, setTema] = useState('')
  const [apiKey, setApikey] = useState('')
  const [description, setDescription] = useState('')

  
  const handleNombre = (e) => {
    setNombre(e.target.value)
    console.log(nombre);
  }

  const handleTema = (e) => {
  setTema(e.target.value)
  console.log(tema);
  }

  const handleApikey = (e) => {
      setApikey(e.target.value)
      console.log(apiKey);
  }
  
  const handleDescription = (e) => {
      setDescription(e.target.value)
      console.log(description);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
        nombre,
        tema,
        apiKey,
        description
    }
    cambiarEstado()
    const res = await registerProject(data)
    console.log(data)
    console.log(res)
    window.location.reload(false);
  };
    return(
    <>

      <Modal show={estado} onHide={cambiarEstado}>
        <Modal.Header closeButton>
          <Modal.Title>Crear nuevo Proyecto de Innovacion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Nombre del proyecto</Form.Label>
              <Form.Control
                 onChange={(e) => handleNombre(e)}
                type="text"
                placeholder="Ingrese Nombre del Proyecto"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Tema</Form.Label>
              <Form.Control
                onChange={(e) => handleTema(e)}
                type="text"
                placeholder="Ingrese tema de su proyecto"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>ApiKey</Form.Label>
              <Form.Control
                onChange={(e) => handleApikey(e)}
                type="text"
                placeholder="Ingrese su API Key de Open AI"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                onChange={(e) =>handleDescription (e)}
                type="text"
                placeholder="Describe tu proyecto es opcional"
                autoFocus
              />
            </Form.Group>
          </Form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cambiarEstado}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={(e) => onSubmit(e)} >
            Guardar 
          </Button>
        </Modal.Footer>
      </Modal>
    </>

    )
}
