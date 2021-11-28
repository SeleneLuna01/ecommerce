import { useForm } from "react-hook-form"
import FormGroup from "../../Components/FormGroup"
import Button from 'react-bootstrap/Button'
import firebase from '../../Config/firebase'
import {useNavigate} from "react-router-dom"

function AltaProducto(){
    const center = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '540px'
    };
    const {register, handleSubmit, formState:{errors}} = useForm();
    const navigate = useNavigate()

    const onSubmit = async(data) => {
      console.log("data",data);
      try{
        const document = await firebase.db.collection("productos")
        .add(data)
        console.log(document)
        navigate("/")
      }catch(e){
        console.log("error",e.code)
        if(e.code=="auth/email-already-in-use"){
          alert("El producto ya existe")
        }
      }
    }
    return(
      <div style={center}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup label="Title" register={{...register("title", {required:true})}}/>
            {errors.nombre && <span>El campo es obligatorio</span>}
            <FormGroup label="Precio" register={{...register("price", {required:true})}}/>
            <FormGroup label="Cantidad disponible" type="number" register={{...register("available_quantity", {required:true})}}/>

            <Button type="submit" variant="primary">Guardar</Button>{' '}
        </form>
      </div>
    );

    }
export default AltaProducto;