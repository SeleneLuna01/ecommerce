import React,{useState, useEffect} from "react"
import Loading from "../Components/Loading"
import Producto from "../Components/Productos"
import instance from "../Config/axios"
import firebase from '../Config/firebase'


function Home() {
    const first = {
        width: "100%",
        color: "white",
    }

    const [productos,setProductos] = useState([])
    const [loading,setLoading] = useState(true)


    useEffect(
        ()=>{
            /*instance.get("sites/MLA/search?category=MLA1055")
            .then(res=>{
                console.log(res)
                if(res.data.results){
                    setProductos(res.data.results)
                    setLoading(false)
                }
            })
            console.log("ya")*/

            async function request(){
                try{
                    const querySnapshot = await firebase.db.collection("productos")
                    .get()
                    if(querySnapshot.docs){
                        setProductos(querySnapshot.docs)
                        setLoading(false)
                    }
                }catch(e){

                }
                
            }
            request()
            
        },[]
    )

    return (
        <Loading active={loading}>
            <>    
                <h1 style={first}>Listado de productos</h1>
                {productos.map(producto=><Producto datos={{...producto.data(),id:producto.id}}/>)}    
            </>
        </Loading>    
    )       
}

export default Home;