import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { Form } from 'react-router-dom';
function Addperson() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newperson, setnewperson] = useState({
    

        "numéro":"",
        "image":"",
        "nom et prénom":"",
        "num tél":"",
       
      })
    //   const dispatch = useDispatch();
  return (
    <div className='butadd'>
            <>
      <Button className='butadd2' variant="primary" onClick={handleShow}>
        Add person
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new person</Modal.Title>
        </Modal.Header>
 
        <input type='number' placeholder='entre numéro' required onChange={(e)=>setnewperson({...newperson, numéro:e.target.value})}/>
        <input type='text' placeholder='entre image' required onChange={(e)=>setnewperson({...newperson,image:e.target.value})}/>
        <input type='text' placeholder='entre nom et prénom' required onChange={(e)=>setnewperson({...newperson,"nom et prénom":e.target.value})}/>
        <input type='number' placeholder='entre num tél' required onChange={(e)=>setnewperson({...newperson,"num tél":e.target.value})}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default Addperson