import React,{useState,useEffect} from "react"
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Producto(props) {
    const box = {
        display: 'inline-block',
        width: '100px',
        marginBottom: '5%',
        marginRight: '20%'
      }

      const button = {
        borderRadius: '15px',
        width: "100%",
        marginBottom: "10px"
    
      }

      const letter = {
        color: 'white',
        textDecoration: 'none'
      }

    const {datos} = props
    return (
      <>
        <div style={box}>
          <Card style={{ width: '18rem', backgroundColor: '#95c4de', border: '1px solid black', borderRadius: '15px'}}>
          <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>{datos.title}</Card.Title>
              <Card.Text>
                <p>$ {datos.price}</p>
                <p>Cantidad disponible: {datos.available_quantity}</p>
              </Card.Text>
              <Button variant="primary" style={button}><Link style={letter} to={"/producto/"+datos.id}>Detalle</Link></Button>
              <Button variant="primary" style={button}><Link style={letter} to={"/producto/modificar/"+datos.id}>Modificar</Link></Button>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
  
  export default Producto;