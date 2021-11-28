import Form from 'react-bootstrap/Form'

function FormGroup(props) {
    const {label, type, register} = props
    return (
      <>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type={type || "text"} placeholder={label} {...register} />
        </Form.Group>
      </>
    );
}
  
export default FormGroup;