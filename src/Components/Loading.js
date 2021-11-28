import React from "react"
import Spinner from 'react-bootstrap/Spinner'

function Loading(props) {
    const {active} = props
    if(active){
      return (
          <>
            <Spinner animation="border" variant="light"/>
            
          </>
       )
    }else{
      return(
        <>
          {props.children}
        </>
      )
    }
    
  }
  
export default Loading;