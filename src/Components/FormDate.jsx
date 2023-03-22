import React from 'react'

const FormDate = ({ type, isReadonly, isRequired }) => {

    return (


        <div><input className="form-control" type={type} required={isRequired} readOnly={isReadonly} placeholder="Default input" aria-label="default input example" /></div>
    )
}

export default FormDate