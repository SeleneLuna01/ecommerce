import { useForm } from "react-hook-form"
import FormGroup from "../Components/FormGroup"
import Button from 'react-bootstrap/Button'
import firebase from '../Config/firebase';
import {useNavigate} from "react-router-dom"

function Login() {
  const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '540px'
  };

  const { register, handleSubmit, formState:{errors} } = useForm();
  const navigate = useNavigate()
  const onSubmit = async(data) => {
    try{
      const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password)
      if(responseUser.user.uid){
        const userInfo = await firebase.db.collection("usuarios")
        .where("userId","==",responseUser.user.uid)
        .get()
        console.log("userInfo", userInfo.docs[0]?.data())
      }
      navigate("/")
    }catch(e){
      console.log("error", e.code)
    }
  } 
  return (
    <div style={center}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup label="Email" type="email" register={{...register("email", {required:true})}}/>
        {errors.email && <span>El campo es obligatorio</span>}
        <FormGroup label="Contraseña" type="password" register={{...register("password", {required:true})}}/>
        {errors.password && <span>El campo es obligatorio</span>}
        <Button type="submit" variant="primary">Ingresar</Button>{' '}
      </form>
    </div>
  );
  }
  
  export default Login;