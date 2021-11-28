import { useForm } from "react-hook-form"
import FormGroup from "../Components/FormGroup"
import Button from 'react-bootstrap/Button'
import firebase from '../Config/firebase';
import {useNavigate} from "react-router-dom"
import AlertCustom from "../Components/AlertCustom";
import {useState} from "react"

function Registro() {
  const[alert,setAlert] = useState({variant:"",text:""});

  const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '540px'
  };
 const { register, handleSubmit, formState:{errors} } = useForm();
 const navigate = useNavigate()
 const onSubmit = async (data) => {
    console.log(data);
    try{
      const responseUser= await firebase.auth.createUserWithEmailAndPassword(data.email,data.password)
      console.log("user", responseUser.user.uid)
      if (responseUser.user.uid){
        firebase.db.collection("usuarios")
        .add({
          nombre:data.nombre,
          apellido:data.apellido,
          userId:responseUser.user.uid
        })
        console.log("document",document)
      }
      navigate("/login")
    }catch(e){
      console.log("error", e)
      if(e.code=="auth/email-already-in-use"){
        setAlert({variant:"danger",text:"El email se encuentra registrado."});
      }
    }
  }
  return (
    <div style={center}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup label="Nombre" register={{...register("nombre", {required:true})}}/>
        {errors.nombre && <span>El campo es obligatorio</span>}
        <FormGroup label="Apellido" register={{...register("apellido", {required:true})}}/>
        {errors.apellido && <span>El campo es obligatorio</span>}
        <FormGroup label="Email" type="email" register={{...register("email", {required:true})}}/>
        {errors.email && <span>El campo es obligatorio</span>}
        <FormGroup label="Contraseña" type="password" register={{...register("password", {required:true, minLength:8})}}/>
        {errors.password?.type==="required" && <span>El campo es obligatorio</span>}
        {errors.password?.type==="minLength" && <span>Debe completar al menos 8 caracteres</span>}
        <Button type="submit" variant="primary">Registrarme</Button>{' '}

        <AlertCustom variant={alert.variant} text={alert.text}/>
      </form>
    </div>
    );
}
  
  export default Registro;