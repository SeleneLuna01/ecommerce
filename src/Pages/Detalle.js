import React, {useState, useEffect} from "react"
import {useParams} from "react-router"
import instance from "../Config/axios"
import firebase from '../Config/firebase'
import ProductoDetalle from "../Components/ProductoDetalle/index"
import Loading from "../Components/Loading"

function Detalle() {
    const [producto,setProducto] = useState(false)
    const [loading,setLoading] = useState(true)
    const {id} = useParams()
    useEffect(
      ()=>{
        async function request(){
          try{
              const response = await firebase.db.doc("productos/"+id)
              .get()
              if(response){
                  setProducto(response)
                  setLoading(false)
              }
          }catch(e){

          }
          
      }
      request()
      },[id]
    )
  
    return (
      <Loading active={loading}>
        <>
        {
          producto &&
          <ProductoDetalle datos={producto.data()}/>
        }
          
        </>
      </Loading> 
        
    )  
    
}

export default Detalle;