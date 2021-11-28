import React, {useState, useEffect} from "react"
import {useParams} from "react-router"

import firebase from '../../Config/firebase'
import Button from 'react-bootstrap/Button'
import {useForm} from "react-hook-form"
import FormGroup from "../../Components/FormGroup"
import {useNavigate} from "react-router-dom"
import Loading from "../../Components/Loading"

function ModificarProducto() {
    const center = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '500px',
    }
    const {register, handleSubmit, formState:{error}, setValue} = useForm();
    const navigate = useNavigate()

    const onSubmit = async (data) => {
      console.log("data", data);
      try{
        const document = await firebase.db.doc("productos/"+id)
        .set(data)
        console.log("modificar",document)
        navigate("/")
      }catch(e){
        console.log("error",e.code)
        if(e.code=="auth/email-already-in-use"){
          alert("El email esta registrado")
        }
      }
    }

    const [loading,setLoading] = useState(true)
    const {id} = useParams()
    useEffect(
      ()=>{
        async function request(){
          try{
              const response = await firebase.db.doc("productos/"+id)
              .get()
              if(response){
                  setLoading(false)

                  setValue("title", response.data().title)
                  setValue("price", response.data().price)
                  setValue("available_quantity", response.data().available_quantity)
              }
          }catch(e){

          }
          
      }
      request()
      },[id]
    )
    const handleDelete = async ()=>{
      try{
        const document = await firebase.db.doc("productos/"+id)
        .delete()
        console.log(document)
        navigate("/")
      }catch(e){

      }
    }
   
    return (
      <Loading active={loading}>
         <> 
            <div style={center}>
              <form onSubmit={handleSubmit(onSubmit)}>
                  <FormGroup label="Nombre" register={{...register("title", {required:true})}}/>
                  <FormGroup label="Precio" register={{...register("price", {required:true})}}/>
                  <FormGroup label="Cantidad disponible" type="number" register={{...register("available_quantity", {required:true})}}/>

                  <Button type="submit" variant="primary">Guardar</Button>{' '}
               </form>
            </div>
             
            <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
          </>
      </Loading>
     
    )
    
}

export default ModificarProducto;