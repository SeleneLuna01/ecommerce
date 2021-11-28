import React from "react"
function ProductoDetalle (props){
    const letter = {
        color: "white"
      }
      const box = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '540px' 
      }
  
      const boxuno = {
        marginLeft: '100px',
        marginTop: '50px',
        marginRight: "10px",
        border: '1px solid rgba(255, 255, 255, 255)',
        width: '400px', 
        borderRadius: "15px"

      }
  
    const{datos} = props
    console.log(props.datos)

    return(
        <>
            <div style={box}>
                    <div style={boxuno}>
                            <h1 style={letter}>{datos.title}</h1>
                            <p style={letter}>$ {datos.price}</p>
                            <p style={letter}>Cantidad disponible: {datos.available_quantity}</p>
                    </div>
            </div>
        </>
    )
}

export default ProductoDetalle;