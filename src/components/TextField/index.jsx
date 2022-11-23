import React from 'react'
import Form from 'react-bootstrap/Form';


function TextField({id , style , value , as , disabled , label, type , inputProps , className , placeholder}) {
  return (
     <div className={className}>
     <Form.Label htmlFor={id}>{label}</Form.Label>
      <Form.Control
        {...inputProps}
        type={type}
        style={style}
        as={as}
        value ={value}
        placeholder={ placeholder}
        id={id}
        aria-describedby="passwordHelpBlock"
      />
     </div>
  )
}

export default TextField